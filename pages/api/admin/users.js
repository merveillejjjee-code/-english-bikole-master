import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../../lib/auth';
import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (!session || !session.user || session.user.role !== 'ADMIN') {
    return res.status(403).json({ error: 'Accès réservé aux administrateurs.' });
  }

  if (req.method === 'GET') {
    const users = await prisma.user.findMany({
      orderBy: { createdAt: 'asc' },
      select: { id: true, email: true, name: true, role: true, createdAt: true, progress: true },
    });
    const shaped = users.map((u) => ({
      id: u.id,
      email: u.email,
      name: u.name,
      role: u.role,
      createdAt: u.createdAt,
      chaptersCompleted: countCompleted(u.progress),
      xp: (u.progress && u.progress.xp) || 0,
    }));
    return res.status(200).json({ users: shaped });
  }

  if (req.method === 'PATCH') {
    const { userId, role } = req.body || {};
    if (!userId || !['USER', 'ADMIN'].includes(role)) {
      return res.status(400).json({ error: 'Paramètres invalides.' });
    }
    if (userId === session.user.id && role !== 'ADMIN') {
      return res.status(400).json({ error: 'Vous ne pouvez pas retirer votre propre statut administrateur.' });
    }
    const updated = await prisma.user.update({ where: { id: userId }, data: { role } });
    return res.status(200).json({ ok: true, role: updated.role });
  }

  if (req.method === 'DELETE') {
    const { userId } = req.body || {};
    if (!userId) return res.status(400).json({ error: 'userId requis.' });
    if (userId === session.user.id) {
      return res.status(400).json({ error: 'Vous ne pouvez pas supprimer votre propre compte ici.' });
    }
    await prisma.user.delete({ where: { id: userId } });
    return res.status(200).json({ ok: true });
  }

  res.setHeader('Allow', 'GET, PATCH, DELETE');
  return res.status(405).json({ error: 'Méthode non autorisée' });
}

function countCompleted(progress) {
  try {
    const chapters = (progress && progress.chapters) || {};
    return Object.values(chapters).filter((c) => c.status === 'completed' || c.status === 'mastered').length;
  } catch (e) {
    return 0;
  }
}

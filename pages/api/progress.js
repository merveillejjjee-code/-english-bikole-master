import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../lib/auth';
import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (!session || !session.user) {
    return res.status(401).json({ error: 'Non authentifié.' });
  }

  if (req.method === 'GET') {
    const user = await prisma.user.findUnique({ where: { id: session.user.id } });
    if (!user) return res.status(404).json({ error: 'Utilisateur introuvable.' });
    return res.status(200).json({ progress: user.progress, name: user.name, role: user.role });
  }

  if (req.method === 'PUT') {
    const { progress } = req.body || {};
    if (typeof progress !== 'object' || progress === null) {
      return res.status(400).json({ error: 'Progression invalide.' });
    }
    await prisma.user.update({ where: { id: session.user.id }, data: { progress } });
    return res.status(200).json({ ok: true });
  }

  res.setHeader('Allow', 'GET, PUT');
  return res.status(405).json({ error: 'Méthode non autorisée' });
}

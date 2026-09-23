import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../lib/auth';

export default function AdminPanel() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  async function load() {
    setLoading(true);
    const res = await fetch('/api/admin/users');
    const data = await res.json();
    if (res.ok) setUsers(data.users);
    else setError(data.error || 'Erreur.');
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  async function toggleRole(u) {
    const newRole = u.role === 'ADMIN' ? 'USER' : 'ADMIN';
    const res = await fetch('/api/admin/users', {
      method: 'PATCH',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ userId: u.id, role: newRole }),
    });
    const data = await res.json();
    if (!res.ok) { setError(data.error || 'Erreur.'); return; }
    load();
  }

  async function removeUser(u) {
    if (!confirm(`Supprimer le compte de ${u.email} ? Cette action est irréversible.`)) return;
    const res = await fetch('/api/admin/users', {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ userId: u.id }),
    });
    const data = await res.json();
    if (!res.ok) { setError(data.error || 'Erreur.'); return; }
    load();
  }

  return (
    <>
      <Head><title>Administration — English BIKOLE Master</title></Head>
      <div className="admin-wrap">
        <div className="admin-topbar">
          <h1 style={{ fontSize: 20 }}>Administration</h1>
          <Link href="/dashboard" className="btn btn-ghost btn-sm">← Retour au tableau de bord</Link>
        </div>
        {error && <p className="error-text">{error}</p>}
        {loading ? (
          <p className="muted">Chargement…</p>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Nom</th><th>Email</th><th>Rôle</th><th>Chapitres validés</th><th>XP</th><th>Inscrit le</th><th></th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.id}>
                    <td>{u.name || '—'}</td>
                    <td>{u.email}</td>
                    <td><span className={`role-pill ${u.role === 'ADMIN' ? 'admin' : ''}`}>{u.role}</span></td>
                    <td>{u.chaptersCompleted}</td>
                    <td>{u.xp}</td>
                    <td>{new Date(u.createdAt).toLocaleDateString('fr-FR')}</td>
                    <td className="admin-actions">
                      <button className="btn btn-ghost btn-sm" onClick={() => toggleRole(u)}>
                        {u.role === 'ADMIN' ? 'Rétrograder' : 'Promouvoir admin'}
                      </button>
                      <button className="btn btn-ghost btn-sm danger" onClick={() => removeUser(u)}>Supprimer</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (!session || !session.user) {
    return { redirect: { destination: '/login', permanent: false } };
  }
  if (session.user.role !== 'ADMIN') {
    return { redirect: { destination: '/dashboard', permanent: false } };
  }
  return { props: {} };
}

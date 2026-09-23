import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Une erreur est survenue.');
        setLoading(false);
        return;
      }
      const signInRes = await signIn('credentials', { redirect: false, email, password });
      setLoading(false);
      if (signInRes && signInRes.error) {
        router.push('/login');
        return;
      }
      router.push('/dashboard');
    } catch (err) {
      setError('Une erreur est survenue.');
      setLoading(false);
    }
  }

  return (
    <>
      <Head><title>Créer un compte — English BIKOLE Master</title></Head>
      <div className="landing">
        <form className="landing-card" style={{ maxWidth: 400 }} onSubmit={onSubmit}>
          <h1 style={{ fontSize: 22 }}>Créer un compte</h1>
          <label className="field-label">Prénom</label>
          <input className="text-input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <label className="field-label">Email</label>
          <input className="text-input" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <label className="field-label">Mot de passe (8 caractères minimum)</label>
          <input className="text-input" type="password" required minLength={8} value={password} onChange={(e) => setPassword(e.target.value)} />
          {error && <p className="error-text">{error}</p>}
          <button className="btn btn-primary" type="submit" disabled={loading} style={{ width: '100%', marginTop: 14 }}>
            {loading ? 'Création…' : 'Créer mon compte'}
          </button>
          <p className="small muted" style={{ marginTop: 14 }}>
            Déjà inscrit(e) ? <Link href="/login">Se connecter</Link>
          </p>
        </form>
      </div>
    </>
  );
}

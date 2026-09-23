import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    const res = await signIn('credentials', { redirect: false, email, password });
    setLoading(false);
    if (res && res.error) {
      setError('Email ou mot de passe incorrect.');
      return;
    }
    router.push('/dashboard');
  }

  return (
    <>
      <Head><title>Connexion — English BIKOLE Master</title></Head>
      <div className="landing">
        <form className="landing-card" style={{ maxWidth: 400 }} onSubmit={onSubmit}>
          <h1 style={{ fontSize: 22 }}>Connexion</h1>
          <label className="field-label">Email</label>
          <input className="text-input" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <label className="field-label">Mot de passe</label>
          <input className="text-input" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          {error && <p className="error-text">{error}</p>}
          <button className="btn btn-primary" type="submit" disabled={loading} style={{ width: '100%', marginTop: 14 }}>
            {loading ? 'Connexion…' : 'Se connecter'}
          </button>
          <p className="small muted" style={{ marginTop: 14 }}>
            Pas encore de compte ? <Link href="/register">Créer un compte</Link>
          </p>
        </form>
      </div>
    </>
  );
}

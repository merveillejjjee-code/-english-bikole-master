import Head from 'next/head';
import Link from 'next/link';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../lib/auth';

export default function Home() {
  return (
    <>
      <Head>
        <title>English BIKOLE Master</title>
      </Head>
      <div className="landing">
        <div className="landing-card">
          <div className="brandrow">
            <div className="mark">EB</div>
            <div>
              <h1>English BIKOLE Master</h1>
              <p className="tagline">Learn English. Speak English. Master English.</p>
            </div>
          </div>
          <p className="lead">Apprenez l&rsquo;anglais à votre rythme : cours structurés, audio, exercices et suivi de progression, du niveau Débutant à Expert.</p>
          <div className="cta-row">
            <Link href="/register" className="btn btn-primary">Commencer gratuitement</Link>
            <Link href="/login" className="btn btn-ghost">J&rsquo;ai déjà un compte</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (session) {
    return { redirect: { destination: '/dashboard', permanent: false } };
  }
  return { props: {} };
}

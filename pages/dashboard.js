import Head from 'next/head';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../lib/auth';
import prisma from '../lib/prisma';

export default function Dashboard({ user }) {
  return (
    <>
      <Head><title>English BIKOLE Master</title></Head>
      <div id="app"></div>
      <script
        id="em-user-data"
        dangerouslySetInnerHTML={{
          __html: `window.__EM_USER__ = ${JSON.stringify(user).replace(/</g, '\\u003c')};`,
        }}
      />
      <script src="/app.js" defer></script>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (!session || !session.user) {
    return { redirect: { destination: '/login', permanent: false } };
  }
  const dbUser = await prisma.user.findUnique({ where: { id: session.user.id } });
  if (!dbUser) {
    return { redirect: { destination: '/login', permanent: false } };
  }
  return {
    props: {
      user: {
        name: dbUser.name || '',
        email: dbUser.email,
        role: dbUser.role,
        progress: dbUser.progress || {},
      },
    },
  };
}

// Crée (ou promeut) un compte administrateur à partir des variables
// d'environnement ADMIN_EMAIL / ADMIN_PASSWORD / ADMIN_NAME.
// Usage : npm run seed   (après avoir défini ces variables)
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;
  const name = process.env.ADMIN_NAME || 'Administrateur';

  if (!email || !password) {
    console.log('ADMIN_EMAIL et ADMIN_PASSWORD doivent être définis pour créer un administrateur.');
    process.exit(1);
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const user = await prisma.user.upsert({
    where: { email },
    update: { role: 'ADMIN' },
    create: { email, name, passwordHash, role: 'ADMIN' },
  });

  console.log('Administrateur prêt :', user.email);
  process.exit(0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

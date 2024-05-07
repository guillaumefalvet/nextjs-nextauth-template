import { Prisma } from '@prisma/client';
import { prisma } from '../src/lib/db';

const seed = async () => {

  try {
    const data: Prisma.UserCreateArgs['data'][] = [
      {
        email: 'whitelist@email.com',
      },
    ];

    console.log('Seeding users...');

    // Create the default users
    prisma.user
      .createMany({
        data,
      })
      .then(() => {
        console.log('[!] Database users seeded');
      })
      .catch((error: any) => {
        console.log('[!] Error seeding database users', error);
      });
  } catch (error) {
    console.warn('Please define your seed data.');
    console.error(error);
  }
};

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

let materials = ['wood', 'metal', 'plastic', 'other'];

async function main() {
  for (let index = 0; index < 10; index++) {
    await prisma.jatek.create({
      data: {
        megnevezes: faker.vehicle.vehicle(),
        anyag: materials[Math.floor(Math.random() * materials.length)],
        suly: Math.floor(Math.random() * 100),
      },
    });
    await prisma.gyerek.create({
      data: {
        nev: faker.person.fullName(),
        cim: faker.location.streetAddress(),
        joE: Math.random() < 0.5,
      },
    });
  }

  for (let index = 0; index < 5; index++) {
    console.log(Math.floor(Math.random() * 9));
    await prisma.keres.create({
      data: {
        keroId: Math.floor(Math.random() * 9),
        jatekId: Math.floor(Math.random() * 9)
      }
    });
  }

  console.log('Seeding completed.');
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

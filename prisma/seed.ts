import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const jatek1 = await prisma.jatek.create({
    data: {
      megnevezes: 'lego',
      anyag: 'plastic',
      suly: 33,
    },
  })

  const jatek2 = await prisma.jatek.create({
    data: {
      megnevezes: 'sajt',
      anyag: 'other',
      suly: 2,
    },
  })

  const gyerek1 = await prisma.gyerek.create({
    data: {
      nev: 'Kis Anna',
      cim: 'Budapest',
      joE: true,
    },
  })

  const gyerek2 = await prisma.gyerek.create({
    data: {
      nev: 'Nagy Péter',
      cim: 'Debrecen',
      joE: false,
    },
  })

  await prisma.keres.create({
    data: {
      keroId: gyerek1.id,
      jatekId: jatek1.id,
    },
  })

  await prisma.keres.create({
    data: {
      keroId: gyerek1.id,
      jatekId: jatek2.id,
    },
  })

  await prisma.keres.create({
    data: {
      keroId: gyerek2.id,
      jatekId: jatek1.id,
    },
  })

  console.log('Seeding completed.')
}

main()
  .catch((e) => {
    console.error(e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
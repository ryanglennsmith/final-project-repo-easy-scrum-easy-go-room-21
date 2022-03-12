import { PrismaClient } from '@prisma/client';
import { wouldYouUnpackThatForMe } from './getAllData.js';

const prisma = new PrismaClient();

const prismaCall = async () => {
  const dbCourses = await prisma.user.findMany({
    include: {
      Course: {
        include: {
          Review: true,
        },
      },
    },
  });
  return dbCourses;
};

const bigDbData = await prismaCall()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

export const [coursesMap, usersMap] = wouldYouUnpackThatForMe(bigDbData);

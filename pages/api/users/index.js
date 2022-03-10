import { PrismaClient } from '@prisma/client';
import { wouldYouUnpackThatForMe } from '../../../db/getAllData.js';

const prisma = new PrismaClient();

export default async function handler(req, res) {
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

  const [usersMap] = wouldYouUnpackThatForMe(bigDbData);

  res.status(200).json(usersMap);
}

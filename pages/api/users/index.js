import { PrismaClient } from '@prisma/client';
import { wouldYouUnpackThatForMe } from '../../../db/getAllData.js';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const prismaCall = async () => {
      const createUser = await prisma.user.create({
        data: {
          email: req.body.email,
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          phone: req.body.phone,
        },
      });
    };
    const doDb = await prismaCall()
      .catch((e) => {
        throw e;
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
    res
      .status(200)
      .json({ email: req.body.email, message: 'VICTORY IS OURS!' });
  } else {
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
}

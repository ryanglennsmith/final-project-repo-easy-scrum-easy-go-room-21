import { PrismaClient } from '@prisma/client';
import { wouldYouUnpackThatForMe } from '../../../db/getAllData.js';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req.body);
    const prismaCall = async () => {
      const createReview = await prisma.review.create({
        data: req.body,
      });
      return createReview;
    };

    const bigDbData = await prismaCall()
      .catch((e) => {
        throw e;
      })
      .finally(async () => {
        await prisma.$disconnect();
      });

    //   const [usersMap] = wouldYouUnpackThatForMe(bigDbData);

    res.status(200).json({ data: 'good' });
  }
}

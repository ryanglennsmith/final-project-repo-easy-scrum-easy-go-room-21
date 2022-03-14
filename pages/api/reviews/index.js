import { PrismaClient } from '@prisma/client';
import { wouldYouUnpackThatForMe } from '../../../db/getAllData.js';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const prismaCall = async () => {
      const createReview = await prisma.review.create({
        data: {
          date: req.body.date,
          review_rating: req.body.review_rating,
          review_text: req.body.review_text,
          reviewer_id: req.body.reviewer_id,
          course_id: req.body.course_id,
        },
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

import { PrismaClient } from '@prisma/client';
import { wouldYouUnpackThatForMe } from '../../../db/getAllData.js';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // console.log('request body: ', req.body);

    // console.log('posted data: ', data);
    const prismaCall = async () => {
      const createCourse = await prisma.course.create({
        data: {
          teacher_id: req.body.teacher_id,
          location: req.body.location,
          is_remote: req.body.is_online,
          is_inperson: req.body.is_offline,
          dates_available: req.body.dates_available,
          course_brief: req.body.course_brief,
          course_title: req.body.course_title,
          course_tags: req.body.course_tags,
          image_url: req.body.image,
          long_description: req.body.long_description,
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
    res.status(200).json({ doDbMsg: doDb });
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

    const [coursesMap] = wouldYouUnpackThatForMe(bigDbData);

    res.status(200).json(coursesMap);
  }
}

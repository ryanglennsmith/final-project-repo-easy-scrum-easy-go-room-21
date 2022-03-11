import { PrismaClient } from '@prisma/client';
import { wouldYouUnpackThatForMe } from '../../../db/getAllData.js';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    console.log('request body: ', req.body);
    const data = {
      course_id: Number(req.query.id),
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
    };
    console.log('posted data: ', data);
    const prismaCall = async () => {
      const createCourse = await prisma.course.update({
        data: {
          // course_id: Number(req.query.id),
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
        where: {
          course_id: Number(req.query.id),
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
    res.status(200).json({ dataSent: data /* doDbMsg: doDb */ });
    // } else {
    // GET USER BY ID
  }
}

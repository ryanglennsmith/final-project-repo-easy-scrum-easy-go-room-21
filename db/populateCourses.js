// changing "type": "module" in package.json
// remember to remove
import pkg from '@prisma/client';
const { PrismaClient } = pkg;
// const API = JSON.parse(fs.readFileSync('./db/API.json'));
import { API } from '../utils/API.js';
const prisma = new PrismaClient();

const boolChecker = (day) => {
  return Object.values(day)[0] === 'true';
};
const dbUsers = await prisma.user.findMany();

async function main() {
  const createMany = await prisma.course.createMany({
    data: API.courses.map((course) => {
      return {
        teacher_id: dbUsers.filter((user) => {
          return user.email === course.email;
        })[0].id,
        location: course.location,
        is_remote: course.is_online === 'true',
        is_inperson: course.is_offline === 'true',
        dates_available: course.dates_available.map((date) =>
          boolChecker(date)
        ),
        course_brief: course.course_brief,
        course_title: course.course_title,
        course_tags: course.course_tags,
        image_url: course.image,
        long_description: course.long_description,
      };
    }),

    skipDuplicates: true,
  });
}
main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

//1. write code that converts string value in dates_available to boolean

// {"Monday":"true"} , -->  [true, false]

//2. convert dates_available

// fetches all users from DB

//if user.email === courses.email --> return id --> use that id as teacher_id

// console.log(dbUsers);
// const test = API.courses.map((course) => {
//   return {
//     teacher_id: dbUsers.filter((user) => {
//       return user.email === course.email;
//     })[0].id,
//     location: course.location,
//     is_remote: course.is_online,
//     is_inperson: course.is_offline,
//     dates_available: course.dates_available.map((date) => boolChecker(date)),
//     course_brief: course.course_brief,
//     course_title: course.course_title,
//     course_tags: course.course_tags,
//     image_url: course.image,
//     long_description: course.long_description,
//   };
// });

// console.log(test);

// //To-do

//1. We need m

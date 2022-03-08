// changing "type": "module" in package.json
// remember to remove
import pkg from '@prisma/client';
const { PrismaClient } = pkg;
// const API = JSON.parse(fs.readFileSync('./db/API.json'));
import { API } from '../utils/API.js';
const prisma = new PrismaClient();

const dbUsers = await prisma.user.findMany();
const dbCourses = await prisma.course.findMany();
//console.log('dbCourses :', dbCourses);

const test = API.courses.map((course) => {
  const result = course.reviews.filter((item) => {
    return item.length > 0;
  });
  // .map((review) => {
  //   return {
  //     course_id: dbCourses.find((item) => {
  //       return item.course_title === course.course_title;
  //     }).course_id,

  //     reviewer_id: dbUsers.find((user) => {
  //       return `${user.first_name} ${user.last_name}` === review.reviewer;
  //     }).id,

  //     date: review.date,
  //     review_rating: review.rating,
  //     review_text: review.review_text,
  //   };
  // });
  return result;
});

console.log(' test : ', test);
// async function main() {
//   const createMany = await prisma.review.createMany({
//     data: API.courses.map((course) => {
//       const result = course.reviews.map((review) => {
//         return {
//           course_id: dbCourses.find((item) => {
//             return item.course_title === course.course_title;
//           }).course_id,

//           reviewer_id: dbUsers.find((user) => {
//             return `${user.first_name} ${user.last_name}` === review.reviewer;
//           }).id,

//           date: review.date,
//           review_rating: review.rating,
//           review_text: review.review_text,
//         };
//       });
//     }),

//     skipDuplicates: true,
//   });
// }
// main()
//   .catch((e) => {
//     throw e;
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

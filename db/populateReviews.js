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

// loop through each course in API ->
// reviews are array within each course
// loop through reviews array to return each:
// review date
// review rating
// review text
// check off all above
// we need to find reviewer id -> match that against
// data already populated in DB: User
// check off this

// we need to find course id -> match that against
// data already populated in DB: Review
// if reviews array in courses is empty
// eliminate that array from the search

// else return all the reviews that have data

// return only courses with non-empty review arrays
const allReviews = API.courses
  .filter((course) => {
    return course.reviews.length > 0;
  })
  .map((course) => {
    return { [course.course_title]: course.reviews };
  });
// console.log(allReviews);

const test = API.courses.map((course) => {
  const result = course.reviews.map((review) => {
    return {
      course_id: dbCourses.find((item) => {
        return item.course_title === course.course_title;
      }).course_id,

      reviewer_id: dbUsers.find((user) => {
        return `${user.first_name} ${user.last_name}` === review.reviewer;
      }).id,

      date: review.date,
      review_rating: review.rating,
      review_text: review.review_text,
    };
  });
  return result[0];
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

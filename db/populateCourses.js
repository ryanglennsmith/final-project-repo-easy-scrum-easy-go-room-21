// changing "type": "module" in package.json
// remember to remove
import pkg from '@prisma/client';
const { PrismaClient } = pkg;
// const API = JSON.parse(fs.readFileSync('./db/API.json'));
import { API } from '../utils/API.js';
const prisma = new PrismaClient();

// const checkBio = (email) => {
//   if (
//     bios.filter((bio) => {
//       return Object.keys(bio)[0] === email;
//     })[0] === undefined
//   ) {
//     return null;
//   } else {
//     return Object.values(
//       bios.filter((bio) => {
//         return Object.keys(bio)[0] === email;
//       })[0]
//     )[0];
//   }
// };

// async function main() {
//   const createMany = await prisma.course.createMany({
//     data: API.courses.map((course) => {
//       return {
//         location: course.location,
//         is_remote: course.is_online,
//         is_inperson: course.is_offline,
//         dates_available: [],
//         course_brief: course.course_brief,
//         course_title: course.course_title,
//         course_tags: course.course_tags,
//         image_url: course.image,
//         long_description: course.long_description,
//       };
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

const test = API.courses.map((course) => {
  return {
    location: course.location,
    is_remote: course.is_online,
    is_inperson: course.is_offline,
    dates_available: [],
    course_brief: course.course_brief,
    course_title: course.course_title,
    course_tags: course.course_tags,
    image_url: course.image,
    long_description: course.long_description,
  };
});

console.log(test);

// changing "type": "module" in package.json
// remember to remove
import pkg from '@prisma/client';
const { PrismaClient } = pkg;
// const API = JSON.parse(fs.readFileSync('./db/API.json'));
import { API } from '../utils/API.js';
const prisma = new PrismaClient();
// bio_text is in API.courses
// match course will have email -> match bio_text to email
const bios = API.courses.map((course) => {
  return { [course.email]: course.bio_text };
});
// console.log(Object.keys(bios[0]));

const checkBio = (email) => {
  if (
    bios.filter((bio) => {
      return Object.keys(bio)[0] === email;
    })[0] === undefined
  ) {
    return null;
  } else {
    return Object.values(
      bios.filter((bio) => {
        return Object.keys(bio)[0] === email;
      })[0]
    )[0];
  }
};
// console.log(
//   bios.filter((bio) => {
//     return Object.keys(bio)[0] === user.email;
//   })[0] === undefined
// );

// console.log(bios[1]['ccopas1@slate.com']);
// console.log(
//   API.users.map((user) => {
//     return {
//       first_name: user.first_name,
//       last_name: user.last_name,
//       phone: user.phone,
//       email: user.email,

//       bio_text: checkBio(user.email),
//     };
//   })
// );

async function main() {
  const createMany = await prisma.user.createMany({
    data: API.users.map((user) => {
      return {
        first_name: user.first_name,
        last_name: user.last_name,
        phone: user.phone,
        email: user.email,

        bio_text: checkBio(user.email),
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

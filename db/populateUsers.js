// changing "type": "module" in package.json
// remember to remove
import fs from 'fs';
import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const jsonAPI = JSON.parse(fs.readFileSync('./db/API.json'));
const prisma = new PrismaClient();

async function main() {
  const createMany = await prisma.users.createMany({
    data: jsonAPI.users.map((user) => {
      return {
        first_name: user.first_name,
        last_name: user.last_name,
        phone: user.phone,
        email: user.email,
        bio_text: "I am a lumberjack, and I'm okay",
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

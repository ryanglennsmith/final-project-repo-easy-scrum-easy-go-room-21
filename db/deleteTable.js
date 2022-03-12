import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient();
async function main() {
  const deleteUsers = await prisma.user.deleteMany({});
}
main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

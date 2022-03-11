import { PrismaClient } from '@prisma/client';
import { wouldYouUnpackThatForMe } from '../../../db/getAllData.js';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const id = Number(req.query.id);
    const prismaCall = async () => {
      const updateUser = await prisma.user.update({
        data: {
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          phone: req.body.phone,
        },
        where: {
          id: id,
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
    res.status(200).json({ message: 'VICTORY IS OURS!', payload: doDb });
  }
}

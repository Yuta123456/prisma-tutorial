// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, User } from "@prisma/client";

type Data = {
  user: User;
};

type Request = {
  id: string;
  email: string;
  name: string;
};
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const prisma = new PrismaClient();
  const requestHandler = async () => {
    const { id, email, name } = JSON.parse(req.body);
    const user = await prisma.user.create({
      data: {
        id,
        email,
        name,
      },
    });
    res.status(200).json({ user });
  };
  requestHandler()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
}

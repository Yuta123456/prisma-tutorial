// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { supabase } from "../supabase";
import { User } from "@supabase/supabase-js";

type Data = {
  user: User;
};

// type Request = {
//   email: string;
//   name: string;
// };
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { email, password } = JSON.parse(req.body);
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (!error && data.user) {
    res.status(200).json({ user: data.user });
  }
}

// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

const examples = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(process.env.NEXTAUTH_SECRET);
  console.log(process.env.NEXTAUTH_AUTH);
  res.status(200).json(examples);
};

export default examples;

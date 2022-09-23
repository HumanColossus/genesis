import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../server/db/client";
import { signIn } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
      maxAge: 24 * 60 * 60, // How long email links are valid for (default 24h)
    }),
  ],
  pages: {
    signIn: "/sign-in",
    verifyRequest: "/check-email",
  },
  callbacks: {
    signIn({ user }) {
      if (!user.name) {
        return "/new-user";
      }
      return true;
    },
  },
});

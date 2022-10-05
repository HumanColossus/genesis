import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../server/db/client";
import { signIn } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import TwitterProvider from "next-auth/providers/twitter";

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID!,
      clientSecret: process.env.TWITTER_CLIENT_SECRET!,
      version: "2.0",
    }),
  ],
  pages: {
    signIn: "/sign-in",
    verifyRequest: "/check-email",
  },
  callbacks: {
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.

      const userInfo = await prisma.user.findUnique({
        where: {
          id: user.id,
        },
        select: {
          username: true,
        },
      });

      if (!userInfo) {
        return session;
      }

      session.user!.id = user.id;
      session.user!.username = userInfo.username!;

      return session;
    },
  },
});

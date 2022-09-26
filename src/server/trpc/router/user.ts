import { t } from "../utils";
import { z } from "zod";
import { addAdditionalInfo, createAccountSchema } from "src/utils/schemas";

const imageUrl = process.env.S3_URL;

export const userRouter = t.router({
  user: t.procedure
    .input(
      z.object({
        username: z.string().optional(),
        email: z.string().optional(),
      })
    )
    .query(({ input, ctx }) => {
      if (!input.username) return;
      return ctx.prisma.user.findUnique({
        where: {
          ...(input.username && { username: input.username! }),
          ...(input.email && { id: input.email! }),
        },
        select: {
          featuredPost: true,
          image: true,
          name: true,
          username: true,
          level: true,
          age: true,
          from: true,
          category: true,
          aboutMe: true,
          substack: true,
          twitter: true,
          personalSite: true,
        },
      });
    }),
  createAccount: t.procedure
    .input(createAccountSchema)
    .mutation(async ({ input, ctx }) => {
      const user = await ctx.prisma.user.update({
        where: {
          email: input.email,
        },
        data: {
          name: input.name,
          aboutMe: input.bio,
          category: input.discipline ?? "??",
          from: input.from ?? "??",
          age: input.age,
          image: `${imageUrl}${input.image}`,
        },
      });

      return user.id;
    }),
  addAdditionalInfo: t.procedure
    .input(addAdditionalInfo)
    .mutation(async ({ input, ctx }) => {
      const user = await ctx.prisma.user.update({
        where: {
          email: input.email,
        },
        data: {
          substack: input.substack,
          twitter: input.twitter,
          personalSite: input.personalSite,
        },
      });

      return user.id;
    }),
});

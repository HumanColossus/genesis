import { t } from "../utils";
import { z } from "zod";
import { createPostSchema } from "src/utils/schemas";

export const postRouter = t.router({
  post: t.procedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(({ input, ctx }) => {
      return ctx.prisma.post.findUnique({
        where: {
          id: input.id,
        },
      });
    }),
  posts: t.procedure
    .input(
      z.object({
        username: z.string().optional(),
        email: z.string().optional(),
      })
    )
    .query(async ({ input, ctx }) => {
      const user = await ctx.prisma.user.findUnique({
        where: {
          ...(input.email && { email: input.email }),
          ...(input.username && { username: input.username }),
        },
      });

      if (!user) {
        throw new Error("User not found");
      }

      return ctx.prisma.post.findMany({
        where: {
          author: user,
        },
        include: {
          author: {
            select: {
              username: true,
              name: true,
            },
          },
        },
      });
    }),
  createPost: t.procedure
    .input(
      z.object({
        data: createPostSchema,
        author: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const user = await ctx.prisma.user.findUnique({
        where: {
          email: input.author,
        },
      });

      if (!user) {
        throw new Error("User not found");
      }

      return await ctx.prisma.post.create({
        data: {
          ...input.data,
          authorId: user.id,
        },
      });
    }),
});

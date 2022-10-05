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
        include: {
          author: {
            select: {
              username: true,
              name: true,
              image: true,
              category: true,
              age: true,
              from: true,
            },
          },
        },
      });
    }),
  getUserPosts: t.procedure
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
              image: true,
              category: true,
              age: true,
              from: true,
            },
          },
        },
      });
    }),
  posts: t.procedure.input(z.object({})).query(async ({ input, ctx }) => {
    return ctx.prisma.post.findMany({
      include: {
        author: {
          select: {
            username: true,
            name: true,
            image: true,
            category: true,
            age: true,
            from: true,
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
          username: input.author,
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

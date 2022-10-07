import { z } from "zod";
import { createPostSchema } from "../../utils/schema";
import { createRouter } from "./context";

export const postRouter = createRouter()
  .query("post", {
    input: z.object({
      id: z.string(),
    }),
    resolve({ input, ctx }) {
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
    },
  })
  .query("posts", {
    resolve({ ctx }) {
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
    },
  })
  .query("userPosts", {
    input: z.object({
      userId: z.string(),
    }),
    resolve({ input, ctx }) {
      return ctx.prisma.post.findMany({
        where: {
          authorId: input.userId,
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
    },
  })
  .mutation("createPost", {
    input: z.object({
      data: createPostSchema,
      author: z.string(),
    }),
    async resolve({ input, ctx }) {
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
    },
  });

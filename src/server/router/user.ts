import { z } from "zod";
import { createAccountSchema } from "../../utils/schema";
import { createRouter } from "./context";

export const userRouter = createRouter()
  .query("user", {
    input: z.object({
      username: z.string(),
    }),
    resolve({ input, ctx }) {
      return ctx.prisma.user.findUnique({
        where: {
          username: input.username,
        },
      });
    },
  })
  .mutation("updateAccount", {
    input: createAccountSchema,
    async resolve({ input, ctx }) {
      const user = await ctx.prisma.user.update({
        where: {
          username: input.username,
        },
        data: {
          name: input.name,
          aboutMe: input.bio,
          category: input.discipline ?? "??",
          from: input.from ?? "??",
          age: input.age,
        },
      });

      return user.id;
    },
  });

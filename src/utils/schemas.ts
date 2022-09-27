import { z } from "zod";

export const createAccountSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name should be greater than 1 character" })
    .max(250, { message: "You've got a long name!" }),
  bio: z
    .string()
    .min(1, { message: "Bio should be greater than 1 character" })
    .max(1000, {
      message: "We're aiming for concise bio's on Colossus, please try again.",
    }),
  discipline: z
    .string()
    .max(50, {
      message:
        "We're aiming for concise disciplines on Colossus, please try again.",
    })
    .nullable(),
  from: z
    .string()
    .max(100, {
      message:
        "We're aiming for concise disciplines on Colossus, please try again.",
    })
    .nullable(),
  age: z.number().max(100, { message: "Users must be under 100" }).optional(),
  email: z.string().optional(),
  image: z.string().optional(),
});

export const addAdditionalInfo = z.object({
  twitter: z.string().optional(),
  substack: z.string(),
  personalSite: z.string(),
  email: z.string().optional(),
});

export const createPostSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  content: z.string(),
});

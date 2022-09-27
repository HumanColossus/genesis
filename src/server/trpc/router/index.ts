// src/server/router/index.ts
import { t } from "../utils";

import { exampleRouter } from "./example";
import { imageRouter } from "./image";
import { postRouter } from "./post";
import { userRouter } from "./user";

export const appRouter = t.router({
  example: exampleRouter,
  user: userRouter,
  image: imageRouter,
  post: postRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

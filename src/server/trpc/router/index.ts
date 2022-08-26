// src/server/router/index.ts
import { t } from "../utils";

import { exampleRouter } from "./example";
import { userRouter } from "./user";

export const appRouter = t.router({
  example: exampleRouter,
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

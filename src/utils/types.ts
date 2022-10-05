import { NextPage } from "next";

export type NextPageWithAuth = NextPage & {
  auth?: boolean;
  callback?: string;
};

import "next-auth";

declare module "next-auth" {
  export interface Session {
    user?: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      username?: string | null;
      id?: string | null;
    };
  }
}

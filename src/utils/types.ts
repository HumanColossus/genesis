import { NextPage } from "next";

export type NextPageWithAuth = NextPage & {
  auth?: boolean;
  callback?: string;
};

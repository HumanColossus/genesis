import { t } from "../utils";
import { z } from "zod";
import AWS from "aws-sdk";

const credentials = {
  accessKeyId: process.env.S3_ACCESS_KEY!,
  secretAccessKey: process.env.S3_SECRET_KEY!,
};

const s3 = new AWS.S3({
  region: "us-east-1",
  credentials: credentials,
  signatureVersion: "v4",
});

export const imageRouter = t.router({
  getSignedURL: t.procedure
    .input(z.object({ text: z.string() }))
    .mutation(({ input }) => {
      const presignedGETURL = s3.getSignedUrl("putObject", {
        Bucket: "thehumancolossus",
        Key: `${input?.text}.jpg`,
        Expires: 100,
      });
      return {
        url: presignedGETURL,
      };
    }),
});

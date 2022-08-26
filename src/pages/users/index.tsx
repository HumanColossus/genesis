import type { NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import { appRouter } from "src/server/trpc/router";
import { trpc } from "src/utils/trpc";
import { prisma } from "../../server/db/client";

export async function getStaticProps(context) {
  const router = appRouter.createCaller({ prisma });
  const hello = await router.example.hello();
  return {
    props: { hello: context.parms }, // will be passed to the page component as props
  };
}

const Profile: NextPage<{ hello: string }> = ({ hello }) => {
  const { data: session } = useSession();

  console.log(session);

  console.log("hello: ", hello);

  const test = trpc.proxy.example.hello.useQuery();
  console.log("test: ", test.data?.greeting);
  console.log("test status: ", test.status);

  return (
    <main>
      <h1>Test: {session?.user?.email}</h1>
      <button onClick={() => signIn("email")}>Sign in</button>
    </main>
  );
};

export default Profile;

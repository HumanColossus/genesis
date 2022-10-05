import type { NextPage } from "next";
import Link from "next/link";
import { Main, LargeBlockContent, Header } from "../../components/basics";
import { signatures } from "../../configs/signatures";
import classNames from "classnames";
import { useRouter } from "next/router";
import { trpc } from "src/utils/trpc";
import { useSession } from "next-auth/react";

const Index: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const ID = id as string;

  const posts = trpc.proxy.post.post.useQuery({
    id: ID,
  });

  const { data: session, status } = useSession();

  const AuthHeader = () => {
    if (status === "loading") {
      return null;
    }
    if (session) {
      return (
        <Header
          value="Profile"
          link={`/${session.user!.username}`}
          showBackground
        />
      );
    }

    return <Header value="Join the Colossus" link="/" showBackground />;
  };

  return (
    <Main>
      <AuthHeader />
      <div>
        <h1 className="mb-4 mt-6 text-4xl font-bold text-white">
          {posts.data?.title}
        </h1>
        <div className="mt-3 flex gap-3 font-mono text-sm">
          <p className="text-[#747485]">by</p>
          <p>{posts.data?.author.name}</p>
          <p className="m-0 pt-0.5 font-mono text-sm text-[#747485]">
            / {posts.data?.created.toDateString()}
          </p>
        </div>
      </div>
      <hr className={"mt-0 border-0.1 border-solid border-[#2D304F]"} />
      <p className=" w-full px-1 font-thin	leading-6	text-[#D2D2D8]">
        {posts.data?.content}
      </p>
      <hr className={"mt-0 border-0.1 border-solid border-[#2D304F]"} />
      <div>
        <div className="overflow-hidden pb-1">
          <h1 className="mt-0 text-2xl">/ Author</h1>
          <div className="mt-4 flex flex-col gap-4">
            <Link href={`/${posts.data?.author.username}`}>
              <div className="cursor-pointer">
                <LargeBlockContent
                  image={posts.data?.author.image!}
                  title={posts.data?.author.name!}
                >
                  <p className="text-[#747485]">in</p>
                  <p
                    className={classNames({
                      "text-[#e1b13e]": signatures[2]?.name === "Rhodos",
                    })}
                  >
                    {posts.data?.author.category}
                  </p>
                  <p className="text-[#747485]">/</p>
                  <p>
                    {posts.data?.author.age === 0
                      ? "??"
                      : posts.data?.author.age}
                  </p>
                  <p className="text-[#747485]">from</p>
                  <p>{posts.data?.author.from}</p>
                </LargeBlockContent>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <hr className={"mt-0 border-0.1 border-solid border-[#2D304F]"} />
      <div>
        <div className="flex justify-between">
          <h1 className="mt-0 text-2xl">/ Comments</h1>
          <div className="flex gap-3 ">
            <Link href="/apply">
              <div
                className={
                  " rounded-md bg-[#191933] px-3 pt-1 pb-1 font-button text-sm font-light"
                }
              >
                Comment
              </div>
            </Link>
          </div>
        </div>
        <div className="mt-4 h-40 rounded-md border border-[#30303A] text-center">
          <p className="mt-16 text-[#A0A0AC]">Coming soon...</p>
        </div>
      </div>
    </Main>
  );
};

export default Index;

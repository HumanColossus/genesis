import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Container, Header, Main } from "../components/basics";
import Mission from "../../public/other/Icon.png";
import { trpc } from "../utils/trpc";

const Profile: NextPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const posts = trpc.useQuery(["post.posts"]);

  if (status === "loading") {
    return <></>;
  }

  return (
    <Main>
      <Header />
      <Container title="/ Posts" link="Create a post" linkHref="/add-post">
        <div>
          {posts.data &&
            posts.data?.map((post, i) => {
              return (
                <div
                  className="border-0.5 my-2 flex cursor-pointer items-center rounded border-[#2D304F] p-2"
                  key={i}
                  onClick={() => router.push(`/posts/${post.id}`)}
                >
                  <Image
                    src={Mission}
                    alt="hc logo"
                    width={40}
                    height={40}
                    className="rounded"
                  />
                  <div className="ml-2 w-full overflow-hidden">
                    <h1 className="text-lg">{post.title}</h1>
                    <div className="flex gap-1 font-mono text-xs">
                      <h2 className="truncate">{post.subtitle}</h2>
                      <h2 className="whitespace-nowrap text-muted">from</h2>
                      <h2 className="whitespace-nowrap">{post.author.name}</h2>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </Container>
    </Main>
  );
};

export default Profile;

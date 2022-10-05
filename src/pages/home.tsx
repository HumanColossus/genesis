import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Container, Header, Main } from "src/components/basics";
import { trpc } from "src/utils/trpc";
import { NextPageWithAuth } from "src/utils/types";
import Mission from "../../public/other/Icon.png";
import Arrow from "../../public/other/arrow.svg";

const Home: NextPageWithAuth = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const posts = trpc.proxy.post.posts.useQuery({});

  if (status === "loading") {
    return <></>;
  }

  return (
    <Main>
      <Header />
      <Container title="/ Projects">
        <div>
          {posts.data &&
            posts.data?.map((post, i) => {
              return (
                <div
                  className="border-0.5 my-2 flex items-center rounded border-[#2D304F] p-2"
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

      <Container title="/ Posts" link="More posts" linkHref="/posts">
        <div>
          {posts.data &&
            posts.data?.map((post, i) => {
              return (
                <div
                  className="border-0.5 my-2 flex items-center rounded border-[#2D304F] p-2"
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

Home.auth = true;

export default Home;

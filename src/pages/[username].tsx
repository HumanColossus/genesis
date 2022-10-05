import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  Container,
  Header,
  Hrline,
  ImageButton,
  Main,
} from "src/components/basics";
import { trpc } from "src/utils/trpc";
import GoldStar from "../../public/icons/GoldStar.svg";
import RedStar from "../../public/icons/RedStar.svg";
import Twitter from "../../public/icons/Twitter.svg";
import Substack from "../../public/icons/Substack.svg";
import Site from "../../public/icons/Site.svg";
import Mission from "../../public/other/Icon.png";
import { useProfileImg } from "src/hooks/hooks";
import Link from "next/link";

const Profile: NextPage = () => {
  const router = useRouter();
  const { username } = router.query;
  const userName = username as string;
  const { data: session, status } = useSession();

  const user = trpc.proxy.user.user.useQuery({ username: userName });
  const posts = trpc.proxy.post.posts.useQuery({
    username: userName,
  });

  const { data: profImg } = useProfileImg(user.data?.username);

  const AuthHeader = () => {
    if (status === "loading" || user.isLoading) {
      return null;
    }
    if (session?.user?.name === user.data?.name) {
      return <Header value="Edit Profile" link="/profile" showBackground />;
    }

    return <Header value="Join the Colossus" link="/" showBackground />;
  };

  const star = () => {
    if (user.data?.level === 999) {
      return (
        <Image
          src={GoldStar}
          alt=""
          width={15}
          height={15}
          className="mt-[-1px]"
        />
      );
    }
    return (
      <Image
        src={RedStar}
        alt=""
        width={15}
        height={15}
        className="mt-[-1px]"
      />
    );
  };

  if (!user.isLoading && !user.data && status !== "loading") {
    router.push("/404");
    return <></>;
  }

  if (status === "loading") {
    return <></>;
  }

  return (
    <Main>
      <AuthHeader />
      <div className="-mt-4 flex flex-col gap-y-2">
        <Hrline />
        <div className=" flex items-center gap-4">
          <Image
            src={user.data?.image!}
            alt="The human colossus logo"
            width={45}
            height={45}
            className="rounded-md"
          />
          <h1 className="text-3xl font-medium">{user.data?.name}</h1>
        </div>
        <div className="mt-1 flex flex-wrap gap-2 font-mono text-[0.80rem] text-[#CCCCD2]">
          <div className="flex">{star()}</div>
          {user.data?.level === 999 ? (
            <h1 className="text-[#FFE604]">Founding Member</h1>
          ) : (
            <h1 className="text-[#FF4004]">Level {user.data?.level}</h1>
          )}
          <div className="flex gap-2">
            <h1 className="text-muted">/</h1>
            <h1 className="text-muted">from</h1>
            <h1>Denver 🇺🇸</h1>
          </div>
          <div className="flex gap-2">
            <h1 className="text-muted">/</h1>
            <h1>{user.data?.age! === 0 ? "??" : user.data?.age}</h1>
          </div>
          <div className="flex gap-2">
            <h1 className="text-muted">/</h1>
            <h1 className="text-muted">in</h1>
            <h1>{user.data?.category}</h1>
          </div>
        </div>
        <Hrline />
        <div className="mt-1 mb-1">
          <div className="flex justify-between">
            <h1 className="text-[22px]">About me</h1>

            <div className=" flex justify-between gap-3 px-3">
              {user.data?.twitter && (
                <ImageButton
                  text=""
                  textColor="text-[#DDDDE8]"
                  border="border-[#0077B5]"
                  click={() => router.push(user.data?.twitter!)}
                >
                  <Image
                    src={Twitter}
                    alt=""
                    width="16px"
                    height="16px"
                  ></Image>
                </ImageButton>
              )}
              {user.data?.substack && (
                <ImageButton
                  text=""
                  textColor="text-[#DDDDE8]"
                  border="border-[#FE6719]"
                  click={() => router.push(user.data?.substack!)}
                >
                  <Image
                    src={Substack}
                    alt=""
                    width="16px"
                    height="16px"
                  ></Image>
                </ImageButton>
              )}
              {user.data?.personalSite && (
                <ImageButton
                  text=""
                  textColor="text-[#DDDDE8]"
                  border="border-[#5865F1]"
                  click={() => router.push(user.data?.personalSite!)}
                >
                  <Image src={Site} alt="" width="16px" height="16px"></Image>
                </ImageButton>
              )}
            </div>
          </div>
          <p className="mt-1.5 text-[15px]">{user.data?.aboutMe}</p>
        </div>
        <Hrline />
      </div>

      {/* <Box styles="px-4 py-3.5">
        <div>
          <a href={`/posts/${user.data?.featuredPost?.id}`}>
            <div className="flex h-10 items-center justify-between truncate">
              <div className="flex">
                {profImg && (
                  <Image
                    src={profImg}
                    alt="User profile image"
                    width={40}
                    height={40}
                    className="rounded"
                    layout="fixed"
                  />
                )}
                <div className="mx-3 flex flex-col justify-between">
                  <h1 className="text-normal font-semibold leading-5.5 text-[#E9E9EC]">
                    {user.data?.featuredPost?.title}
                  </h1>
                  <div className="mt-0 flex w-full gap-2 whitespace-nowrap font-mono text-xs leading-[16.5px] text-[#BBBBC3]">
                    <p className="text-[#747485]">learn how to</p>
                    <p>{user.data?.featuredPost?.description}</p>
                    <p className="text-[#747485]">with</p>
                    <p className="">{user.data?.name!}</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </Box> */}

      <Container
        title="/ Posts"
        link={session?.user?.name === user.data?.name ? "Add Post" : ""}
        linkHref="/add-post"
      >
        <div>
          {posts.data &&
            posts.data?.map((post, i) => {
              return (
                <Link href={`/posts/${post.id}`} key={i}>
                  <div className="border-0.5 my-2 flex cursor-pointer items-center rounded border-[#2D304F] p-2">
                    <Image
                      src={post.author.image!}
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
                        <h2 className="whitespace-nowrap">
                          {post.author.name}
                        </h2>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </Container>

      {/* <Container title="/ Organizations">
        <ScrollableWrapper>
          <Organization
            title="A global education platform for the self-motivated."
            image="https://pbs.twimg.com/profile_images/1555419633460473856/tabdTAGz_400x400.jpg"
            location="🌍"
            time="June 2022"
            size="50+"
            name="Colossus"
            link=""
            category="Education"
          />
        </ScrollableWrapper>
      </Container>

      <Container title="/ Projects">
        <ScrollableWrapper>
          <Organization
            title="A global education platform for the self-motivated."
            image="https://pbs.twimg.com/profile_images/1555419633460473856/tabdTAGz_400x400.jpg"
            location="🌍"
            time="June 2022"
            size="50+"
            name="Colossus"
            link=""
            category="Education"
          />
        </ScrollableWrapper>
      </Container> */}
    </Main>
  );
};

export default Profile;

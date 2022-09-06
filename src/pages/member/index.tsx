import type { NextPage } from "next";
import Image from "next/image";
import { Box, Container, Header, Hrline, ImageButton, Main, Organization, ScrollableWrapper } from "src/components/basics";
import GoldStar from "../../../public/icons/GoldStar.svg";
import RedStar from "../../../public/icons/RedStar.svg";
import Twitter from "../../../public/icons/Twitter.svg";
import Substack from "../../../public/icons/Substack.svg";
import Site from "../../../public/icons/Site.svg";
import ProfileImage from "../../../public/profile-pictures/Avi.jpg";

const Profile: NextPage = () => {
  return (
    <Main>
      <Header value="Join the Colossus" link="/" showBackground />
      <div className="-mt-4 flex flex-col gap-y-2">
        <Hrline />
        <div className=" flex items-center gap-4">
          <Image src={ProfileImage} alt="The human colossus logo" width={45} height={45} className="rounded-md" />
          <h1 className="text-3xl font-medium">Avi Schifmann</h1>
        </div>
        <div className="mt-1 flex flex-wrap gap-2 font-mono text-[0.80rem] text-[#CCCCD2]">
          <div className="flex">
            <Image src={GoldStar} alt="" width={15} height={15} className="mt-[-1px]" />
          </div>
          <h1 className="text-[#FFE604]">Founding Member</h1>
          <div className="flex gap-2">
            <h1 className="text-muted">/</h1>
            <h1>19</h1>
          </div>
          <div className="flex gap-2">
            <h1 className="text-muted">from</h1>
            <h1>Denver 🇺🇸</h1>
          </div>
          <div className="flex gap-2">
            <h1 className="text-muted">/</h1>
            <h1 className="text-muted">in</h1>
            <h1>Online Activism</h1>
          </div>
        </div>
        <Hrline />
        <div className="mt-1 mb-1">
          <div className="flex justify-between">
            <h1 className="text-[22px]">About me</h1>

            <div className=" flex justify-between gap-3 px-3">
              <ImageButton text="" textColor="text-[#DDDDE8]" border="border-[#0077B5]" click={() => router.push(`https://twitter.com/${user.data?.twitter}`)}>
                <Image src={Twitter} alt="" width="16px" height="16px"></Image>
              </ImageButton>
              <ImageButton text="" textColor="text-[#DDDDE8]" border="border-[#FE6719]" click={() => router.push(user.data?.substack!)}>
                <Image src={Substack} alt="" width="16px" height="16px"></Image>
              </ImageButton>
              <ImageButton text="" textColor="text-[#DDDDE8]" border="border-[#5865F1]" click={() => router.push(user.data?.personalSite!)}>
                <Image src={Site} alt="" width="16px" height="16px"></Image>
              </ImageButton>
            </div>
          </div>
          <p className="mt-1.5 text-[15px]">Test test</p>
        </div>
        <Hrline />
      </div>

      {/* <Box styles="px-4 py-3.5">
        <div>
          <a href={`/posts/${user.data?.featuredPost?.id}`}>
            <div className="flex h-10 items-center justify-between truncate">
              <div className="flex">
                {profImg && <Image src={profImg} alt="User profile image" width={40} height={40} className="rounded" layout="fixed" />}
                <div className="mx-3 flex flex-col justify-between">
                  <h1 className="text-normal font-semibold leading-5.5 text-[#E9E9EC]">{user.data?.featuredPost?.title}</h1>
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

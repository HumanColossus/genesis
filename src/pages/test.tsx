import type { NextPage } from "next";
import Image from "next/image";
import GoldStar from "../../public/icons/GoldStar.svg";
import Twitter from "../../public/icons/Twitter.svg";
import Substack from "../../public/icons/Substack.svg";
import Message from "../../public/icons/Message.svg";
import { Main, Container, ScrollableWrapper, BuilderStory, Hrline, Box, Organization, Header, ImageButton } from "../components/basics";

const Test: NextPage = () => {
  return (
    <Main>
      <Header value="Join the Colossus" link="/" showBackground />
      <div className="-mt-4 flex flex-col gap-y-2">
        <Hrline />
        <div className=" mt-1 flex items-center gap-4">
          <Image
            src="https://pbs.twimg.com/profile_images/1330934712165167104/CEJ0NPF0_400x400.jpg"
            alt="The human colossus logo"
            width={45}
            height={45}
            className="rounded-md"
          />
          <h1 className="text-4xl font-medium">Will DePue</h1>
        </div>
        <div className="mt-1.5 flex gap-2.5 font-mono text-sm text-[#CCCCD2]">
          <Image src={GoldStar} alt="" width={15} height={15} style={{ marginTop: "-1px" }}></Image>
          <h1 className="text-[#FFE604]">Founding Member</h1>
          <h1 className="text-muted">/</h1>
          <h1>19</h1>
          <h1 className="text-muted">from</h1>
          <h1>Denver 🇺🇸</h1>
          <h1 className="text-muted">/</h1>
          <h1 className="text-muted">in</h1>
          <h1>Stuff</h1>
        </div>
        <Hrline />

        <div className="mt-1 mb-1">
          <div className="flex justify-between">
            <h1 className="text-[22px]">About me</h1>

            <div className=" flex justify-between gap-3 px-3">
              <ImageButton text="" textColor="text-[#DDDDE8]" border="border-[#0077B5]">
                <Image src={Twitter} alt="" width="16px" height="16px"></Image>
              </ImageButton>
              <ImageButton text="" textColor="text-[#DDDDE8]" border="border-[#FE6719]">
                <Image src={Substack} alt="" width="16px" height="16px"></Image>
              </ImageButton>
              <ImageButton text="" textColor="text-[#DDDDE8]" border="border-[#5865F1]">
                <Image src={Message} alt="" width="16px" height="16px"></Image>
              </ImageButton>
            </div>
          </div>
          <p className="mt-1.5 text-[15px]">
            How to properly measure a (blockchain) system is one of the least talked about but most significant steps in its design and evaluation. There are
            numerous consensus protocols and variations with various performance and scalability tradeoffs. But as of yet, there is still no universally
            agreed-upon, reliable method that enables apples-to-apples comparisons.
          </p>
        </div>
      </div>

      <Box styles="px-4 py-3.5">
        <BuilderStory
          title="How I built Discord analytics for 3m+ community members."
          image="https://pbs.twimg.com/profile_images/1330934712165167104/CEJ0NPF0_400x400.jpg"
          description="build an analytics service"
          name="Will DePue"
          link=""
        />
      </Box>

      <Container title="/ Organizations">
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
      </Container>
    </Main>
  );
};

export default Test;

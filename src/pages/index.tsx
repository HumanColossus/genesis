import type { NextPage } from "next";
import Link from "next/link";
import Mission from "../../public/other/Icon.png";
import { Main, Container, ScrollableWrapper, BlockContent, BlockWrapper, BuilderStory, LargeBlockContent, Header } from "../components/basics";
import { signatures } from "../configs/signatures";
import classNames from "classnames";
import WillShaded from "../../public/profile-pictures/WillShaded.png";
import MiguelShaded from "../../public/profile-pictures/MiguelShaded.png";
import TwitterIcon from "../../public/icons/TwitterIconNoBG.png";
import Image from "next/image";

const Index: NextPage = () => {
  return (
    <Main>
      <Header link="/apply" value="Join The Colossus" showBackground={true} />
      <Container title="/ Our Mission">
        <ScrollableWrapper>
          <Link href="/memo">
            <a>
              <BlockWrapper>
                <BlockContent image={Mission} title="The Human Colossus: Founding Memo">
                  <p className="text-[#747485]">via</p>
                  <p>colossus.fyi</p>
                  <p className="text-[#747485]">/</p>
                  <p className="text-[#747485]">Expose ambition. Recruiting young buil...</p>
                </BlockContent>
              </BlockWrapper>
            </a>
          </Link>
        </ScrollableWrapper>
      </Container>
      <Container title="/ Builder Stories">
        <ScrollableWrapper>
          <div className="flex flex-col gap-3.5">
            <BuilderStory
              title="How I built a platform to help Ukrainian refugees find homes."
              image={signatures[2]?.image}
              description="do online activism"
              name="Avi Schiffman"
              link="/posts/avi-interview"
            />
            <BuilderStory
              title="How I built a deep tech startup at 18 years old."
              image={signatures.find((sig) => sig.name === "Jack O'Regan Kenney")?.image}
              description="build hardware"
              name="Jack O'Regan Kenney"
              link="/posts/jack-interview"
            />

            {/* <BuilderStory title="Releasing on September 18th." image={WillShaded} description="????? ?? ?????? ??????" name="???? ?????" /> */}
            <BuilderStory
              title="How I raised $42m in 4 days to buy the constitution."
              image={signatures[1]?.image}
              description="steal the constitution"
              name="Miguel Piedrafita"
              link="/posts/miguel-interview"
            />
            {/* <BuilderStory
              title="How I built Discord analytics for 3m+ community members."
              image={signatures[4]?.image}
              description="build an analytics service"
              name="Will DePue"
              link=""
            />
            <BuilderStory
              title="How I built a DAO that raised $42m to buy the constitution."
              image={signatures[1]?.image}
              description="steal the constitution"
              name="Miguel Piedrafita"
              link=""
            /> */}
          </div>
        </ScrollableWrapper>
      </Container>
      <div className="p-2">
        <div className="flex justify-between">
          <h1 className="mb-3 text-xl leading-5.5 text-[#E9E9EC] ">Founding Members</h1>
          <a href="https://twitter.com/i/lists/1555647915334324224">
            <div
              className={
                "-mt-[3px] flex h-[28px] rounded-md border border-[#0077B5] bg-[#00001C] pt-[3px] pl-3 pr-2 pb-1 align-middle font-button text-[13px] font-light text-[#55ACEC] "
              }
            >
              <div className="mt-[1px] mr-2 h-2">
                <Image src={TwitterIcon} height={13} width={13} alt="" />
              </div>
              Follow Twitter list
            </div>
          </a>
        </div>
        <div className="overflow-hidden rounded pb-1">
          <div className="mt-1 flex flex-col gap-4">
            {signatures.map((signature, i) => (
              <a key={i}>
                <LargeBlockContent image={signature.image} title={signature.name}>
                  <p className="text-[#747485]">in</p>
                  <p
                    className={classNames({
                      "text-[#e1b13e]": signature.name === "Rhodos",
                    })}
                  >
                    {signature.subject}
                  </p>
                  <p className="text-[#747485]">/</p>
                  <p>{signature.age}</p>
                  <p className="text-[#747485]">from</p>
                  <p>{signature.location}</p>
                </LargeBlockContent>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Index;

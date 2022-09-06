import type { NextPage } from "next";
import Link from "next/link";
import Mission from "../../public/other/Icon.png";
import { Main, Container, ScrollableWrapper, BlockContent, BlockWrapper, BuilderStory, LargeBlockContent, Header } from "../components/basics";
import { signatures } from "../configs/signatures";
import classNames from "classnames";
import WillShaded from "../../public/profile-pictures/WillShaded.png";
import MiguelShaded from "../../public/profile-pictures/MiguelShaded.png";

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
                  <p className="text-[#747485]">Expose ambition. Recruiting young builders...</p>
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
              link=""
            />
            <BuilderStory title="Releasing on Sepetember 14th." image={WillShaded} description="????? ?? ?????? ??????" name="???? ?????" link="" />
            <BuilderStory title="Releasing on Sepetember 24th." image={MiguelShaded} description="????? ??? ??????????" name="????? ?????????" link="" />
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
        <h1 className="mb-4 text-xl leading-5.5 text-[#E9E9EC]">Founding Members</h1>
        <ScrollableWrapper>
          <div className="flex flex-col gap-4">
            {signatures.map((signature, i) => (
              <a key={i} href={i > 4 ? undefined : ""}>
                <LargeBlockContent image={signature.image} title={signature.name} grey={i > 4}>
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
        </ScrollableWrapper>
      </div>
    </Main>
  );
};

export default Index;

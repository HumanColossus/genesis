import type { NextPage } from "next";
import Link from "next/link";
import Mission from "../../../public/other/Icon.png";
import { Main, Container, ScrollableWrapper, BlockContent, BlockWrapper, BuilderStory, LargeBlockContent, Header } from "../../components/basics";
import { signatures } from "../../configs/signatures";
import classNames from "classnames";
import Image from "next/image";
import PostIcon from "../../../public/other/PostIcon.png";
import PostBackground from "../../../public/other/PostBackground.png";
import PostImage from "../../../public/other/PostImage.png";
import UpvoteSymbol from "../../../public/icons/UpvoteSymbol.svg";
import Share from "../../../public/icons/Share.svg";
import BookIcon from "../../../public/icons/BookIcon.png";
import GithubIcon from "../../../public/icons/GithubIcon.png";

const Index: NextPage = () => {
  return (
    <Main>
      <Header link="/sign-in" value="Join The Colossus" showBackground={true} />
      <div>
        <div className="relative">
          <Image src={PostBackground} alt="Post icon" className="rounded-md" />
          <div className="absolute bottom-3 left-3  p-0">
            <Image src={PostIcon} alt="Post icon" width="60px" height="60px" className="m-0" />
          </div>
        </div>
        <h1 className="mt-3 text-3xl">Beating MOSS, the code plagiarism detector used in every college program.</h1>
        <div className="mt-3 flex gap-3 font-mono text-sm">
          <p className="text-[#747485]">by</p>
          <p>Will DePue</p>
          <p className="text-[#747485]">/</p>
          <p>Jul 12, 2022</p>
        </div>
      </div>
      <hr className={"mt-0 border-0.1 border-solid border-[#2D304F]"} />
      <Container title="/ Visit Website">
        <ScrollableWrapper>
          <Link href="/memo">
            <a>
              <BlockWrapper>
                <BlockContent image={PostIcon} title="Plagiarism.fyi - Beat your school's code plagiarism checker">
                  <p className="text-[#747485]">via</p>
                  <p>plagiarism.fyi</p>
                  <p className="text-[#747485]">/</p>
                  <p className="text-[#747485]">Complete immunity from code plagiarism detection, with a...</p>
                </BlockContent>
              </BlockWrapper>
            </a>
          </Link>
        </ScrollableWrapper>
      </Container>
      <div className="flex flex-col gap-3 px-1">
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          How to properly measure a (blockchain) system is one of the least talked about but most significant steps in its design and evaluation. There are
          numerous consensus protocols and variations with various performance and scalability tradeoffs. But as of yet, there is still no universally
          agreed-upon, reliable method that enables apples-to-apples comparisons. In this blog post, we outline a method inspired by measurements in data-center
          systems and discuss common errors to avoid when evaluating a blockchain network.
        </p>
        <h2 className="text-xl">Key metrics and their interaction</h2>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Two important metrics should be taken into account when developing a blockchain system: latency and throughput.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          The first thing that users are concerned with is transaction latency, or the amount of time between initiating a transaction or payment and receiving
          confirmation that it is valid (for instance, that they have enough money). In classical BFT systems (e.g. PBFT, Tendermint, Tusk & Narwhal, etc), a
          transaction is finalized once it gets confirmed, whereas in longest-chain consensus (e.g. Nakamoto Consensus, Solana/Ethereum PoS), a transaction may
          get included in a block and then reorged. As a result, we need to wait until a transaction is k-blocks deep, resulting in a latency that is
          significantly greater than a single confirmation.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Second, the throughput of the system is typically important to system designers. This is the total load that the system handles per unit of time,
          expressed typically in transactions per second.
        </p>
        <div className="relative my-2 flex h-52 justify-center rounded-md bg-white">
          <Image src={PostImage} alt="" layout="fill" objectFit="contain" />
        </div>
        <p className="w-full font-thin leading-6	text-[#D2D2D8]	">
          At high contention, throughput is constant, but latency can vary simply by changing the load.
        </p>
        <p className="w-full font-thin leading-6	text-[#D2D2D8]	">
          This is because the system is already overloaded, and adding more load causes the wait queues to grow indefinitely. Even more counterintuitively, the
          latency appears to vary with experiment length. This is an artifact of infinitely growing queues.
        </p>
        <h2 className="text-xl">Key metrics and their interaction</h2>
        <p className="w-full font-thin leading-6	text-[#D2D2D8]	">
          Measuring a large-scale distributed system is crucial for recognizing bottlenecks and profiling expected behaviour under stress. We hope that by using
          the above methods, we can all take the first step toward a common language, which will eventually lead to blockchain systems that are better suited
          for the work they do and the promises they make to end users.
        </p>
        <p className="w-full font-thin leading-6	text-[#D2D2D8]	">
          In future work we plan to apply this methodology to existing consensus systems, if thats something of interest, please reach out on Twitter!
        </p>
      </div>
      <hr className={"mt-0 border-0.1 border-solid border-[#2D304F]"} />
      <div>
        <div className="flex justify-between">
          <h1 className="mt-0 text-2xl">/ Authors</h1>
          <div className="flex gap-3 ">
            <a href="">
              <div
                className={
                  "flex h-[28px] rounded-md border border-[#5F4BDD] bg-[#191933] pt-[3px] pl-1  pr-3 pb-1 align-middle font-button text-sm font-light text-[#C8C2EA]"
                }
              >
                <div className="mt-[2px] h-2">
                  <Image src={UpvoteSymbol} height={18} alt="" />
                </div>
                45 Upvotes
              </div>
            </a>
            <a href="">
              <div className={"flex h-[28px] rounded-md bg-[#191933] pt-[3px] pl-3  pr-2 pb-1 align-middle font-button text-sm font-light "}>
                Share
                <div className="mt-[1px] h-2">
                  <Image src={Share} height={10} alt="" />
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-3">
          <LargeBlockContent image={signatures[4]?.image} title={signatures[4]?.name}>
            <p className="text-[#747485]">in</p>
            <p
              className={classNames({
                "text-[#e1b13e]": signatures[4]?.name === "Rhodos",
              })}
            >
              {signatures[4]?.subject}
            </p>
            <p className="text-[#747485]">/</p>
            <p>{signatures[4]?.age}</p>
            <p className="text-[#747485]">from</p>
            <p>{signatures[4]?.location}</p>
          </LargeBlockContent>
          <LargeBlockContent image={signatures[1]?.image} title={signatures[1]?.name}>
            <p className="text-[#747485]">in</p>
            <p
              className={classNames({
                "text-[#e1b13e]": signatures[1]?.name === "Rhodos",
              })}
            >
              {signatures[1]?.subject}
            </p>
            <p className="text-[#747485]">/</p>
            <p>{signatures[1]?.age}</p>
            <p className="text-[#747485]">from</p>
            <p>{signatures[1]?.location}</p>
          </LargeBlockContent>
        </div>
      </div>
      <div>
        <h1 className="mt-0 text-2xl">/ Attachments</h1>
        <div className="mt-4 flex flex-col gap-3">
          <LargeBlockContent image={GithubIcon} title="Explore project files via Github repository">
            <p className="text-[#747485]">from</p>
            <p>will/plagiarism.fyi</p>
          </LargeBlockContent>
          <LargeBlockContent image={PostIcon} title="Read more on post website">
            <p className="text-[#747485]">via</p>
            <p>via plagiarism.fyi</p>
          </LargeBlockContent>
          <LargeBlockContent image={BookIcon} title="Learn how to replicate this project">
            <p className="text-[#747485]">teaches</p>
            <p>APIs, Front-end, Algorithms, Hashing</p>
          </LargeBlockContent>
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <h1 className="mt-0 text-2xl">/ Comments</h1>
          <div className="flex gap-3 ">
            <a>
              <div className={"cursor-not-allowed rounded-md bg-[#191933] px-3 pt-1 pb-1 font-button text-sm font-light"}>Comment</div>
            </a>
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

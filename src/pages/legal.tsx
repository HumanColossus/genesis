/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Link from "next/link";
import Mission from "../../public/other/Icon.png";
import { Main, Container, ScrollableWrapper, BlockContent, BlockWrapper, BuilderStory, LargeBlockContent, Header } from "../components/basics";
import { signatures } from "../configs/signatures";
import classNames from "classnames";
import Image from "next/image";
import PostIcon from "../../public/other/PostIcon.png";
import PostImage from "../../public/other/PostImage.png";
import UpvoteSymbol from "../../public/icons/UpvoteSymbol.svg";
import Share from "../../public/icons/Share.svg";
import BookIcon from "../../public/icons/BookIcon.png";
import PostBackground from "../../public/posts/AviPostBackground.png";
import GithubIcon from "../../public/icons/GithubIcon.png";
import SiteIcon from "../../public/posts/UTS.png";
import SiteIcon2 from "../../public/posts/nCovIcon.png";
import YoutubeIcon from "../../public/icons/YoutubeIcon.png";
import TwitterIcon from "../../public/icons/TwitterIcon.png";
import AviPicture from "../../public/profile-pictures/Avi.jpg";
import WillPicture from "../../public/profile-pictures/PFP.png";

const AviSpeaking = () => {
  return (
    <div className="-mb-3 flex gap-2">
      <div className="mt-[2px]">
        <Image src={AviPicture} className="rounded-md" width={20} height={20} alt="" />
      </div>
      <p className="m-0">Avi Schiffman</p>
    </div>
  );
};

const WillSpeaking = () => {
  return (
    <div className="-mb-3 flex gap-2">
      <div className="mt-[2px]">
        <Image src={WillPicture} className="rounded-md" width={20} height={20} alt="" />
      </div>
      <p className="m-0">Will DePue</p>
    </div>
  );
};

const Index: NextPage = () => {
  return (
    <Main>
      <Header link="/apply" value="Join The Colossus" showBackground={true} />
      <div>
        <h1 className="mt-3 text-3xl">Legal Information.</h1>
        <div className="mt-3 flex gap-3 font-mono text-sm">
          <p className="text-[#747485]">from</p>
          <p>Colossus Team</p>
          <p className="text-[#747485]">/</p>
          <p>Sep 5, 2022</p>
        </div>
      </div>
      <hr className={"mt-0 border-0.1 border-solid border-[#2D304F]"} />

      <p className=" w-full px-1 font-thin	leading-6	text-[#D2D2D8]">
        Our website does not store user data. We use analytics services, like Google Analytics, to inform of us page traffic and user experience. Contact
        legal@colossus.fyi for more questions.
      </p>
      <hr className={"mt-0 border-0.1 border-solid border-[#2D304F]"} />
    </Main>
  );
};

export default Index;

import type { NextPage } from "next";
import Image from "next/image";
import LogoGroup from "../../public/other/LogoGroup.svg";
import Guidance from "../../public/other/Guidance.png";
import Tangibility from "../../public/other/Tangibility.png";
import Community from "../../public/other/Community.png";
import clsx from "clsx";
import { signatures } from "configs/signatures";

const Home: NextPage = () => {
  // Styles places here for easy editing of all elements with className = <nameOfClass>
  const paragraph = clsx("my-4 w-full text-[#e9e9ec] leading-5");
  const highlight = clsx("bg-[#30267c]");
  const header = clsx("my-4 font-bold text-2xl my-5");
  const horizonal_rule = clsx("my-2.5 border-solid border-0.1 border-[#747485]");

  return <main className="mt-4 flex justify-center px-4"></main>;
};

export default Home;

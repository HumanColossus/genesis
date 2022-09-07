/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import { Main, Header } from "../components/basics";

const Legal: NextPage = () => {
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

export default Legal;

import type { NextPage } from "next";
import Image from "next/image";
import { Header, Hrline, Main } from "../components/basics";
import MiguelShaded from "../../public/profile-pictures/MiguelShaded.png";

const NotFound: NextPage = () => {
  return (
    <Main>
      <Header value="Join the Colossus" link="/" showBackground />
      <div className="-mt-4 flex flex-col gap-y-2">
        <Hrline />
        <div className=" flex items-center gap-4">
          <Image
            src={MiguelShaded}
            alt="The human colossus logo"
            width={45}
            height={45}
            className="rounded-md"
          />
          <h1 className="text-3xl font-medium">User Not Found.</h1>
        </div>
        <div className="mt-1 flex flex-wrap gap-2 font-mono text-[0.80rem] text-[#CCCCD2]">
          <h1 className="text-[#FFE604]">??</h1>
          <div className="flex gap-2">
            <h1 className="text-muted">/</h1>
            <h1 className="text-muted">from</h1>
            <h1>??</h1>
          </div>
          <div className="flex gap-2">
            <h1 className="text-muted">/</h1>
            <h1>??</h1>
          </div>
          <div className="flex gap-2">
            <h1 className="text-muted">/</h1>
            <h1 className="text-muted">in</h1>
            <h1>??</h1>
          </div>
        </div>
        <Hrline />
      </div>
    </Main>
  );
};

export default NotFound;

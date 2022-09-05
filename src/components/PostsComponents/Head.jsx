import React from "react";
import Image from "next/image";
import LogoGroup from "../../../public/other/LogoGroup.svg";

export default function Head(props) {
  return (
    <main>
      <div className="my-5 flex justify-between	 ">
        <Image className="  " src={LogoGroup} alt="The human colossus logo" />
        <p className="m-0 ml-2.5 pt-0.5 font-mono text-sm text-[#ffffff]">Need Help?</p>
      </div>

      <img src={props.imgID} width="100%" alt="The Cover Image" />

      <h1 className="my-6 text-5xl">{props.heading}</h1>

      <p className="">
        by &nbsp;
        <span className="text-slate-400	">{props.author} </span>
        &nbsp;/&nbsp;
        <span> {props.date}</span>
      </p>

      <hr className="my-3 border-slate-500	"></hr>
    </main>
  );
}

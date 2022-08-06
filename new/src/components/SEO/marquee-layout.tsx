import React from "react";
import Marquee from "react-fast-marquee";

type Props = {
  children: JSX.Element;
};

export const MarqueeLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Marquee style={{ backgroundColor: "#30267C", fontFamily: "mono", fontSize: "16px" }} gradient={true} gradientColor={[0, 0, 28]} speed={10}>
        {true &&
          Array(10)
            .fill(0)
            .map((_, i) => (
              <p className="m-1 mr-12 text-white" key={i}>
                ANNOUNCEMENT SOON
              </p>
            ))}
      </Marquee>
      {children}
      <Marquee style={{ backgroundColor: "#5f4bdd", fontFamily: "mono", fontSize: "16px" }} gradient={true} gradientColor={[0, 0, 28]} speed={10}>
        {true &&
          Array(10)
            .fill(0)
            .map((_, i) => (
              <p className="m-1 mr-12 text-white" key={i}>
                ANNOUNCEMENT SOON
              </p>
            ))}
      </Marquee>
    </>
  );
};

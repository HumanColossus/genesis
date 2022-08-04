import React from "react";
import Marquee from "react-fast-marquee";

type Props = {
  children: JSX.Element;
};

export const MarqueeLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Marquee
        style={{ backgroundColor: "#5F4BDD" }}
        gradient={true}
        gradientColor={[0, 0, 28]}
        speed={10}
      >
        {true &&
          Array(10)
            .fill(0)
            .map((_, i) => (
              <p className="m-1.5 mr-12 text-white" key={i}>
                CONFIDENTIAL DO NOT SHARE
              </p>
            ))}
      </Marquee>
      {children}
      <Marquee
        style={{ backgroundColor: "#5F4BDD" }}
        gradient={true}
        gradientColor={[0, 0, 28]}
        speed={10}
      >
        {true &&
          Array(10)
            .fill(0)
            .map((_, i) => (
              <p className="m-1.5 mr-12 text-white" key={i}>
                CONFIDENTIAL DO NOT SHARE
              </p>
            ))}
      </Marquee>
    </>
  );
};

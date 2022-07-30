import React from "react";
import { space, layout, flexbox, position, border, background, color, typography, shadow } from "styled-system";
import styled, { css } from "styled-components";
// import Box from "./Box";

export const Box = styled.div`
  box-sizing: border-box;
  min-width: 0px;
  margin: 0;
  z-index: 0;
  ${space}
  ${layout}
  ${flexbox}
  ${position}
  ${border}
  ${background}
  ${color}
  ${typography}
  ${shadow}
`;

export const Flex = styled(Box)`
  display: flex;

  ${({ center }) =>
    center &&
    css`
      justify-content: center;
      align-items: center;
    `}

  ${({ space }) =>
    space &&
    css`
      justify-content: space-between;
    `}

    ${({ gap }) =>
    gap &&
    css`
      gap: 25px;
    `}
`;

export function ScrollContainer({ height, children }) {
  return (
    <Scroll height={height}>
      <Content>{children}</Content>
    </Scroll>
  );
}

export function BlockContainer({ title, children }) {
  return (
    <StyledBox>
      <Flex mb="14px">
        <Header>{title}</Header>
      </Flex>
      {children}
    </StyledBox>
  );
}

export const StyledBox = styled(Box)`
  background: #00001c;
  box-shadow: 0px 0px 3.17099px rgba(255, 255, 255, 0.25), 1.58549px 1.057px 1.057px rgba(167, 186, 255, 0.17);
  border-radius: 8px;
  padding: 10px 15px 20px 15px;
  margin-top: 20px;
`;

const Header = styled.h3`
  color: #fff;
  margin: 0;
  font-family: "Body";
  font-size: 16px;
  font-weight: bold;
  letter-spacing: -0px;
`;

const Scroll = styled(Box)`
  overflow: scroll;
  height: ${({ height }) => height};
`;

const Content = styled(Flex)`
  flex-direction: column;
  gap: 13px;
`;

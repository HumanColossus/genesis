import React from "react";
import styled, { css } from "styled-components";
import { Flex, BlockContainer, ScrollContainer } from "../styled.jsx";
import "../App.css";
import WillPicture from "../../static/profile-pictures/PFP.png";
import WillSignature from "../../static/signatures/WillSignature.svg";
import RhodosPicture from "../../static/profile-pictures/RhodosPFP.png";
import RhodosSignature from "../../static/signatures/RhodosSignature.svg";

export default function Signatures({ children }) {
  return (
    <BlockContainer title="/ Signatures">
      <ScrollContainer height={230}>
        {SignatureBlock(RhodosPicture, "Rhodos (anon)", "Building Colossus", "??", "Nowhere 🇦🇶", RhodosSignature)}
        {SignatureBlock(WillPicture, "Will DePue", "Community Analytics", "19", "Los Angeles 🇺🇸", WillSignature)}
        {SignatureBlock(WillPicture, "Will DePue", "Community Analytics", "19", "Los Angeles 🇺🇸", WillSignature)}
        {SigntureBlock(WillPicture, "Will DePue", "Community Analytics", "19", "Los Angeles 🇺🇸", WillSignature)}
        {SignatureBlock(WillPicture, "Will DePue", "Community Analytics", "19", "Los Angeles 🇺🇸", WillSignature)}
        {SignatureBlock(WillPicture, "Will DePue", "Community Analytics", "19", "Los Angeles 🇺🇸", WillSignature)}
        {children}
      </ScrollContainer>
    </BlockContainer>
  );
}

function SignatureBlock(image, name, subject, age, location, signature) {
  return (
    <Person>
      <LeftInfo>
        <Profile src={image} />
        <TextContent>
          <Name>{name}</Name>
          <Description>
            <Mono dark>in</Mono>
            <Mono light>{subject}</Mono>
            <Mono dark>/</Mono>
            <Mono light>{age}</Mono>
            <Mono dark>from</Mono>
            <Mono light>{location}</Mono>
          </Description>
        </TextContent>
      </LeftInfo>
      <img src={signature} width="80px"></img>
    </Person>
  );
}

const Name = styled.h3`
  font-family: "Body";
  color: #e9e9ec;
  margin: 0;
  font-size: 16px;
  font-weight: regular;
`;

const Profile = styled.img`
  height: 40px;
  border-radius: 5px;
`;

const Person = styled(Flex)`
  overflow: hidden;
  justify-content: space-between;
`;

const LeftInfo = styled(Flex)`
  gap: 10px;
`;

const TextContent = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
`;

const Description = styled(Flex)`
  gap: 7px;
`;

const Mono = styled.p`
  font-family: "Mono";
  margin: 0px;
  font-size: 12px;

  ${({ light }) =>
    light &&
    css`
      color: #ccccd2;
    `}

  ${({ dark }) =>
    dark &&
    css`
      color: #747485;
    `}
`;

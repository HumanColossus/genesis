import React from "react";
import styled, { css } from "styled-components";
import { Flex, BlockContainer, ScrollContainer } from "../styled.jsx";
import "../App.css";

import Unsigned from "../../static/signatures/UNSIGNED.svg";
import WillSignature from "../../static/signatures/WillSignature.svg";
import RhodosSignature from "../../static/signatures/RhodosSignature.svg";

import NoPicture from "../../static/profile-pictures/NoPFP.png";
import WillPicture from "../../static/profile-pictures/PFP.png";
import RhodosPicture from "../../static/profile-pictures/RhodosPFP.png";
import AviPicture from "../../static/profile-pictures/Avi.jpg";
import MiguelPicture from "../../static/profile-pictures/Miguel.jpg";
import KevalinPicture from "../../static/profile-pictures/Kevalin.jpg";
import JuanDavidPicture from "../../static/profile-pictures/JuanDavid.jpg";
import ChristianPicture from "../../static/profile-pictures/Christian.jpg";
import StevenPicture from "../../static/profile-pictures/Steven.jpg";
import AryanPicture from "../../static/profile-pictures/Aryan.jpg";
import SuryaPicture from "../../static/profile-pictures/Surya.jpg";
import AriPicture from "../../static/profile-pictures/Ari.jpg";
import RahulPicture from "../../static/profile-pictures/Rahul.jpg";
import KirillPicture from "../../static/profile-pictures/Kirill.jpg";
import ByeongjunPicture from "../../static/profile-pictures/Byeongjun.jpg";

export default function Signatures({ children }) {
  return (
    <BlockContainer title="/ Signatures">
      <ScrollContainer height={230}>
        {SignatureBlock(RhodosPicture, "Rhodos", "Building Colossus", "??", "Nowhere 🇦🇶", RhodosSignature)}
        {SignatureBlock(MiguelPicture, "Miguel Piedrafita", "Web3 & Crypto", "20", "Nowhere 🇦🇶", Unsigned)}
        {SignatureBlock(AviPicture, "Avi Schiffman", "Internet Activism", "19", "Nowhere 🇦🇶", Unsigned)}
        {SignatureBlock(JuanDavidPicture, "Juan David Campelargo", "Unset", "??", "Nowhere 🇦🇶", Unsigned)}
        {SignatureBlock(WillPicture, "Will DePue", "Community Analytics", "19", "Los Angeles 🇺🇸", WillSignature)}
        {SignatureBlock(KevalinPicture, "Kevalin Ketcham", "Unset", "??", "Nowhere 🇦🇶", Unsigned)}
        {SignatureBlock(ByeongjunPicture, "Byeongjun Moon", "Unset", "??", "Nowhere 🇦🇶", Unsigned)}
        {SignatureBlock(NoPicture, "Lucas Chu", "Unset", "??", "Nowhere 🇦🇶", Unsigned)}
        {SignatureBlock(KirillPicture, "Kirill Avery", "Unset", "??", "Nowhere 🇦🇶", Unsigned)}
        {SignatureBlock(NoPicture, "Sage Khanuja", "Unset", "??", "Nowhere 🇦🇶", Unsigned)}
        {SignatureBlock(NoPicture, "Max Keenan", "Unset", "??", "Nowhere 🇦🇶", Unsigned)}
        {SignatureBlock(NoPicture, "Parker Henderson", "Unset", "??", "Nowhere 🇦🇶", Unsigned)}
        {SignatureBlock(SuryaPicture, "Surya Dantuluri", "Unset", "??", "Nowhere 🇦🇶", Unsigned)}
        {SignatureBlock(AriPicture, "Ari Dutilh", "Unset", "17", "Connecticut 🇺🇸", Unsigned)}
        {SignatureBlock(NoPicture, "Benjamin Lim", "Unset", "??", "Nowhere 🇦🇶", Unsigned)}
        {SignatureBlock(RahulPicture, "Rahul Nandakumar", "Unset", "??", "Nowhere 🇦🇶", Unsigned)}
        {SignatureBlock(ChristianPicture, "Christian Glassiognon", "Unset", "??", "Nowhere 🇦🇶", Unsigned)}
        {SignatureBlock(StevenPicture, "Steven Lu", "Unset", "??", "Nowhere 🇦🇶", Unsigned)}
        {SignatureBlock(NoPicture, "Viraj Chhajed", "Unset", "??", "Nowhere 🇦🇶", Unsigned)}
        {SignatureBlock(AryanPicture, "Aryan Sharma", "Unset", "??", "Nowhere 🇦🇶", Unsigned)}
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

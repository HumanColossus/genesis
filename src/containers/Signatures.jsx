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
import SagePicture from "../../static/profile-pictures/Sage.jpg";
import LucasPicture from "../../static/profile-pictures/Lucas.jpg";
import VirajPicture from "../../static/profile-pictures/Viraj.jpg";
import MaxPicture from "../../static/profile-pictures/Max.jpeg";
import ParkerPicture from "../../static/profile-pictures/Parker.jpg";
import BenPicture from "../../static/profile-pictures/Ben.jpg";

export default function Signatures({ children }) {
  return (
    <BlockContainer title="/ Signatures">
      <ScrollContainer height={230}>
        {SignatureBlock(RhodosPicture, "Rhodos", "Building Colossus", "??", "Nowhere 🇦🇶", RhodosSignature)}
        {SignatureBlock(MiguelPicture, "Miguel Piedrafita", "Web3 & Crypto", "20", "Nowhere 🇦🇶", Unsigned)}
        {SignatureBlock(AviPicture, "Avi Schiffman", "Internet Activism", "19", "Nowhere 🇦🇶", Unsigned)}
        {SignatureBlock(JuanDavidPicture, "Juan David Campelargo", "Learning & Flight", "??", "Nowhere 🇦🇶", Unsigned)}
        {SignatureBlock(WillPicture, "Will DePue", "Community Analytics", "19", "Los Angeles 🇺🇸", WillSignature)}
        {SignatureBlock(KevalinPicture, "Kevalin Ketcham", "Crypto", "??", "Nowhere 🇦🇶", Unsigned)}
        {SignatureBlock(ByeongjunPicture, "Byeongjun Moon", "DAOs & Governance", "??", "Nowhere 🇦🇶", Unsigned)}
        {SignatureBlock(LucasPicture, "Lucas Chu", "DAO Finance", "??", "Nowhere 🇦🇶", Unsigned)}
        {SignatureBlock(KirillPicture, "Kirill Avery", "Dec. Identity", "??", "Nowhere 🇦🇶", Unsigned)}
        {SignatureBlock(SagePicture, "Sage Khanuja", "Health", "??", "Nowhere 🇦🇶", Unsigned)}
        {SignatureBlock(MaxPicture, "Max Keenan", "Productivity", "??", "Nowhere 🇦🇶", Unsigned)}
        {SignatureBlock(ParkerPicture, "Parker Henderson", "Unset", "??", "Nowhere 🇦🇶", Unsigned)}
        {SignatureBlock(SuryaPicture, "Surya Dantuluri", "On-Chain Chaos", "??", "Nowhere 🇦🇶", Unsigned)}
        {SignatureBlock(AriPicture, "Ari Dutilh", "Community", "17", "Connecticut 🇺🇸", Unsigned)}
        {SignatureBlock(AryanPicture, "Aryan Sharma", "Web3 Data", "??", "Nowhere 🇦🇶", Unsigned)}
        {SignatureBlock(VirajPicture, "Viraj Chhajed", "On-Chain Bot Detection", "??", "Nowhere 🇦🇶", Unsigned)}
        {SignatureBlock(StevenPicture, "Steven Lu", "Next-gen Accelerators", "??", "Nowhere 🇦🇶", Unsigned)}
        {SignatureBlock(RahulPicture, "Rahul Nandakumar", "DAOs & Community", "??", "Nowhere 🇦🇶", Unsigned)}
        {SignatureBlock(BenPicture, "Benjamin Lim", "Unset", "??", "Nowhere 🇦🇶", Unsigned)}
        {SignatureBlock(ChristianPicture, "Christian Glassiognon", "Unset", "??", "Nowhere 🇦🇶", Unsigned)}
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

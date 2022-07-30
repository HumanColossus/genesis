import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Flex from "./Flex";
import styled, { css } from "styled-components";
import Box from "./Box";
import Arrow from "../static/down.svg";
import Lock from "../static/Lock.png";
import Marquee from "react-fast-marquee";
import Guidance from "../static/Guidance.svg";
import Community from "../static/Community.svg";
import Tangibility from "../static/Tangibility.svg";
import LogoGroup from "../static/LogoGroup.svg";

// import defaultText from "../static/defaultText.json";

export default function Home() {
  return (
    <Main>
      <hr />
      <Title>A worldwide education platform for the self-motivated.</Title>
      <Description>
        <Image src={LogoGroup}></Image>
        <Mono description ml="10px">
          / Jul 12, 2022
        </Mono>
      </Description>
      <hr />
      <Paragraph>
        The number of incredible young builders will exponentially increase over the next decade. The vast majority will continue to be underserved and
        unguided.
      </Paragraph>
      <Paragraph>We can build a better educational system for young people and get them competing for, contributing to, and founding the future.</Paragraph>
      <Flex>
        <VerticalLine />
        <Quote>Twitter shouldn’t be the place young builders showcase their work, connect with peers, and get inspired.</Quote>
      </Flex>
      <Paragraph>
        Many young people in college or high school have the motivation, the time, and the resources (free tools, courses, textbooks, forums, etc.) to learn and
        create, but can’t realize their vision. Here’s why: guidance, tangibility, and community.
      </Paragraph>

      <Heading>Guidance</Heading>
      <Paragraph>
        The most common issue for young builders is lacking guidance. First, it’s difficult to know how to get started and futher, how to not get lost as one
        progresses.
      </Paragraph>
      <Paragraph>
        It’s easy to forget how easy it is to get stuck when you’re young; knowing where to find answers to questions, finding alternatives, or overcoming
        obstacles is a skill that develops with age.{" "}
      </Paragraph>
      <Paragraph>
        We’re providing guidance, at scale, to young people through role-models, guides, and true 0 -> 1 guides with curated projects from top builders.
      </Paragraph>
      <ImageBlock>
        <Image large src={Guidance}></Image>
      </ImageBlock>
      <Heading>Tangibility</Heading>
      <Paragraph>
        It’s counterintuitive that resources, like KhanAcademy, MIT OpenCourseware, or Libgen, are not often cited by builders as paths for self-learning, given
        that they provide limitless, free, world-class education.{" "}
      </Paragraph>
      <Paragraph>Why is this? Tangibility. </Paragraph>
      <Paragraph>
        This is easy to see if we take a look at non-digital, advanced subjects. Naturally, payoff in high-depth subjects is very discrete: there is little
        contribution that a high schooler can progressively create in the field of mathematics.
      </Paragraph>
      <Paragraph>
        As a result, studying high-depth topics can be incredibly difficult, as progress can feel useless and intangible. Most people aren’t capable of
        self-studying math for years in hope of a distant payoff.{" "}
      </Paragraph>
      <Paragraph>
        This outlines tangibility, which is akin to changing learning from climbing a cliff into walking up stairs, where reward can be found at each step.{" "}
      </Paragraph>
      <Paragraph>
        In software, this is common: students begin with building a personal website, feel proud of their creation, then iterate. Contribution, creation, and
        impact can be created within hours: results are tangible, not abstract.
      </Paragraph>
      <Paragraph>
        We’re aiding tangibility through gamification (per KhanAcademy), publishing directly to peers, and more importantly, through community...
      </Paragraph>
      <ImageBlock>
        <Image large src={Tangibility}></Image>
      </ImageBlock>
      <Heading>Community</Heading>
      <Paragraph>The difficulty to create contribution/commentary in high-depth areas means the only audience is often peers on the same path. </Paragraph>
      <Paragraph>
        A community of similarly-paced peers can offer the feedback, criticism, and appreciation to keep students moving. Through shared effort,
        intercompetition, and group contribution, progress becomes tangible in a community.{" "}
      </Paragraph>
      <Paragraph>
        Futher, communities can be a place for support and guidance, to find role models to aspire to become, and for peers to collaborate with. Every great
        builder cites a certain community that helped them along their way.{" "}
      </Paragraph>
      <Paragraph>
        We’re building scalable communities for young people to learn, create, and collaborate, without needing to directly compete with the world at large.{" "}
      </Paragraph>
      <ImageBlock>
        <Image large src={Community}></Image>
      </ImageBlock>
      <Heading>What does this look like?</Heading>
      <Paragraph>
        We’re beginning by constructing a community platform for existing builders who are already building and publishing their work at high speed. We’re
        finalizing design and beginning development mid-August. Inspired by the steps taken by Pioneer, Khan Academy, Discord, Repl.it, and others...
      </Paragraph>
      <Paragraph>
        It’s important to build a culture carefully, so we’re looking for founding members that can be both advisors and advocates for what we’re working on. We
        temporarily bias towards people who have already built high-impact projects and those with existing reach in the space.{" "}
      </Paragraph>
      <Paragraph>Thanks for reading!</Paragraph>
      <hr />
    </Main>
  );
}

const Main = styled.body`
  // overflow: shown;
  max-width: 550px;
  margin: 0 auto;
  padding: 0px;
  margin-top: 32px;
  height: 100%;
`;

const Title = styled.h1`
  color: #fff;
`;

const Image = styled.img`
  ${({ large }) =>
    large &&
    css`
      margin-bottom: 20px;
    `}
`;

const ImageBlock = styled(Flex)`
  justify-content: center;
`;

const Description = styled(Flex)`
  justify-content: left;
  align-items: bottom;
  gap: 10px;
  margin: 20px 0px;
`;

const Paragraph = styled.p`
  color: #e9e9ec;
`;

const Mono = styled.p`
  color: #747485;
  font-family: "Mono";

  ${({ description }) =>
    description &&
    css`
      margin: 0px;
      font-size: 14px;
      padding-top: 2px;
    `}
`;

const Heading = styled.h3`
  color: #e9e9ec;
`;

const Quote = styled.h3`
  color: #e9e9ec;
  margin: 0;
  margin-left: 15px;
`;

const VerticalLine = styled.div`
  width: 1px;
  background-color: #ffffff;
  display: flex;
  min-height: 45px;
`;

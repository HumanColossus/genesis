import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Flex from "./Flex";
import styled, { css } from "styled-components";
import Box from "./Box";
import Arrow from "../static/down.svg";
import Lock from "../static/Lock.png";
import Marquee from "react-fast-marquee";
// import defaultText from "../static/defaultText.json";

export default function Home() {
  return (
    <>
      <Main>
        <Flex justifyContent="space-between">
          {starter && (
            <Flex flexDirection="column" width="500px" position="absolute" top="112px" box-shadow="0px 4px 16px rgba(0, 0, 0, 0.25)" zIndex="10">
              <WhiteBox code width="100%" flex="1" grey>
                <Flex justifyContent="space-between" width="100%">
                  <Text>Starter Code </Text>
                  <Text
                    onClick={() => {
                      const starter_elem = document.getElementById("starterField");
                      setStarterValue(starter_elem.value);
                      setStarter(false);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    Done!
                  </Text>
                </Flex>
              </WhiteBox>
              <WhiteBox code vertical flex="1" grey style={{ height: "400px" }}>
                <Textarea contenteditable="true" id="starterField" grey placeholder={"Paste any code shared across all files here..."}>
                  {starterValue}
                </Textarea>
              </WhiteBox>
            </Flex>
          )}

          <Flex maxWidth="450px" justifyContent="space-between" flexGrow="1" flexWrap="wrap">
            <WhiteBox
              width="117px"
              onClick={() => {
                dropdown ? setDropdown(false) : setDropdown(true);
              }}
            >
              <Dropdown
                label="Language"
                value={dropdownValue}
                options={dropdownOptions}
                onChange={(e) => {
                  setDropdownValue(e.target.value);
                }}
              ></Dropdown>
            </WhiteBox>

            <WhiteBox
              width="204px"
              onClick={() => {
                if (starter) {
                  const starter_elem = document.getElementById("starterField");
                  setStarterValue(starter_elem.value);
                  setStarter(false);
                } else {
                  setStarter(true);
                }
              }}
              style={{ cursor: "pointer" }}
            >
              <Text>{starterValue ? "Change starter file" : "+ Add a starter file"}</Text>
            </WhiteBox>
            <WhiteBox width="109px" style={{ cursor: "not-allowed" }}>
              <Text>MOSS</Text>
              <img src={Lock} width="17px" alt="arrow" />
            </WhiteBox>
          </Flex>
          <Link
            onClick={() => {
              // console.log("click");
              check();
            }}
            href="#"
          >
            <WhiteBox black width="182px" ml="20px">
              <Text>Submit to MOSS</Text>
            </WhiteBox>
          </Link>
        </Flex>
        {score !== null && (
          <Flex flexDirection="row" mt="20px" width="100%" flex="1">
            <Flex flexDirection="column" flex="1" maxWidth="280px" paddingRight="0px">
              <WhiteBox code width="100%" flex="1" paddingRight="0px">
                <Text bold>🚨 Report:</Text>
                <Text>{score}% similarity score</Text>
              </WhiteBox>
            </Flex>
            <Flex flexDirection="column" flex="1">
              <WhiteBox code width="100%" flex="1" overflow="auto">
                {lines?.length > 0 &&
                  lines.map((line, index) => (
                    <Text nowrap margin style={{ color: colors[index % 19] }} key={index}>
                      {line.file_1[0]}->{line.file_1[1]} looks like {line.file_2[0]}->{line.file_2[1]}
                    </Text>
                  ))}
              </WhiteBox>
            </Flex>
          </Flex>
        )}

        <Flex vertical flexDirection="row" width="100%" flex="1" mt="20px">
          <Flex flexDirection="column" flex="1" mr="25px">
            <WhiteBox code width="100%" flex="1">
              <Text>Submission Code</Text>
            </WhiteBox>
            <WhiteBox code vertical flex="1">
              <Textarea contenteditable="true" id="submissionField" defaultValue={demoCodeSubmission}></Textarea>
            </WhiteBox>
          </Flex>
          <Flex flexDirection="column" flex="1">
            <WhiteBox code width="100%" flex="1">
              <Text>Comparison Code </Text>
            </WhiteBox>
            <WhiteBox code vertical flex="1">
              {comparison.length === 0 && <Textarea contenteditable="true" id="comparisonField" defaultValue={demoCodeComparison}></Textarea>}

              {comparison.length > 0 && (
                <Flex flexDirection="column" overflow="auto">
                  {comparison.map((line, index) => (
                    <ComparisonLine key={"line" + index} color={lineColors[index]}>
                      {line == "" ? " " : line}
                    </ComparisonLine>
                  ))}
                </Flex>
              )}
            </WhiteBox>
          </Flex>
        </Flex>
      </Main>
      <WhiteBox code footer width="100%" flex="1">
        <Text>Who built this?</Text>
        <LinkFooter href="https://twitter.com/willdepue">@willdepue</LinkFooter>
        <Text>Why?</Text>
        <LinkFooter href="https://depue.notion.site/How-code-plagiarism-checking-works-and-how-to-beat-it-c7f64ef288b348c0ba352f654516d430">
          Article on why I built this.
        </LinkFooter>
        <Text>How can I follow your work?</Text>
        <LinkFooter>Text WILL to +1 833-225-6887 for release updates.</LinkFooter>
        <Text>How do I help out?</Text>
        <LinkFooter href="https://discord.com/invite/3e7RakFVV6">Join the Discord.</LinkFooter>
      </WhiteBox>
    </>
  );
}

const Main = styled.div`
  padding: 50px;
  padding-top: 30px;
`;

const WhiteBox = styled(Box)`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 15px 10px 18px;
  gap: 8px;

  height: 42px;

  background: #ffffff;
  border: 1px solid #d9d9d9;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;

  ${({ black }) =>
    black &&
    css`
      background: #000000;
      color: #ffffff;
    `}

  ${({ code }) =>
    code &&
    css`
      text-align: left;
      justify-content: flex-start;
    `}

    ${({ vertical }) =>
    vertical &&
    css`
      align-items: stretch;
      height: 80vh;
    `}

    ${({ grey }) =>
    grey &&
    css`
      background: #eeeeee;
    `}

    ${({ footer }) =>
    footer &&
    css`
      white-space: nowrap;
      text-overflow: ellipsis;
    `}
`;

const Textarea = styled.textarea`
  width: 100%;
  border: none;
  outline: none;
  font-size: 13px;
  font-family: monospace;
  margin: 1px;

  ${({ grey }) =>
    grey &&
    css`
      background: #eeeeee;
    `}
`;

const Text = styled.p`
  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}

  ${({ nowrap }) =>
    nowrap &&
    css`
      white-space: nowrap;
    `}

    ${({ margin }) =>
    margin &&
    css`
      margin-right: 10px;
    `}
`;

const ComparisonLine = styled.pre`
  color: ${({ color }) => color};
  font-size: 13px;
  font-family: monospace;
  margin: 0px;
`;

const Link = styled.a`
  text-decoration: none;
`;

const LinkFooter = styled.a`
  text-decoration: underline;
  font-weight: bold;
  margin-right: 15px;
`;

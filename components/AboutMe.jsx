import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const AboutMe = () => {
  return (
    <>
      <div id="about" css={tw`w-full h-screen text-center`}>
        <RainbowTitle>My Journey</RainbowTitle>
        <AboutContainer>
          <BioAboutMe>
            My name is Peter James Salter, I&apos;ve recently graduated from
            Founders and Coders, FAC24 cohort, Full Stack Skills Bootcamp.
            I&apos;ve dabbled in coding since college where I completed a BTEC
            Level 2 IT Certificate in HTML and CSS. More recently, I studied
            online and achieved a Level 3 Web Design and Development
            Certificate. I fully committed to learning to code with my partner
            during lockdown where we were both furloghed and began pair
            programming coding challenges together. I&apos;ve recently mentored
            FAC25, covering React Client Side App, Next JS Full Stack App, User
            Research, Discovery and Analysis Workshops for Design Week. This
            portfolio is made with Next JS (v13), React, Styled Components and
            Tailwind.
          </BioAboutMe>
        </AboutContainer>
      </div>
    </>
  );
};

export default AboutMe;

const RainbowTitle = styled.h1`
  background: linear-gradient(
    to right,
    #ef5350,
    #f48fb1,
    #7e57c2,
    #2196f3,
    #26c6da,
    #43a047,
    #eeff41,
    #f9a825,
    #ff5722
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  padding: 5%;

  // for small mobile screens.
  @media only screen and (max-width: 768px) {
    font-size: 1.8rem;
    margin-top: 10px;
  }
`;

const AboutContainer = tw.div`
max-w-[1240px]
// w-full
// h-full
mx-auto
p-2
flex
justify-center
items-center
`;

const BioAboutMe = tw.p`
py-4
m-auto
text-purple-900
max-w-[70%]
text-xs
xl:text-xl
`;

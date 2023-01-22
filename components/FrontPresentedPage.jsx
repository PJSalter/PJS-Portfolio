import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";

const FrontPresentedPage = () => {
  return (
    <div css={tw`w-full h-screen text-center`}>
      <RainbowTitle>Welcome to PJS-Coder-Portfolio</RainbowTitle>

      <QuoteStyling css={tw`text-xs lg:text-lg`}>
        <q>
          <i>
            Creativity and technology I believe go hand in hand. It is
            beneficial to making a website that works functionally but you can
            never go wrong with an artistic yet professional front end!
          </i>
        </q>
      </QuoteStyling>
      <IntroductionStyle css={tw`py-4 text-pink-600 text-lg lg:text-6xl`}>
        Hello Everyone &#128075;
        <div className="[word-spacing:0.1rem]">
          I&apos;m
          <span className="text-green-700 p-2">
            Peter &#127912; &#129489;&#8205;&#128187;
          </span>
          <br></br>
          <br></br>A Software Developer
        </div>
      </IntroductionStyle>
      <HomePageContainer>
        <ConnectWrap>
          <a
            href="https://www.linkedin.com/in/peter-james-salter/"
            target="_blank"
            rel="noreferrer"
          >
            <AboutConnectButtonStyle className="shadow-lg shadow-yellow-400">
              <FaLinkedinIn />
            </AboutConnectButtonStyle>
          </a>
          <a
            href="https://github.com/PJSalter"
            target="_blank"
            rel="noreferrer"
          >
            <AboutConnectButtonStyle className="shadow-lg shadow-yellow-400">
              <FaGithub />
            </AboutConnectButtonStyle>
          </a>
          <Link href="mailto:psalter88@googlemail.com">
            <AboutConnectButtonStyle className="shadow-lg shadow-yellow-400">
              <AiOutlineMail />
            </AboutConnectButtonStyle>
          </Link>
          <AboutConnectButtonStyle className="shadow-lg shadow-yellow-400">
            <BsFillPersonLinesFill />
          </AboutConnectButtonStyle>
        </ConnectWrap>
      </HomePageContainer>
    </div>
  );
};

export default FrontPresentedPage;

const ConnectWrap = styled.div`
  ${tw`flex items-center justify-between w-full max-w-[330px] m-auto py-4`}
`;

const AboutConnectButtonStyle = tw.div`
rounded-full
p-4
lg:p-6
cursor-pointer
hover:scale-110
ease-in
duration-500
hover:shadow-inner
md:drop-shadow-xl
bg-pink-400
`;

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
    font-size: 2.5rem;
  }
`;

const QuoteStyling = styled.p`
  // for small mobile screens.
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const IntroductionStyle = styled.h2`
  // for small mobile screens.
  @media only screen and (max-width: 768px) {
    font-size: 0.5rem;
  }
`;

const HomePageContainer = tw.div`
max-w-[1240px]
// w-full
// h-full
mx-auto
p-2
flex
justify-center
items-center
`;

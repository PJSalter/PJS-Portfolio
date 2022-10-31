import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";

const AboutMe = () => {
  return (
    <div css={tw`w-full h-screen text-center`}>
      <AboutContainer>
        <div>
          <RainbowTitle>Welcome to PJS-Coder-Portfolio</RainbowTitle>
          <p css={tw`text-lg`}>
            <q>
              <i>
                Creativity and technology I believe go hand in hand. It is
                beneficial to making a website that works functionally but you
                can never go wrong with an artistic yet professional front end!
              </i>
            </q>
          </p>
          <h2 css={tw`py-4 text-pink-600 text-6xl`}>
            Hello Everyone &#128075;
            <div className="[word-spacing:0.1rem]">
              I&apos;m
              <span className="text-green-700 p-2">
                Peter &#127912; &#129489;&#8205;&#128187;
              </span>
              <br></br>
              <br></br>A Software Developer
            </div>
          </h2>
          <BioAboutMe>
            My name is Peter James Salter, I&apos;ve recently Graduated from
            Founders and Coders as part of FAC24 Cohort, on a full Stack skills
            bootcamp. I&apos;ve always delved into coding since college. I
            completed a BTEC level 2 in IT and it contained a unit on HTML and
            CSS. I first got into learning code from an online course where I
            achieved a level 3 in Web design and Development while I worked in
            other fields. I full endulged in learning to code once the first
            lockdown hit and I was furloghed from my job.
          </BioAboutMe>
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
        </div>
      </AboutContainer>
    </div>
  );
};

export default AboutMe;

const ConnectWrap = styled.div`
  ${tw`flex items-center justify-between w-full max-w-[330px] m-auto py-4`}
`;

const AboutConnectButtonStyle = tw.div`
rounded-full
p-6
cursor-pointer
hover:scale-110
ease-in
duration-300
hover:shadow-inner
md:drop-shadow-xl
`;

const AboutContainer = tw.div`
max-w-[1240px]
w-full
h-full
mx-auto
p-2
flex
justify-center
items-center
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
`;

const BioAboutMe = tw.p`
py-4
text-purple-900
max-w-[70%]
m-auto
`;

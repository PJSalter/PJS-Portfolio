import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const AboutMe = () => {
  return (
    <div css={tw`w-full h-screen text-center`}>
      <AboutContainer>
        <div>
          <RainbowTitle>Welcome to PJS-Coder-Portfolio</RainbowTitle>
          <p>
            <q>
              Creativity and technology I believe go hand in hand. It is
              beneficial to making a website that works functionally but you can
              never go wrong with an artistic yet professional front end!
            </q>
          </p>
          <h2>
            Hello Everyone &#128075; I&apos;m Peter &#127912;
            &#129489;&#8205;&#128187;
          </h2>
        </div>
      </AboutContainer>
    </div>
  );
};

export default AboutMe;

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
`;

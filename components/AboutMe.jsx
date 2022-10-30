import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const AboutMe = () => {
  return (
    <div css={tw`w-full h-screen text-center`}>
      <AboutContainer>
        <div>
          <p>
            <q>
              Creativity and technology I believe go hand in hand. It is
              beneficial to making a website that works but you can never go
              wrong with an artistic yet professional front end!
            </q>
          </p>
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

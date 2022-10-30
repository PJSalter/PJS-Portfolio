import React from "react";

const AboutMe = () => {
  return (
    <div css={tw`w-full h-screen text-center`}>
      <AboutContainer>
        <div></div>
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

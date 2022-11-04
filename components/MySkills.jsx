import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

const MySkills = () => {
  return (
    <div css={tw`w-full lg:h-screen p-2`}>
      <SkillsContainer></SkillsContainer>
    </div>
  );
};

export default MySkills;

const SkillsContainer = tw.div`
max-w-[1240px]
mx-auto
flex
flex-col
justify-center
h-full
`;

import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Image from "next/image";

const MySkills = () => {
  return (
    <div css={tw`w-full lg:h-screen p-2`}>
      <SkillsContainer>
        <RainbowTitle>My Tech Skills</RainbowTitle>
        <h3 css={tw`py-4`}>What I can do</h3>
        <Grid>
          <div
            css={tw`p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300`}
          >
            <div css={tw`grid grid-cols-2 gap-4 justify-center items-center`}>
              <SkillsImageWrap>
                <Image alt="/" />
              </SkillsImageWrap>
            </div>
          </div>
        </Grid>
      </SkillsContainer>
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

const Grid = styled.div`
  ${tw`grid md:grid-cols-2 lg:grid-cols-4 gap-8`}
`;

const RainbowTitle = styled.p`
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

const SkillsImageWrap = styled.div`
  ${tw`m-auto`}
`;

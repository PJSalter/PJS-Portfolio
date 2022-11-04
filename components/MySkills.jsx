import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Image from "next/image";
import htmlLogo from ".//../public/assets/Skills/html5.png";
import stylingLogo from ".//../public/assets/Skills/css.png";
import javascriptLogo from ".//../public/assets/Skills/JavaScript-Logo-profile.png";
import nodeskill from ".//../public/assets/Skills/nodejs-logo.png";
import expressLogo from ".//../public/assets/Skills/expressjs.png";
import postgresqlLogo from ".//../public/assets/Skills/postgresql-logo.png";
import picReactSkill from ".//../public/assets/Skills/React-logo.png";
import nextLogo from ".//../public/assets/Skills/nextjs-logo.png";
import skillOfTypescript from ".//../public/assets/Skills/TypeScript.png";
import rubySkill from ".//../public/assets/Skills/png_ruby.png";

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
                <Image
                  src={htmlLogo}
                  width={64}
                  height={64}
                  placeholder="skill"
                  alt="html-logo"
                />
              </SkillsImageWrap>
              <div css={tw`flex flex-col items-center justify-center`}>
                <h4>HTML</h4>
              </div>
            </div>
          </div>

          <div
            css={tw`p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300`}
          >
            <div css={tw`grid grid-cols-2 gap-4 justify-center items-center`}>
              <SkillsImageWrap>
                <Image
                  src={stylingLogo}
                  width={64}
                  height={64}
                  placeholder="CSSskill"
                  alt="CSS-logo"
                />
              </SkillsImageWrap>
              <div css={tw`flex flex-col items-center justify-center`}>
                <h4>CSS</h4>
              </div>
            </div>
          </div>

          <div
            css={tw`p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300`}
          >
            <div css={tw`grid grid-cols-2 gap-4 justify-center items-center`}>
              <SkillsImageWrap>
                <Image
                  src={javascriptLogo}
                  width={64}
                  height={64}
                  placeholder="javascriptSkill"
                  alt="javascript-logo"
                />
              </SkillsImageWrap>
              <div css={tw`flex flex-col items-center justify-center`}>
                <h4>JavaScript</h4>
              </div>
            </div>
          </div>

          <div
            css={tw`p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300`}
          >
            <div css={tw`grid grid-cols-2 gap-4 justify-center items-center`}>
              <SkillsImageWrap>
                <Image
                  src={nodeskill}
                  width={64}
                  height={64}
                  placeholder="nodeskill"
                  alt="node-logo"
                />
              </SkillsImageWrap>
              <div css={tw`flex flex-col items-center justify-center`}>
                <h4>Node.js</h4>
              </div>
            </div>
          </div>

          <div
            css={tw`p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300`}
          >
            <div css={tw`grid grid-cols-2 gap-4 justify-center items-center`}>
              <SkillsImageWrap>
                <Image
                  src={expressLogo}
                  width={64}
                  height={64}
                  placeholder="expressskill"
                  alt="express-logo"
                />
              </SkillsImageWrap>
              <div css={tw`flex flex-col items-center justify-center`}>
                <h4>Express.js</h4>
              </div>
            </div>
          </div>

          <div
            css={tw`p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300`}
          >
            <div css={tw`grid grid-cols-2 gap-4 justify-center items-center`}>
              <SkillsImageWrap>
                <Image
                  src={postgresqlLogo}
                  width={64}
                  height={64}
                  placeholder="postgresqlskill"
                  alt="postgresql-logo"
                />
              </SkillsImageWrap>
              <div css={tw`flex flex-col items-center justify-center`}>
                <h4>PostgreSQL</h4>
              </div>
            </div>
          </div>

          <div
            css={tw`p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300`}
          >
            <div css={tw`grid grid-cols-2 gap-4 justify-center items-center`}>
              <SkillsImageWrap>
                <Image
                  src={picReactSkill}
                  width={64}
                  height={64}
                  placeholder="react-skill"
                  alt="react-logo"
                />
              </SkillsImageWrap>
              <div css={tw`flex flex-col items-center justify-center`}>
                <h4>React.js</h4>
              </div>
            </div>
          </div>

          <div
            css={tw`p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300`}
          >
            <div css={tw`grid grid-cols-2 gap-4 justify-center items-center`}>
              <SkillsImageWrap>
                <Image
                  src={nextLogo}
                  width={64}
                  height={64}
                  placeholder="nextskill"
                  alt="next-logo"
                />
              </SkillsImageWrap>
              <div css={tw`flex flex-col items-center justify-center`}>
                <h4>Next.js</h4>
              </div>
            </div>
          </div>

          <div
            css={tw`p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300`}
          >
            <div css={tw`grid grid-cols-2 gap-4 justify-center items-center`}>
              <SkillsImageWrap>
                <Image
                  src={skillOfTypescript}
                  width={64}
                  height={64}
                  placeholder="typescriptskill"
                  alt="typescript-logo"
                />
              </SkillsImageWrap>
              <div css={tw`flex flex-col items-center justify-center`}>
                <h4>TypeScript</h4>
              </div>
            </div>
          </div>

          <div
            css={tw`p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300`}
          >
            <div css={tw`grid grid-cols-2 gap-4 justify-center items-center`}>
              <SkillsImageWrap>
                <Image
                  src={rubySkill}
                  width={64}
                  height={64}
                  placeholder="rubyskill"
                  alt="ruby-logo"
                />
              </SkillsImageWrap>
              <div css={tw`flex flex-col items-center justify-center`}>
                <h4>Ruby</h4>
              </div>
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

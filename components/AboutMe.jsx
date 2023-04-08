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
            Hello there, I&apos;m Peter James Salter and I&apos;m excited to
            share a little bit about myself with you. I recently graduated from
            Founders and Coders (FAC24 cohort) Full Stack Skills Bootcamp in
            August 2022, and I&apos;ve been on a journey of continuous learning
            ever since. I first dabbled in coding during college when I
            completed a BTEC Level 2 IT Certificate in HTML and CSS. More
            recently, I achieved a Level 3 Web Design and Development
            Certificate from Stonebridge Associated Colleges.
            <br></br>
            <br></br>
            During the first lockdown, my partner and I paired up to tackle
            coding challenges together, which sparked my passion for coding. I
            discovered an amazing community of like-minded individuals and
            eventually landed at Founders and Coders, where I honed my skills in
            HTML, CSS, JavaScript, React.js, Next.js, Node.js, Express.js, and
            PostgreSQL.
            <br></br>
            <br></br>
            What sets me apart from others is my previous experience in
            illustration, which brings a unique perspective to my work. I love
            using my creativity to approach problems from different angles and
            come up with innovative solutions. As a team player, I&apos;m always
            willing to go the extra mile to ensure my team succeeds, and
            I&apos;m an excellent communicator.
            <br></br>
            <br></br>
            Apart from my coding skills, I&apos;ve also been exploring new
            programming languages such as Java, Python, TypeScript, and Ruby.
            I&apos;ve even worked on some exciting self-projects such as Rat
            Invaders, a TypeScript game where the user controls a cat that must
            defeat invading rats with balls of yarn. Currently, I&apos;m working
            on a React and TypeScript project with my partner called Giggle
            Click, a joke app that fetches data from a Dad Jokes API.
            <br></br>
            <br></br>
            My portfolio is a reflection of my skills and creativity, built with
            Next.js, React.js, Styled Components, and TailwindCSS. If
            you&apos;re looking for an entry-level software developer who brings
            a fresh perspective, passion, and enthusiasm to the table, I&apos;m
            your guy. I&apos;m eager to take on new challenges and continue to
            learn as much as I can to strive within the tech industry. Thanks
            for taking the time to learn a little bit about me!
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

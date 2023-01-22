import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import tw from "twin.macro";
import CreativeProjectItem from "../components/CreativeProjectItem.jsx";
import techForBetterProject from "../public/assets/Projects/alislearninggg.png";
import paintboxApp from "../public/assets/Projects/Paintboxx.png";
import gardenShop from "../public/assets/Projects/LittleGardenn.png";
import reactGame from "../public/assets/Projects/Broccoli-gamee.png";
import broccoliAnimation from "../public/assets/Projects/broccoli-animation.png";
import RainbowTicTacToe from "../public/assets/Projects/tictactoee.png";
import bingePad from "../public/assets/Projects/BingePaddd.png";
import sheldonia from "../public/assets/Projects/sheldoniaaa.png";
import techAgency from "../public/assets/Projects/vedTechAgencyProject.png";
import pokedex from "../public/assets/Projects/pokedex.png";

const MyProjects = () => {
  return (
    <div className="w-full">
      <ProjectSectionContainer>
        <MyTitleForProjects>Projects</MyTitleForProjects>
        <h2 className="py-4">What I have built</h2>
        <ContainerCarryingMyBuiltProjects>
          <CreativeProjectItem
            title="Tech for better project - Alis Learning"
            backgroundImg={techForBetterProject}
            Desc="A dyslexic learning app aimed at children aged 5 - 12 to help them improve their reading in a fun engaging way."
            subTitle="Next.js, React, JavaScript, Styled Components and deployed on Netlify"
            projectUrl="https://github.com/fac24/alis-learning"
          />
          <CreativeProjectItem
            title="Paintbox"
            backgroundImg={paintboxApp}
            Desc="Art therapy App - users can upload art that reflects their mood. - Users will also be able to upload art inspired by the weekly prompt that can be viewed in a public gallery."
            subTitle="Next.js, React, JavaScript, Cypress for testing, Supabase, Styled Components and deployed on Vercel"
            projectUrl="https://github.com/fac24/paintbox"
          />
          <CreativeProjectItem
            title="Little Garden App"
            backgroundImg={gardenShop}
            Desc="An e-commerce site for plant-lovers to buy fresh, home-grown plants."
            subTitle="Next.js, React, JavaScript, CSS, PostgreSQL and deployed on Vercel"
            projectUrl="https://github.com/fac24/week6-asmahan-hallie-peter-maria"
          />
          <CreativeProjectItem
            title="Broccoli Game"
            backgroundImg={reactGame}
            Desc="Broccoli theme game where user has to type github username. User will have to guess and pair the correct hidden username underneath the broccoli's."
            subTitle="React, JavaScript, CSS and deployed on Netlify"
            projectUrl="https://github.com/fac24/week-5-Peter-Hussain"
          />
          <CreativeProjectItem
            title="Rainbow themed tic tac toe game"
            backgroundImg={RainbowTicTacToe}
            Desc="A strategic battle by two users going head to head, each will choose 'O' OR 'X' from one square from the playing board. first player to get three in a row wins, else it'll be a draw."
            subTitle="Next.js, React, TypeScript, Styled Components and deployed on Netlify"
            projectUrl="https://github.com/PJSalter/pjs-tic-tac-toe"
          />
          <CreativeProjectItem
            title="Binge Pad App"
            backgroundImg={bingePad}
            Desc="A place for adding lists of all your favourite Binge Worthy Movies."
            subTitle="HTML, CSS, JavaScript"
            projectUrl="https://github.com/AsmahanM/FAC-To-Do-Project"
          />
          <CreativeProjectItem
            title="PJS Pokedex"
            backgroundImg={pokedex}
            Desc="Pokemon sound effects triggered by click handlers"
            subTitle="HTML, CSS, JavaScript"
            projectUrl="https://github.com/PJSalter/pjs-pokedex-gaming-api"
          />
          <CreativeProjectItem
            title="Sheldonia App"
            backgroundImg={sheldonia}
            Desc="App that queries two api's and displays as feature's from DOM Manipulation."
            subTitle="HTML, CSS, JavaScript"
            projectUrl="https://github.com/PJSalter/Http-App-Project"
          />
          <CreativeProjectItem
            title="VED Agency"
            backgroundImg={techAgency}
            Desc="Agency Website named VED"
            subTitle="HTML, CSS, JavaScript"
            projectUrl="https://github.com/sonianb/agency-website"
          />
          <CreativeProjectItem
            title="Animated Dancing Broccoli"
            backgroundImg={broccoliAnimation}
            Desc="A fun and Interactive dancing Broccoli animation"
            subTitle="HTML, CSS, JavaScript"
            projectUrl="https://github.com/PJSalter/Dancing-Broccoli"
          />
        </ContainerCarryingMyBuiltProjects>
      </ProjectSectionContainer>
    </div>
  );
};

export default MyProjects;

const ProjectSectionContainer = styled.div`
  ${tw`max-w-[1240px] mx-auto px-2 py-16`}
`;

const ContainerCarryingMyBuiltProjects = styled.div`
  ${tw`grid md:grid-cols-2 gap-8`}
`;

const MyTitleForProjects = styled.p`
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

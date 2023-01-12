import React from "react";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import tw from "twin.macro";
import Navbar from "../components/NavBar";
import AboutMe from "../components/AboutMe";
import FrontPresentedPage from "../components/FrontPresentedPage";
import MySkills from "../components/MySkills";
import MyProjects from "../components/MyProjects";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Peter James Salter | Software Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <MainStyle>
        <FrontPresentedPage />
        <AboutMe />
        <MySkills />
        <MyProjects />
      </MainStyle>
      <ConditionalButton switchStyle={false}>Press Me</ConditionalButton>
    </div>
  );
}

const MainStyle = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ConditionalButton = styled.button(({ switchStyle }) => [
  switchStyle
    ? tw`bg-[#581c87] hover:bg-[#f43f5e]`
    : tw`bg-[#0d9488] hover:bg-[#164e63]`,
  tw`
    text-slate-50
    font-bold
    py-2
    px-4
    border
    border-black
    rounded
    `,
]);

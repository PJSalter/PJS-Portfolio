import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Image from "next/image";
import Link from "next/link";
import techForBetterProject from "../public/assets/Projects/alis-learning-project.png";

const MyProjects = () => {
  return (
    <div className="w-full">
      <ProjectSectionContainer>
        <MyTitleForProjects>Projects</MyTitleForProjects>
        <h2 className="py-4">What I have built</h2>
        <ContainerCarryingMyBuiltProjects>
          <DevelopmentProject className="group">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={techForBetterProject}
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Alis Learning
              </h3>
              <p className="pb-4 pt-2 text-white text-center">Next.js React</p>
              <Link href="/">
                <p className="text-center py-3 rounded-lg bg-white text-yellow-500 font-bold text-lg cursor-pointer">
                  An interactive app that helps dyslexic children read and write
                </p>
              </Link>
            </div>
          </DevelopmentProject>
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

// const MyTitleForProjects = styled.div`
//   ${tw`text-xl tracking-widest uppercase text-[]`}
// `;

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
`;

const DevelopmentProject = styled.div`
  ${tw`relative flex items-center justify-center h-auto w-full shadow-xl shadow-[#9892B1] rounded-xl p-4 hover:bg-gradient-to-r from-[#5651e5] to-cyan-900`}
`;

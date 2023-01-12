import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const MyProjects = () => {
  return (
    <div className="w-full">
      <ProjectSectionContainer>
        <MyTitleForProjects>Projects</MyTitleForProjects>
        <h2>What I have built</h2>
        <ContainerCarryingMyBuiltProjects></ContainerCarryingMyBuiltProjects>
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

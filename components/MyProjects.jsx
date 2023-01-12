import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const MyProjects = () => {
  return (
    <div className="w-full">
      <ProjectSectionContainer>
        <p>Projects</p>
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
  ${tw`max-w-[1240px] mx-auto px-2 py-16`}
`;

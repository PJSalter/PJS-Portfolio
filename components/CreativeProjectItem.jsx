import React from "react";
import Image from "next/image";
import styled from "styled-components";
import tw from "twin.macro";
import Link from "next/link";

const CreativeProjectItem = ({
  title,
  backgroundImg,
  projectUrl,
  subTitle,
  Desc,
}) => {
  return (
    <DevelopmentProject className="group">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] m-auto p-[4.5%]">
        <TitleOfAwesomeWork className="text-2xl text-white tracking-wider text-center">
          {title}
        </TitleOfAwesomeWork>
        <ProjectDescription className="pb-4 pt-2 text-white text-center">
          {Desc}
        </ProjectDescription>
        <TechStackInfo className="pb-4 pt-2 text-white text-center">
          {subTitle}
        </TechStackInfo>
        <Link href={projectUrl}>
          <TextLink className="access-project font-bold text-lg cursor-pointer">
            Click to view work
          </TextLink>
        </Link>
      </div>
    </DevelopmentProject>
  );
};

export default CreativeProjectItem;

const DevelopmentProject = styled.div`
  ${tw`relative flex items-center justify-center h-auto w-full shadow-xl shadow-[#9892B1] rounded-xl p-4 hover:bg-gradient-to-r from-[#5651e5] to-cyan-900`}
`;

const ProjectDescription = styled.p`
  // for small mobile screens.
  @media only screen and (max-width: 768px) {
    font-size: 0.5rem;
  }
`;

const TechStackInfo = styled.p`
  // for small mobile screens.
  @media only screen and (max-width: 768px) {
    font-size: 0.5rem;
  }
`;

const TitleOfAwesomeWork = styled.h3`
  // for small mobile screens.
  @media only screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const TextLink = styled.h3`
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  font-size: inherit;
  font-family: inherit;

  &.access-project {
    font-weight: 600;
    color: #382b22;
    text-transform: uppercase;
    padding: 1.25em 2em;
    background: #fff0f0;
    border: 2px solid #b18597;
    border-radius: 0.75em;
    transform-style: preserve-3d;
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
      background 150ms cubic-bezier(0, 0, 0.58, 1);
  }
  &.access-project::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #f9c4d2;
    border-radius: inherit;
    box-shadow: 0 0 0 2px #b18597, 0 0.625em 0 0 #87b595;
    transform: translate3d(0, 0.75em, -1em);
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
      box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
  }
  &.access-project:hover {
    background: #ffe9e9;
    transform: translate(0, 0.25em);
  }
  &.access-project:hover::before {
    box-shadow: 0 0 0 2px #b18597, 0 0.5em 0 0 #ffe3e2;
    transform: translate3d(0, 0.5em, -1em);
  }
  &.access-project:active {
    background: #ffe9e9;
    transform: translate(0em, 0.75em);
  }
  &.access-project:active::before {
    box-shadow: 0 0 0 2px #b18597, 0 0 #ffe3e2;
    transform: translate3d(0, 0, -1em);
  }

  // for small mobile screens.
  @media only screen and (max-width: 768px) {
    font-size: 0.5rem;
  }
`;

import React from "react";
import Image from "next/image";
import styled from "styled-components";
import tw from "twin.macro";
import Link from "next/link";

const CreativeProjectItem = ({ title, backgroundImg, projectUrl }) => {
  return (
    <DevelopmentProject className="group">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">Next.js React</p>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-white text-yellow-500 font-bold text-lg cursor-pointer">
            Click to view work
          </p>
        </Link>
      </div>
    </DevelopmentProject>
  );
};

export default CreativeProjectItem;

const DevelopmentProject = styled.div`
  ${tw`relative flex items-center justify-center h-auto w-full shadow-xl shadow-[#9892B1] rounded-xl p-4 hover:bg-gradient-to-r from-[#5651e5] to-cyan-900`}
`;

import React from "react";
import Image from "next/image";
import pic from "../public/assets/pjs-software-developer.png";
import styled from "styled-components";
import tw from "twin.macro";
import Link from "next/link";
import { AiOutlineClose } from "react-icons";

const Navbar = () => {
  return (
    <StyledDivForNavbar>
      <NavContainer>
        <div css={tw`w-16 h-16 mb-1 object-left-top`}>
          <Image src={pic} alt="pjs-logo" />
        </div>
        <div>
          {/* tailwind is great because it's mobile first always */}
          <ul css={tw`hidden md:flex`}>
            <Link href="/">
              <ListStyling>Home</ListStyling>
            </Link>
            <Link href="/">
              <ListStyling>About</ListStyling>
            </Link>
            <Link href="/">
              <ListStyling>Skills</ListStyling>
            </Link>
            <Link href="/">
              <ListStyling>Projects</ListStyling>
            </Link>
            <Link href="/">
              <ListStyling>Contact</ListStyling>
            </Link>
          </ul>
          <div>
            <AiOutlineClose />
          </div>
        </div>
      </NavContainer>
    </StyledDivForNavbar>
  );
};

export default Navbar;

const StyledDivForNavbar = styled.div`
  ${tw`fixed w-full h-20 shadow-xl z-[100]`}
`;

const NavContainer = styled.div`
  ${tw`flex justify-between items-center w-full h-full px-2 2xl:px-16 bg-white`}
`;

const ListStyling = tw.li`
ml-10
text-sm
uppercase
hover:border-b
`;

import React from "react";
import Image from "next/image";
import pic from "../public/assets/pjs-software-developer.png";
import styled from "styled-components";
import tw from "twin.macro";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

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
          <div css={tw`md:hidden`}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </NavContainer>
      {/* once the mobile menu appears the background behind has an overlay darker colour. */}
      <OverlayBackStyling>
        <SideDrawMenu></SideDrawMenu>
      </OverlayBackStyling>
    </StyledDivForNavbar>
  );
};

export default Navbar;

const StyledDivForNavbar = styled.div`
  ${tw`fixed w-full h-20 shadow-xl z-[100]`}
`;

const NavContainer = styled.div`
  ${tw`flex justify-between items-center w-full h-full px-2 2xl:px-16 bg-slate-white`}
`;

const ListStyling = tw.li`
ml-10
text-sm
uppercase
hover:border-b
`;

const OverlayBackStyling = tw.div`
fixed
left-0
top-0
w-full
h-screen
bg-dark-purple/70
`;

const SideDrawMenu = tw.div`
fixed
left-0
top-0
w-[75%]
sm:w-[60%]
md:w-[45%]
h-screen
bg-light-pink
p-10
ease-in
duration-500
`;

import React, { useState, useEffect } from "react";
import Image from "next/image";
import LogoFun from "../public/assets/Projects/pjs-software-developer.png";
import styled from "styled-components";
import tw from "twin.macro";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
// import cv from "../assets/PJSCV.pdf";

const Navbar = () => {
  // set the useSate to a default of false
  const [navbar, setNavbar] = useState(false);
  const [shadow, setShadow] = useState(false);

  // function to handle toggling my menu
  const handleNavbarMenu = () => {
    // when every I run this function I will want it to set as true.
    setNavbar(!navbar);
  };

  // this useEffect hook will only run once
  useEffect(() => {
    const manageShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
      window.addEventListener("scroll", manageShadow);
    };
  }, [shadow]);
  return (
    <StyledDivForNavbar className={shadow}>
      <NavContainer>
        <div css={tw`w-16 h-16 mb-1 object-left-top`}>
          <Image
            // src="/assets/pjs-software-developer.png"
            src={LogoFun}
            alt="pjs-logo-top"
            placeholder="art"
            width={150}
            height={150}
          />
        </div>
        <div>
          {/* tailwind is great because it's mobile first always */}
          <ul css={tw`hidden md:flex`}>
            <Link href="/">
              <ListStyling>Home</ListStyling>
            </Link>
            <Link href="/#about">
              <ListStyling>About</ListStyling>
            </Link>
            <Link href="/#skills">
              <ListStyling>Skills</ListStyling>
            </Link>
            <Link href="/#projects">
              <ListStyling>Projects</ListStyling>
            </Link>
            <Link href="/#contact">
              <ListStyling>Contact</ListStyling>
            </Link>
          </ul>
          {/* everytime I call the function I want it to activate once clicked on the menu hamburg. */}
          <div onClick={handleNavbarMenu} css={tw`md:hidden`}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </NavContainer>
      {/* once the mobile menu appears the background behind has an overlay darker colour. */}
      <div
        css={
          navbar
            ? tw`md:hidden fixed left-0 top-0 w-full h-screen bg-purple-800/70`
            : ""
        }
      >
        <div
          css={
            navbar
              ? tw` md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-pink-200 p-10 ease-in duration-500`
              : tw` md:hidden fixed left-[-100%] top-0 p-10 ease-in duration-500`
          }
        >
          <div>
            <TopSideDrawMenuStyling>
              <StyleBorder>
                <Link href="/">
                  <Image
                    // src="/assets/pjs-software-developer.png"
                    src={LogoFun}
                    alt="pjs-logo"
                    width={150}
                    height={150}
                    placeholder="art"
                  />
                </Link>
              </StyleBorder>
              <RoundedShadowStyling
                onClick={handleNavbarMenu}
                className="shadow-lg shadow-sky-900 ml-4"
              >
                <AiOutlineClose />
              </RoundedShadowStyling>
            </TopSideDrawMenuStyling>
            <HiddenMobileViewNavArea
              css={tw`md:hidden border-b border-b-pink-700 my-4`}
            >
              <p css={tw`w-[85%] md:w-[90%] py-4`}>
                Building my first awesome coding portfolio
              </p>
            </HiddenMobileViewNavArea>
          </div>
          <MobileMenuWrap>
            <ul css={tw`uppercase`}>
              <Link href="/">
                <li onClick={() => setNavbar(false)} css={tw`py-4 text-sm`}>
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNavbar(false)} css={tw`py-4 text-sm`}>
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNavbar(false)} css={tw`py-4 text-sm`}>
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNavbar(false)} css={tw`py-4 text-sm`}>
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNavbar(false)} css={tw`py-4 text-sm`}>
                  Contact
                </li>
              </Link>
            </ul>
            <div css={tw`pt-4`}>
              <ConnectTextStyle>Connect with me</ConnectTextStyle>
              <ConnectWrap>
                <ConnectButtonStyle className="shadow-lg shadow-sky-900">
                  <FaLinkedinIn />
                </ConnectButtonStyle>
                <ConnectButtonStyle className="shadow-lg shadow-sky-900">
                  <FaGithub />
                </ConnectButtonStyle>
                <ConnectButtonStyle className="shadow-lg shadow-sky-900">
                  <AiOutlineMail />
                </ConnectButtonStyle>
                <a href="../assets/PJSCV.pdf" target="_blank" rel="noreferrer">
                  <ConnectButtonStyle className="shadow-lg shadow-sky-900">
                    <BsFillPersonLinesFill />
                  </ConnectButtonStyle>
                </a>
              </ConnectWrap>
            </div>
          </MobileMenuWrap>
        </div>
      </div>
    </StyledDivForNavbar>
  );
};

export default Navbar;

const HiddenMobileViewNavArea = styled.div`
  // for small mobile screens.
  @media only screen and (max-width: 768px) {
    opacity: 1;
    // display: none;
    font-size: 0.8rem;
    // background: rgb(244, 249, 114);
    // background: radial-gradient(
    //   circle,
    //   rgba(244, 249, 114, 1) 0%,
    //   rgba(171, 148, 233, 1) 100%
    // );
    // border-radius: 25px;
  }
`;

const StyledDivForNavbar = styled.div`
  ${(shadow) =>
    shadow
      ? tw`fixed w-full h-20 shadow-xl z-[100]`
      : tw`fixed w-full h-20 z-[100]`}
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

// const OverlayBackStyling = styled.div(({ navbar }) => [
//   navbar ? tw`fixed left-0 top-0 w-full h-screen bg-purple-800/70` : "",
// ]);

// const SideDrawMenu = styled.div(({ navbar }) => [
//   navbar
//     ? tw`fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-pink-200 p-10 ease-in duration-500`
//     : tw`fixed left-[-100%] top-0 p-10 ease-in duration-500`,
// ]);

const TopSideDrawMenuStyling = tw.div`
flex
w-full
items-center
justify-between
`;

const StyleBorder = tw.div`
rounded-md
border-pink-700
border-double
border-8
`;

const RoundedShadowStyling = tw.div`
rounded-full
hover:shadow-inner
md:drop-shadow-xl
p-3
cursor-pointer
hover:scale-105
ease-in
duration-300
`;

const MobileMenuWrap = styled.div`
  ${tw`py-4 flex flex-col`}
`;

const ConnectTextStyle = styled.p`
  ${tw`uppercase tracking-widest text-pink-700 text-xs`}
`;

const ConnectButtonStyle = tw.div`
rounded-full
p-3
cursor-pointer
hover:scale-105
ease-in
duration-300
hover:shadow-inner
md:drop-shadow-xl
`;

const ConnectWrap = styled.div`
  ${tw`flex items-center justify-between my-4 w-full sm:w-[80%]`}
`;

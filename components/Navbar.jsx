import React, { useState } from "react";
import Image from "next/image";
import pic from "../public/assets/pjs-software-developer.png";
import styled from "styled-components";
import tw from "twin.macro";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  // set the useSate to a default of false
  const [Navbar, setNavbar] = useState(false);

  // function to handle toggling my menu
  const handleNavbarMenu = () => {
    // when every I run this function I will want it to set as true.
    setNavbar(true);
  };
  return (
    <StyledDivForNavbar>
      <NavContainer>
        <div css={tw`w-16 h-16 mb-1 object-left-top`}>
          <Image
            // src="/pjs-software-developer.png"
            src={pic}
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
          {/* everytime I call the function I want it to activate once clicked on the menu hamburg. */}
          <div onClick={handleNavbarMenu} css={tw`md:hidden`}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </NavContainer>
      {/* once the mobile menu appears the background behind has an overlay darker colour. */}
      <OverlayBackStyling>
        <SideDrawMenu>
          <div>
            <TopSideDrawMenuStyling>
              <StyleBorder>
                <Image
                  // src="/pjs-software-developer.png"
                  src={pic}
                  alt="pjs-logo"
                  width={150}
                  height={150}
                  placeholder="art"
                />
              </StyleBorder>
              <RoundedShadowStyling className="shadow-lg shadow-sky-900">
                <AiOutlineClose />
              </RoundedShadowStyling>
            </TopSideDrawMenuStyling>
            <div css={tw`border-b border-b-pink-700 my-4`}>
              <p css={tw`w-[85%] md:w-[90%] py-4`}>
                Building my first awesome coding portfolio
              </p>
            </div>
          </div>
          <MobileMenuWrap>
            <ul css={tw`uppercase`}>
              <Link href="/">
                <li css={tw`py-4 text-sm`}>Home</li>
              </Link>
              <Link href="/">
                <li css={tw`py-4 text-sm`}>About</li>
              </Link>
              <Link href="/">
                <li css={tw`py-4 text-sm`}>Skills</li>
              </Link>
              <Link href="/">
                <li css={tw`py-4 text-sm`}>Projects</li>
              </Link>
              <Link href="/">
                <li css={tw`py-4 text-sm`}>Contact</li>
              </Link>
            </ul>
            <div css={tw`pt-40`}>
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
                <ConnectButtonStyle className="shadow-lg shadow-sky-900">
                  <BsFillPersonLinesFill />
                </ConnectButtonStyle>
              </ConnectWrap>
            </div>
          </MobileMenuWrap>
        </SideDrawMenu>
      </OverlayBackStyling>
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

const OverlayBackStyling = tw.div`
fixed
left-0
top-0
w-full
h-screen
bg-purple-800/70
`;

const SideDrawMenu = tw.div`
fixed
left-0
top-0
w-[75%]
sm:w-[60%]
md:w-[45%]
h-screen
bg-pink-200
p-10
ease-in
duration-500
`;

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
  ${tw`uppercase tracking-widest text-pink-700`}
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

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
          <div css={tw`md:hidden`}>
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

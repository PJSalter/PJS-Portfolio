import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Image from "next/image";
import SwanMessage from "../public/assets/mail-carrier.jpg";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <ContactMeTitle>Contact</ContactMeTitle>
        <h2 className="py-4 text-lg">Get in Touch</h2>
        <GridSystem>
          <LeftSideContent>
            <div className="lg:p-4 h-full rounded-xl">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={SwanMessage}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Peter James Salter</h2>
                <p>Software Developer</p>
                <p className="py-4">
                  I am available for full-time positions and freelance. Drop me
                  a Message.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">connect with me </p>
                <ConnectWrap>
                  <a
                    href="https://www.linkedin.com/in/peter-james-salter/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AboutConnectButtonStyle className="shadow-lg shadow-[#64a25a]">
                      <FaLinkedinIn />
                    </AboutConnectButtonStyle>
                  </a>
                  <a
                    href="https://github.com/PJSalter"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AboutConnectButtonStyle className="shadow-lg shadow-[#64a25a]">
                      <FaGithub />
                    </AboutConnectButtonStyle>
                  </a>
                  <Link href="mailto:psalter88@googlemail.com">
                    <AboutConnectButtonStyle className="shadow-lg shadow-[#64a25a]">
                      <AiOutlineMail />
                    </AboutConnectButtonStyle>
                  </Link>
                  <AboutConnectButtonStyle className="shadow-lg shadow-[#64a25a]">
                    <BsFillPersonLinesFill />
                  </AboutConnectButtonStyle>
                </ConnectWrap>
              </div>
            </div>
          </LeftSideContent>

          <RightSideContent>
            <div className="p-4">
              <form
                action="https://getform.io/f/f9207452-0f87-489e-85e5-6541feb2bd03"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2" for="name">
                      Name
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-purple-500"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2" for="tel">
                      Telephone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-purple-500"
                      type="text"
                      name="tel"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2" for="email">
                    Email
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-purple-500"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2" for="detail">
                    Subject
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-purple-500"
                    type="text"
                    name="detail"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2" for="message">
                    Message
                  </label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-purple-500"
                    rows="17"
                    name="message"
                  ></textarea>
                </div>
                <ButtonStyle className="shadow-xl shadow-[#64a25a]">
                  Send Message
                </ButtonStyle>
              </form>
            </div>
          </RightSideContent>
        </GridSystem>
        <div className="flex justify-center py-12">
          <Link href="/">
            <ConditionalButton className="press-to-top" switchStyle={false}>
              Back to the top
            </ConditionalButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;

const ContactMeTitle = styled.p`
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

  // for small mobile screens.
  @media only screen and (max-width: 768px) {
    font-size: 1.8rem;
    margin-top: 10px;
  }
`;

const GridSystem = styled.div`
  ${tw`grid lg:grid-cols-5 gap-8`}
`;

const LeftSideContent = styled.div`
  ${tw`col-span-3 lg:col-span-2 w-full h-full shadow-xl bg-[#e2fbde] rounded-xl p-4`}
`;

const ConnectWrap = styled.div`
  ${tw`flex items-center justify-between w-full max-w-[330px] m-auto py-4`}
`;

const AboutConnectButtonStyle = tw.div`
rounded-full
p-6
cursor-pointer
hover:scale-110
ease-in
duration-500
hover:shadow-inner
md:drop-shadow-xl
bg-pink-400
`;

const RightSideContent = styled.div`
  ${tw`col-span-3 w-full h-auto shadow-xl bg-[#e2fbde] rounded-xl lg:p-4`}
`;

const ButtonStyle = styled.button`
  ${tw`w-full p-4 text-pink-900 bg-pink-400 border-2 rounded-xl border-pink-900 mt-4`}
`;

// const ConditionalButton = styled.button(({ switchStyle }) => [
//   switchStyle
//     ? tw`bg-[#581c87] hover:bg-[#f43f5e]`
//     : tw`bg-[#0d9488] hover:bg-[#164e63]`,
//   tw`
//       text-slate-50
//       font-bold
//       py-2
//       px-4
//       border
//       border-black
//       rounded-full
//       `,
// ]);

const ConditionalButton = styled.button`
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  font-size: inherit;
  font-family: inherit;

  &.press-to-top {
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
  &.press-to-top::before {
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
    box-shadow: 0 0 0 2px #b18597, 0 0.625em 0 0 #ffe3e2;
    transform: translate3d(0, 0.75em, -1em);
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
      box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
  }
  &.press-to-top:hover {
    background: #ffe9e9;
    transform: translate(0, 0.25em);
  }
  &.press-to-top:hover::before {
    box-shadow: 0 0 0 2px #b18597, 0 0.5em 0 0 #ffe3e2;
    transform: translate3d(0, 0.5em, -1em);
  }
  &.press-to-top:active {
    background: #ffe9e9;
    transform: translate(0em, 0.75em);
  }
  &.press-to-top:active::before {
    box-shadow: 0 0 0 2px #b18597, 0 0 #ffe3e2;
    transform: translate3d(0, 0, -1em);
  }
`;

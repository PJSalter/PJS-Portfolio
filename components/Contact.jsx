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
    <div className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <ContactMeTitle>Contact</ContactMeTitle>
        <h2 className="py-4">Get in Touch</h2>
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
                <p>Full Stack Developer</p>
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
                    <AboutConnectButtonStyle className="shadow-lg shadow-yellow-400">
                      <FaLinkedinIn />
                    </AboutConnectButtonStyle>
                  </a>
                  <a
                    href="https://github.com/PJSalter"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AboutConnectButtonStyle className="shadow-lg shadow-yellow-400">
                      <FaGithub />
                    </AboutConnectButtonStyle>
                  </a>
                  <Link href="mailto:psalter88@googlemail.com">
                    <AboutConnectButtonStyle className="shadow-lg shadow-yellow-400">
                      <AiOutlineMail />
                    </AboutConnectButtonStyle>
                  </Link>
                  <AboutConnectButtonStyle className="shadow-lg shadow-yellow-400">
                    <BsFillPersonLinesFill />
                  </AboutConnectButtonStyle>
                </ConnectWrap>
              </div>
            </div>
          </LeftSideContent>
        </GridSystem>
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
`;

const GridSystem = styled.div`
  ${tw`grid lg:grid-cols-5 gap-8`}
`;

const LeftSideContent = styled.div`
  ${tw`col-span-3 lg:col-span-2 w-full h-full shadow-xl bg-green-200 rounded-xl p-4`}
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

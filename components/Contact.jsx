import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Contact = () => {
  return (
    <div className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <ContactMeTitle>Contact</ContactMeTitle>
        <h2 className="py-4">Get in Touch</h2>
        <GridSystem></GridSystem>
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
  ${tw`grid md:grid-cols-2 gap-8`}
`;

import React from "react";
import styled from "styled-components";

import { colors } from "../utils/vars";

const Title = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  width: 100%;
`;

const Hero = styled.img`
  margin: 0;
`;

const Ribbon = styled.div`
  background-color: ${colors.dark50};
  display: inline-block;
  position: absolute;
  border-top: 0.125rem solid white;
  border-bottom: 0.125rem solid white;
  box-shadow: 0 0.25rem 0.5rem 0 ${colors.black50};
  width: fit-content;
  z-index: 88;
  bottom: 10%;
  left: 0;
`;

const Header = styled.h1`
  color: ${colors.textSecond};
  font-family: "Roboto Condensed";
  font-variant: small-caps;
  font-size: calc(2.5vw + 1.5rem);
  overflow-wrap: break-word;
  white-space: pre-wrap;
  margin: 0.5rem 5vw;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
`;

const divTitle = ({ title, hero } ) => (
  <>
    <Title>
      <Hero src={hero} alt="" />
      <Ribbon>
        <Header>{title}</Header>
      </Ribbon>
    </Title>
  </>
);

export default divTitle;

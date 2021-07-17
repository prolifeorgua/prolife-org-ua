import React from "react";
import styled from "styled-components";

import { colors } from "../utils/vars";

const Title = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: start;
  background: linear-gradient(to bottom, ${colors.main}, transparent);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 36.5%;
  width: 100%;
  min-height: 0;
`;

const Ribbon = styled.div`
  background-color: ${colors.dark50};
  display: inline-block;
  border-top: 0.125rem solid white;
  border-bottom: 0.125rem solid white;
  box-shadow: 0 0.25rem 0.5rem 0 ${colors.black50};
  margin-bottom: 5%;
`;

const Header = styled.h1`
  color: ${colors.textSecond};
  font-family: "Roboto Condensed";
  font-size: calc(2.5vw + 1.5rem);
  font-variant: small-caps;
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
    <Title style={{backgroundImage: `url(${hero})`}}>
      <Ribbon>
        <Header>{title}</Header>
      </Ribbon>
    </Title>
  </>
);

export default divTitle;

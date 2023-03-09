import React from "react";
import styled from "styled-components";

import { colors } from "../utils/vars";

const MottoStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: end;
  background: linear-gradient(to bottom, ${colors.main}, transparent);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 66vh;
  max-height: 85vh;
  height: min-content;
  width: 100%;

  & div {
    color: ${colors.textSecond};
    font-size: calc(1.5vw + 1.5rem);
    font-style: italic;
    text-shadow: 3px 3px 4px black, 0px 0px 2px black;
    width: calc(50vw + 108px);
    margin: 3rem 5vw 0.5rem 5vw;
    text-align: right;
    line-height: 1.1;
    hyphens: auto;
    white-space: pre-line;
    word-break: break-word;
    // overflow-wrap: break-word;
  }

  & .phrase {
    font-weight: bold;
  }
  & .caption {
    display: inline-block;
    margin-top: calc(0.5vw + 0.5rem);
    font-size: 80%;
  }

`;

const Motto = ({ hero, payload }) => (
  <MottoStyled style={{backgroundImage: `url(${hero})`}}>
    <div dangerouslySetInnerHTML={{ __html: payload }} />
  </MottoStyled>
);

export default Motto;

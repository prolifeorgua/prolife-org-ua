import React from "react";
import styled from "styled-components";

import { colors } from "../utils/vars";

const Motto = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  background: linear-gradient(to bottom, ${colors.main}, transparent);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 22%;
  width: 100%;
  min-height: 0;

  & div {
    color: ${colors.textSecond};
    font-size: calc(1.5vw + 1.5rem);
    font-style: italic;
    text-shadow: 3px 3px 4px black, 0px 0px 2px black;
    width: calc(50vw + 108px);
    margin: 0.5rem 5vw;
    text-align: right;
    line-height: 1.1;
    hyphens: auto;
    white-space: pre-line;
    overflow-wrap: break-word;
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

const divTitle = ({ hero, payload }) => (
  <>
    <Motto style={{backgroundImage: `url(${hero})`}}>
      <div dangerouslySetInnerHTML={{ __html: payload }} />
    </Motto>
  </>
);

export default divTitle;

import React from "react";
import styled from "styled-components";

import { colors } from "../utils/vars";
import { site } from "../utils/site";

const Author = styled.section`
  display: flex;
  justify-content: end;
  color: ${colors.textBody};
  font-style: italic;
  font-size: 0.9rem;

  & strong, & em {
    color: ${colors.textBody};
  }

  & div {
    max-width: 20em;
  }

  & p {
    padding: 0;
    margin: 0;
  }
`;


export default () => (
  <>
    <Author>
      <div dangerouslySetInnerHTML={{ __html: site.artAuthor }} />
    </Author>
  </>
);



// <div dangerouslySetInnerHTML={{ __html: html }} />

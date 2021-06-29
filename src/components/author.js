import React from "react";
import styled from "styled-components";

import { colors } from "../utils/vars";

const Author = styled.section`
  display: flex;
  justify-content: flex-end;
  color: ${colors.textBody};
  font-style: italic;
  font-size: 0.9rem;
  max-width: 50rem;
  padding: 0 1rem;
  margin: 0 auto;


  & strong, & em {
    color: ${colors.textBody};
  }

  & div {
    max-width: 22rem;
    padding-left: 2rem;
  }

  & p {
    padding: 0;
    margin: 0;
  }
`;

const divAuthor = ({ author } ) => (
  <>
    <Author >
      <div dangerouslySetInnerHTML={{ __html: author }} />
    </Author>
  </>
);

export default divAuthor;

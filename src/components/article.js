import React from "react";
import styled from "styled-components";

const Article = styled.section`
  max-width: 50rem;
  margin: 0 auto;
  padding: 1rem 1rem 0 1rem;

  & p:first-child,
  & li:first-child {
    margin-top: 2rem;
  }
`;

const divArticle = ({ children } ) => (
  <>
    <Article>
      { children }
    </Article>
  </>
);

export default divArticle;

  import React from "react";
  import styled from "styled-components";

  import { colors } from "../utils/vars";

  const Main = styled.main`
    padding: 3rem 1rem;
    max-width: 50em;
    color: ${colors.textBody};

    & a {
      color: ${colors.link};
    }

    & p:last-child {
      // margin-bottom: 0;
    }

    & ul li, ol li {
      margin-bottom: 0;
    }

    & .the-end {
      text-align: center;
      font-size: 2.5rem;
    }

    h2, h3, h4, h5, h6 {
      margin-top: 1.5rem;
      padding-top: 1em;
    }

    h3, h5 {
      text-transform: uppercase;
    }

    h2 {
      font-size: 1.5rem;
    }

    h3, h4 {
      font-size: 1.2rem;
    }

    h5, h6 {
      font-size: 1rem;
      margin-bottom: .2rem;
      padding-top: 0;
    }

    h2, h3, h4, h5, h6,
    & th, tfoot td {
      color: ${colors.textMain};
    }

    img {
      margin-bottom: 0;
    }

    img + em {
      color: ${colors.textBody};
      display: block;
      text-align: center;
      font-size: 0.9em;
    }

    figure.gallery-item {
      display: inline-block;
      padding-left: .33rem;
      padding-right: .33rem;
    }

    figure img {
      display: block;
      margin: 0 auto;
      width: 272px;
    }

    @media screen and (max-width: 960px) {
      figure img {
        max-width: 55vmin;
      }
    }

    @media screen and (max-width: 640px) {
      figure img {
        max-width: 90%;
      }
    }

    figcaption {
      color: ${colors.textBody};
      text-align: center;
      font-style: italic;
      font-size: 0.9em;
    }

    blockquote, code, pre {
      background: ${colors.second};
      border-bottom: 0.0625em solid ${colors.light};
      color: ${colors.textMain};
    }

    code {
      padding: 0.125em 0.25em;
      vertical-align: top;
    }

    blockquote, pre {
      padding: 1em;
      border-left: 0.125rem solid ${colors.main};
    }

    blockquote {
      font-style: italic;
    }

    pre {
      line-height: 1.2em;
    }

    table {
      background: #fff8ff;
    }

    tbody tr:nth-child(even) {
      background-color: #fff6ff;
    }

    thead, tfoot {
      background: ${colors.second};
    }
  `;

  const main = ({ children }) => (
    <>
      <Main>
        {children}
      </Main>
    </>
  );

  export default main;

  import React from "react";
  import styled from "styled-components";

  import { colors } from "../utils/vars";

  const Main = styled.main`
    grid-area: main;
    // padding: 3rem 1rem;
    // max-width: 50em;
    color: ${colors.textBody};

    & a {
      color: ${colors.link};
    }

    & li:first-child {
      margin-top: 1rem !important;
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

    h4, h6 {
      text-transform: none;
    }

    h2 {
      font-size: 1.75rem;
    }

    h3, h4 {
      font-size: 1.33rem;
    }

    h5, h6 {
      font-size: 1.1rem;
      margin-bottom: .5rem;
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
      font-family: "Roboto Condensed";
      color: ${colors.textBody};
      display: block;
      text-align: center;
      font-size: 0.9em;
    }

    .gallery {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-end;
    }

    .gallery-item {
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
      font-family: "Roboto Condensed";
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

    blockquote p:first-child {
      margin-top: 0;
    }

    pre {
      line-height: 1.2em;
    }

    table {
      background: ${colors.second10};
    }

    tbody tr:nth-child(even) {
      background: ${colors.second25};
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

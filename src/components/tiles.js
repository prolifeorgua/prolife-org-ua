import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import { colors } from "../utils/vars";

const Tiles = styled.section`
  // grid-area: tiles;

  @media screen and (min-width: 40rem) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 1.61rem;
    padding: 0.25rem;
    // grid-gap: 1px;

    @media screen and (min-width: 60rem) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (min-width: 80rem) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media screen and (min-width: 100rem) {
      grid-template-columns: repeat(5, 1fr);
    }

    .entry-title {
      word-break: break-word;
    }
  }
`;

const Tile = styled.div`
  background-color: ${colors.second};
  padding: 0.25rem;

  & img {
    margin-bottom: 0;
  }
`;

const Label = styled.div`
  font-family: "Roboto Condensed";
  padding: 0.125rem 0.5rem;
  margin-bottom: 0.125rem;
`;

const tileStyle = `
  display: flex;
  text-decoration: none;
  border: 0.125rem solid transparent;
  padding: 0.25rem;
  margin: 0.125rem;
  color: ${colors.textMain};

  &:hover {
    border-color: ${colors.main};
  }
`;

const tiles = () => (
  <StaticQuery
    query={graphql`
      {
        allContentfulArticle(sort: { order: ASC, fields: orderNumber }) {
          edges {
            node {
              title
              link
              orderNumber
              hero {
                file { url }
              }
            }
          }
        }
      }
    `}
    render={({ allContentfulArticle: { edges } }) => (
      <Tiles>
        {edges.slice(1).map(({ node: { title, link, hero: {file: {url}} } }) => (
          <Link to={link} key={link} css={tileStyle}>
            <Tile>
              <img src={url} alt={title} />
              <Label>{title}</Label>
            </Tile>
          </Link>
        ))}
      </Tiles>
    )}
  />
);

export default tiles;

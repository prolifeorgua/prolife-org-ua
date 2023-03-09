import React from "react";
import { useStaticQuery, Link, graphql } from "gatsby";
import styled from "styled-components";

import { colors } from "../utils/vars";

const TilesStyled = styled.section`
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
  width: 100%;
`;

const Pict = styled.div`
  position: relative;
  display: inline-block;
  overflow: hidden;
  padding-bottom: 50%;
  width: 100%;
  height: 0;

  & img {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin-bottom: 0;
    transition: 0.3s;
  }
  & img:hover {
    transform: scale(1.1);
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

const Tiles = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulArticle(sort: { orderNumber: ASC }) {
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
  `);
  const {allContentfulArticle: {edges}} = data;

  return (
    <TilesStyled>
      {edges.slice(1).map(({node: {title, link, hero: {file: {url}}}}) => (
        <Link to={link} key={link} css={tileStyle}>
          <Tile>
            <Pict>
              <img src={url} alt={title} />
            </Pict>
            <Label>{title}</Label>
          </Tile>
        </Link>
      ))}
    </TilesStyled>
  )
};

export default Tiles;

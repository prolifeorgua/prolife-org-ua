import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import { colors } from "../utils/vars";
import { site } from "../utils/site";

const Header = styled.header`
  width: 100%;
  height: 4em;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${colors.main};
  color: ${colors.textSecond};
  padding: .5em 1em;
`;

const Logo = styled.img`
  border-radius: 20%;
  height: 100%;
`;

const logoLink = `height: 100%;`;

export default () => (
  <StaticQuery
    query={graphql`
      {
        allFile(filter: { name: { eq: "logo" } }) {
          edges {
            node {
              publicURL
            }
          }
        }
      }
    `}
    render={({
      allFile: {
        edges: [
          {
            node: {
              publicURL
            }
          }
        ]
      }
    }) => (
      <Header>
        <Link to="/" css={logoLink}>
          <Logo src={publicURL} alt="Logo" />
        </Link>
      </Header>
    )}
  />
);

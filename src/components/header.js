import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import { colors } from "../utils/vars";

const Header = styled.header`
  grid-area: header;
  width: 100%;
  height: 4em;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${colors.main};
  color: ${colors.textSecond};
  padding: .75em;
`;

const Logo = styled.img`
  border-radius: 20%;
  height: 100%;
`;

const logoLink = `height: 100%;`;

const header = () => (
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

export default header;

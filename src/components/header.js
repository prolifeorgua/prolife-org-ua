import React from "react";
import { useStaticQuery, Link, graphql } from "gatsby";
import styled from "styled-components";

import { colors } from "../utils/vars";

const HeaderStyled = styled.header`
  grid-area: header;
  width: 100%;
  height: 4em;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${colors.main};
  color: ${colors.textSecond};
  padding: .4em .8em;
`;

const Logo = styled.img`
  border-radius: 20%;
  height: 100%;
`;

const logoLink = `height: 100%;`;

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { name: { eq: "logo" } }) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `);
  const {allFile: {edges: [{node: {publicURL: url}}]}} = data;

  return (
    <HeaderStyled>
      <Link to="/" css={logoLink}>
        <Logo src={url} alt="Logo" />
      </Link>
    </HeaderStyled>
  );
};

export default Header;

import React from "react";
import { useStaticQuery, Link, graphql } from "gatsby";
import styled from "styled-components";

import { colors } from "../utils/vars";

const SidebarStyled = styled.nav`
  grid-area: sidebar;
  line-height: 1.25;
  padding: 1em 0;
  background-color: ${colors.second};
  color: ${colors.textMain};
  z-index: 99;
`;

const Wrapper = styled.div`
  max-width: 22rem;
  margin: 0 auto;
`;

const navItem = `
  display: flex;
  align-items: center;
  margin: 0 2em 0 2em;
  padding: 0.5em 0;
  border-bottom: 0.05em solid ${colors.main50};
  postion: relative;
  color: ${colors.textMain};
  font-family: "Roboto Condensed";
  text-decoration: none;

  &:before {
    content: '';
    transition: 0.5s;
    width: 0.5em;
    height: 0.5em;
    position: absolute;
    left: 0.8em;
    border-radius: 50%;
    display: block;
    background-color: ${colors.main};
    transform: scale(0);
  }

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    &:before {
      transform: scale(1);
    }
  }
`;

const Sidebar = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulArticle(sort: { orderNumber: ASC }) {
        edges {
          node {
            title
            link
            orderNumber
          }
        }
      }
    }
  `);
  const {allContentfulArticle: {edges}} = data;

  return (
    <SidebarStyled>
      <Wrapper>
        {edges.map(({node: {title, link, orderNumber}}) => (
          <Link to={link} key={link} css={navItem}>
            {/* {orderNumber}.  */}
            {title}
          </Link>
        ))}
      </Wrapper>
    </SidebarStyled>
  )
};

export default Sidebar;

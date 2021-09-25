  import React from "react";
  import { Link } from "gatsby";
  import styled from "styled-components";

  import { colors } from "../utils/vars";
  import { site } from "../utils/site";

  const Footer = styled.footer`
    grid-area: footer;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${colors.textMain};
    color: ${colors.light};
    padding: 2em;

    a {
      color: ${colors.textSecond};
    }

    .contacts {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: start;
      align-content: center;
      max-height: 2.5em;

      @media screen and (max-width: 640px) {
        max-height: 100%;
      }

      & div {
        position: relative;
        margin: 0.5em 1.5em 0.5em 1.5em;
        flex: 0 1 content;
      }

      & div svg {
        position: absolute;
        width: 1.2em;
        height: 1.2em;
        left: -1.4em;
        top: 0.2em;
      }

      & p {
        margin: 0em;
      }
    }

    .copysign {
      font-size: 1.5em;
      vertical-align: -0.1em;
    }
  `;

   const footer = () => (
    <Footer>
      <div className="contacts">
        <div className="email">
          <svg><use xlinkHref="#icon-email" /></svg>
          <p><a href={"mailto:"+site.siteEmail1}>{site.siteEmail1}</a></p>
        </div>
        <div className="phone">
          <svg><use xlinkHref="#icon-phone" /></svg>
          <p><a href={"tel:"+site.siteTel1}>{site.siteTel1}</a></p>
        </div>
      </div>
      <div className="copyright">
        <span className="copysign">&copy;</span>&nbsp;<time dateTime="2021-01">2021</time>&nbsp;
        <Link to="/">{site.siteName}</Link>
      </div>
    </Footer>
  );

  export default footer;

import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

// import { site } from "../utils/site";
import Layout from "../components/layout";
import { formatDate } from "../utils/format"

const template = ({
  data: {
    site: {
      siteMetadata: {
        title: siteName,
        phone,
        siteURL,
      }
    },
    allContentfulArticle: {
      edges: [
        {
          node: {
            title,
            content: {
              childMarkdownRemark: { html: articleContent }
            },
            author: {
              childMarkdownRemark: { html: articleAuthor },
              author
            },
            hero: {
              file: { url: imgURL }
            },
            description,
            category,
            link,
            updatedAt
          }
        }
      ]
    }
  }
}) => {
  return (
    <Layout url={siteURL} slug={link} title={title} hero={imgURL} author={articleAuthor}>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#dd0000" />
        <meta name="msapplication-TileColor" content="#99ddff" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content={description} />
        <meta property="og:url" content={`https://${siteURL}${link}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imgURL} />
        <meta property="og:site_name" content={siteURL} />
        <meta property="og:locale" content="uk_UA" />
        <meta property="article:published_time" content={formatDate(updatedAt)} />
        <meta property="article:author" content={author} />
        <title>{siteName} | {title}</title>
      </Helmet>
      <div dangerouslySetInnerHTML={{ __html: articleContent }} />
    </Layout>
  );
};

export default template;


export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        phone
        siteURL
      }
    }
    allContentfulArticle(filter: { link: { eq: $slug } }) {
      edges {
        node {
          title
          content {
            childMarkdownRemark { html }
          }
          author {
            childMarkdownRemark { html }
            author
          }
          hero {
            file { url }
          }
          description
          category
          link
          orderNumber
          updatedAt
        }
      }
    }
  }
`;

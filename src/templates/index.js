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

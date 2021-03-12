import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import { site } from "../utils/site";
import Layout from "../components/layout";

export default ({
  data: {
    allContentfulArticle: {
      edges: [
        {
          node: {
            title,
            content: {
              childMarkdownRemark: { html: articleContent }
            },
            author: {
              childMarkdownRemark: { html: articleAuthor }
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
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta property="og:url" content={`https://${site.siteURL}${link}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={site.siteURL} />
        <meta property="article:published_time" content={updatedAt} />
        <meta property="article:author" content={articleAuthor} />
        <title>{site.siteName} | {title}</title>
      </Helmet>
      <div dangerouslySetInnerHTML={{ __html: articleContent }} />
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    allContentfulArticle(filter: { link: { eq: $slug } }) {
      edges {
        node {
          title
          content {
            childMarkdownRemark {
              html
            }
          }
          author {
            childMarkdownRemark {
              html
            }
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
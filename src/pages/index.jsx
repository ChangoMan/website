import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';

const BlogIndex = ({ data, location }) => {
  const { site, allMarkdownRemark } = data;
  const siteTitle = site.siteMetadata.title;
  const posts = allMarkdownRemark.edges;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Homepage" />
      mkay so this is the homepage
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;

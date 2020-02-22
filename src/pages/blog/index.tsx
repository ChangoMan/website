import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../../components/layout/layout';
import SEO from '../../components/seo';

interface Props {
  data: {
    allMarkdownRemark: {
      edges: object[];
    };
  };
}

const BlogIndex = ({ data, location }: Props) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Blog" />
      <div className="max-w-2xl my-0 mx-auto">
        <h2 className="font-black font-display text-display-title">BLOG</h2>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <div key={node.fields.slug}>
              <h3 className="mb-1">
                <Link to={`/blog${node.fields.slug}`}>{title}</Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt
                }}
              />
            </div>
          );
        })}
      </div>
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

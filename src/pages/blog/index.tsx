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
        <div className="text-center mb-8">
          <h2 className="font-black font-display text-xl inline-block border-solid border-b-4 border-gray-400 mb-5">
            BLOG
          </h2>
        </div>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <div className="mb-16" key={node.fields.slug}>
              <div className="flex mt-16">
                {/* {node.frontmatter.featuredImage && (
                  <Image
                    className="-ml-4 w-1 mr-2"
                    fixed={node.frontmatter.featuredImage.childImageSharp.fixed}
                  />
                )} */}
                <div>
                  <h3 className="font-black font-display text-4xl leading-tight mb-0 mt-0">
                    <Link
                      className="no-underline text-black"
                      to={`/blog${node.fields.slug}`}
                    >
                      {title}
                    </Link>
                  </h3>
                  <small className="opacity-50">
                    <em>{node.frontmatter.date}</em>
                  </small>
                </div>
              </div>
              <p
                className="mt-0"
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
            featuredImage {
              childImageSharp {
                fixed(width: 16, height: 70, cropFocus: CENTER) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;

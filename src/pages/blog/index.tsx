import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
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
            <div className="mb-16 mt-16 relative" key={node.fields.slug}>
              {node.frontmatter.featuredImage && (
                <div
                  className="absolute"
                  style={{ zIndex: -1, top: '-3rem', left: '-5rem' }}
                >
                  <Image
                    className="-ml-4 w-1 mr-2 rounded"
                    fixed={node.frontmatter.featuredImage.childImageSharp.fixed}
                  />
                </div>
              )}
              <div className="bg-white px-8 pt-10 pb-8 rounded shadow-lg">
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
                <p
                  className="mt-0"
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </div>
              <div
                className="absolute"
                style={{ zIndex: 1, bottom: '0', right: '0' }}
              >
                <Link
                  className="no-underline text-white"
                  to={`/blog${node.fields.slug}`}
                >
                  <div className="bg-black text-white px-5 py-2 rounded-tl rounded-br flex items-center">
                    <span className="text-2xl leading-none pr-3 font-light">
                      →
                    </span>
                    <span className="leading-none underline">Read</span>
                  </div>
                </Link>
              </div>
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

// featuredImage {
//   childImageSharp {
//     fixed(width: 240, height: 160, cropFocus: CENTER) {
//       ...GatsbyImageSharpFixed
//     }
//   }
// }

import { graphql, Link } from 'gatsby';
import React from 'react';
import Plus from '../components/assets/plus';
import Ticker from '../components/assets/ticker';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';

const contentWidth = 'mx-auto max-w-5xl';

interface Props {
  data: {
    allMarkdownRemark: {
      edges: object[];
    };
  };
}

const SiteIndex = ({ data }: Props) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title="Home" />
      <div className="relative h-full min-h-screen lg:-mt-20 mb-12">
        <div
          className="absolute opacity-75 h-full min-h-screen left-0 w-full"
          style={{ zIndex: -1 }}
        >
          <img
            style={{ width: '100%', height: '100%' }}
            className="object-cover lg:object-contain"
            src="homepageprofile.jpg"
          />
        </div>
        <div
          className={`${contentWidth} section-1 relative flex flex-col justify-center h-full min-h-screen`}
        >
          <div className="relative">
            <div
              className="back-layer absolute top-0 w-full h-full"
              style={{ zIndex: -1 }}
            >
              <div
                className="opacity-75 mx-auto lg:ml-48 mt-12 lg:mt-0"
                style={{ width: '22rem' }}
              >
                <Plus />
              </div>
            </div>
            <div className="front-layer top-0 right-0 flex flex-col justify-center items-center  w-full h-full">
              <div className="text-right hidden lg:block w-full">
                <div className="font-black font-display text-display-title uppercase leading-none">
                  Designer
                </div>
                <div className="font-black font-display text-display-title uppercase leading-none">
                  Developer
                </div>
              </div>
              <div
                className="text-right lg:hidden"
                style={{ writingMode: 'vertical-lr' }}
              >
                <div className="font-black font-display text-display-title uppercase leading-none">
                  Designer
                </div>
                <div className="font-black font-display text-display-title uppercase leading-none">
                  Developer
                </div>
              </div>
              <Ticker
                textItems={[
                  'ReactJS',
                  'NextJS',
                  'Javascript',
                  'ES6',
                  'GatsbyJS',
                  'NodeJS',
                  'Functional Programming',
                  'Graphic Design',
                ]}
              />
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 pb-6 text-3xl leading-none pr-3 font-light text-center">
          ↓
        </div>
      </div>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <div
            className="mb-16 mx-auto relative max-w-xl shadow-lg p-8 bg-white rounded"
            key={node.fields.slug}
          >
            <p className="mb-0">Latest blog post:</p>
            <h3 className="font-black font-display text-4xl leading-tight mb-0 mt-0">
              <Link className="text-black" to={`/blog${node.fields.slug}`}>
                {title}
              </Link>
            </h3>
          </div>
        );
      })}
    </Layout>
  );
};

export default SiteIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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

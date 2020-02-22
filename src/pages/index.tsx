import { graphql } from 'gatsby';
import React from 'react';
import Plus from '../components/assets/plus';
import Ticker from '../components/assets/ticker';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';

const contentWidth = 'mx-auto max-w-5xl';

const BlogIndex = ({ data, location }) => {
  const { site, allMarkdownRemark } = data;
  const siteTitle = site.siteMetadata.title;
  const posts = allMarkdownRemark.edges;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Homepage" />
      <div className="relative lg:static">
        <div
          className="absolute opacity-75 h-full min-h-screen top-0 left-0 w-full"
          style={{ zIndex: -1 }}
        >
          <img
            style={{ width: '100%', height: '100%' }}
            className="object-cover lg:object-contain"
            src="homepageprofile.jpg"
          />
        </div>
        <div className={`${contentWidth} section-1 relative`}>
          <div
            className="back-layer absolute top-0 min-w-full min-h-full"
            style={{ zIndex: -1 }}
          >
            <div
              className="opacity-75 mx-auto lg:ml-48 mt-12 lg:mt-0"
              style={{ width: '22rem' }}
            >
              <Plus />
            </div>
          </div>
          <div className="front-layer top-0 right-0 flex flex-col justify-center items-center lg:items-end w-full">
            <div className="text-right hidden lg:block">
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
                'Accessibility',
                'Javascript',
                'Graphic Design',
                'GatsbyJS',
                'Object Oriented Programming',
                'Functional Programming'
              ]}
            />
          </div>
        </div>
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

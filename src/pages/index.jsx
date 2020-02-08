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
    <div>
      <div
        className="absolute top-0 opacity-75 -mt-24 w-screen flex justify-center"
        style={{ zIndex: -1 }}
      >
        <img src="homepageprofile.jpg" />
      </div>
      {/* <img className="section-2-image absolute top-0 right-0 pointer-events-none" src="foreground-grenery-1.png" /> */}

      <Layout location={location} title={siteTitle} fullscreenWidth>
        <SEO title="Homepage" />
        <div className={`${contentWidth} section-1 relative h-screen mb-24`}>
          <div className="back-layer absolute top-0 w-full h-full">
            <div className="w-1/3 mt-24 ml-48">
              <Plus />
            </div>
          </div>
          <div className="front-layer absolute top-0 right-0 flex flex-col items-end mt-24 w-full">
            <div className="font-black font-display text-display-title uppercase leading-none">
              Designer
            </div>
            <div className="font-black font-display text-display-title uppercase leading-none">
              Developer
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
      </Layout>
    </div>
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

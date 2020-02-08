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
    <div className="relative">
      <div className="absolute opacity-75 overflow-hidden w-screen h-screen">
        <div
          className="flex justify-center object-contain"
          style={{
            top: '-5%',
            left: '-10%',
            width: 'calc(100vw + 20%)',
            height: 'calc(100vh + 20%)',
            zIndex: -1
          }}
        >
          <img className="h-full w-auto" src="homepageprofile.jpg" />
        </div>
      </div>
      {/* <img className="section-2-image absolute top-0 right-0 pointer-events-none" src="foreground-grenery-1.png" /> */}

      <Layout location={location} title={siteTitle}>
        <SEO title="Homepage" />
        <div className={`${contentWidth} section-1 relative`}>
          <div className="back-layer absolute top-0 w-full h-full">
            <div className="w-1/3 opacity-75 ml-48">
              <Plus />
            </div>
          </div>
          <div className="front-layer top-0 right-0 flex flex-col items-end w-full">
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

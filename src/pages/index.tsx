import { graphql, Link } from 'gatsby';
import React from 'react';
import ArrowRight from 'react-feather/dist/icons/arrow-right';
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
      <div className="relative h-full min-h-screen lg:-mt-20 mb-24 z-0">
        <div
          className="absolute opacity-75 h-full min-h-screen left-0 w-full"
          style={{ zIndex: -1 }}
        >
          <img
            alt="Self portrait"
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
      <div className="tracking-widest text-black text-xl font-display uppercase text-center mb-3">
        Latest post
      </div>

      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <div
            className="mb-4 mx-auto relative max-w-xl shadow-lg hover:shadow-xl transition-shadow duration-200 bg-white rounded overflow-hidden border border-gray-100"
            key={node.fields.slug}
          >
            <Link
              className="flex items-center justify-center flex-col md:flex-row text-black no-underline p-3 md:p-8 md:pr-0"
              to={`/blog${node.fields.slug}`}
            >
              <h3 className="font-black font-display text-4xl leading-tight mb-0 mt-0 flex-grow">
                {title}
              </h3>
              <div className="flex justify-center mt-6 w-full md:w-auto md:mt-0 md:ml-8 text-white transition-colors bg-black duration-200 hover:bg-gray-900 p-4 text-center rounded md:rounded-tr-none md:rounded-br-none">
                <ArrowRight size={32} />
              </div>
            </Link>
          </div>
        );
      })}

      <div className="tracking-widest text-black text-xl font-display uppercase text-center mb-3 mt-24">
        Projects
      </div>

      <div className="mb-4 mx-auto relative max-w-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 bg-white rounded overflow-hidden border border-gray-100">
        <Link
          className="flex items-center justify-center flex-col md:flex-row p-3 md:pr-0 text-black no-underline"
          to={`/projects/simple-metrics`}
        >
          <img
            alt="Simple Metrics Thumbnail"
            src="simple-metrics-thumbnail.jpg"
            className="m-2 mr-4"
            style={{ width: '10rem', height: '10rem' }}
          />
          <div className="font-black font-display text-4xl leading-tight mb-0 mt-0 flex-grow">
            Simple Metrics
            <div className="font-light font-display text-xl leading-none">
              for Raspberry Pi
            </div>
          </div>
          <div className="flex justify-center mt-6 w-full md:w-auto md:mt-0 md:ml-8 text-white transition-colors bg-black duration-200 hover:bg-gray-900 p-4 text-center rounded md:rounded-tr-none md:rounded-br-none">
            <ArrowRight size={32} />
          </div>
        </Link>
      </div>
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

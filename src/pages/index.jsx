import { graphql } from 'gatsby';
import React from 'react';
import Arrow from '../components/assets/Arrow';
import Plus from '../components/assets/plus';
import Ticker from '../components/assets/ticker';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';

const BlogIndex = ({ data, location }) => {
  const { site, allMarkdownRemark } = data;
  const siteTitle = site.siteMetadata.title;
  const posts = allMarkdownRemark.edges;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Homepage" />
      <img className="absolute top-0 opacity-75 -ml-24 -mt-24" style={{ zIndex: -1 }} src="homepageprofile.jpg" />
      <div className="section-1 relative h-screen mb-24">
        <div className="back-layer absolute top-0 w-full h-full">
          <div className="w-1/3 mt-24 ml-48">
            <Plus />
          </div>
        </div>
        <div className="front-layer absolute top-0 right-0 flex flex-col items-end mt-24 w-full">
          <div className="font-black font-display text-display-title uppercase leading-none">Designer</div>
          <div className="font-black font-display text-display-title uppercase leading-none">Developer</div>
          <Ticker textItems={['ReactJS', 'Accessibility', 'Javascript', 'Graphic Design', 'GatsbyJS', 'Object Oriented Programming', 'Functional Programming']} />
        </div>
      </div>
      <div className="section-divider flex items-center justify-center opacity-25 mt-24 mb-24 pt-24 pb-24"><div className="w-8"><Arrow /></div></div>
      <div className="section-2">
        <div className="text-section text-lg">
          <p>That small little animation as an application loads?</p>
          <p className="font-display uppercase font-black text-2xl ml-12">It matters.</p>
          <p>A well-written error response to a poorly formed email address?</p>
          <p className="font-display uppercase font-black text-2xl ml-12">That matters.</p>
          <p>
            Responsive UI that works on any screen, without sacrificing critical functionality?
          </p>
          <p className="font-display uppercase font-black text-2xl ml-12">Also matters.</p>
          <p className="text-center mt-24">because</p>
          <div className="flex flex-col items-center justify-center mx-auto font-black font-display text-display-title uppercase leading-none">
            <div>

              <div>Details</div>
              <div>matter.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-divider flex items-center justify-center opacity-25 mt-24 mb-24 pt-24 pb-24"><div className="w-8"><Arrow /></div></div>
      <div className="section-3">
        <div className="text-section text-right text-lg">
          <p>The small-town client with big-world dreams.</p>
          <p className="font-display uppercase font-black text-2xl ml-12">She matters.</p>
          <p>A user with color-blindness, using the product to run a business.</p>
          <p className="font-display uppercase font-black text-2xl ml-12">He matters.</p>
          <p>
            Developers, itching to build their bright new idea using your API.
          </p>
          <p className="font-display uppercase font-black text-2xl ml-12">They matter.</p>
          <p className="text-center mt-24">because</p>
          <div className="flex flex-col items-center justify-center text-left mx-auto font-black font-display text-display-title uppercase leading-none">
            <div>
              <div>People</div>
              <div>matter.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-divider flex items-center justify-center opacity-25 mt-24 mb-24 pt-24 pb-24"><div className="w-8"><Arrow /></div></div>
      <div className="section-divider text-center pb-24 text-2xl">All of this is only possible because...</div>
      <div className="section-4 absolute left-0 bg-black w-screen h-screen pb-48 pt-48">
        <div className="max-w-5xl flex flex-col text-left text-white mx-auto font-black font-display text-display-title uppercase leading-none">
          <div>
            <div>You</div>
            <div>matter.</div>
          </div>
        </div>
      </div>
      <div className="spaceholder w-screen h-screen" />
      <div className="section-4 absolute left-0 bg-black w-screen pb-48 pt-48">
        <div className="max-w-5xl flex flex-col text-left text-white mx-auto font-semibold font-display text-6xl leading-none">
          <div>
            <div>let's dive in.</div>
            <div className="rounded-lg bg-white text-black p-8 font-light flex mb-4">
              <div className="button-ticker-container overflow-hidden flex-1 relative">
                <Ticker textItems={['Send a message']} />
                <div className="button-ticker-cover absolute top-0 left-0 w-full h-full" style={{ boxShadow: '-150px 0 50px -50px #fff inset' }} />
              </div>
              <div className="w-8"><Arrow /></div>
            </div>
            <div className="flex -mx-2">
              <div className="px-2 w-1/2">
                <div className="rounded-lg bg-white text-black p-8 font-light flex">
                  <div className="button-ticker-container overflow-hidden flex-1 relative">
                    <Ticker textItems={['LinkedIn']} />
                    <div className="button-ticker-cover absolute top-0 left-0 w-full h-full" style={{ boxShadow: '-150px 0 50px -50px #fff inset' }} />
                  </div>
                  <div className="w-8"><Arrow /></div>
                </div>
              </div>
              <div className="px-2 w-1/2">
                <div className="rounded-lg bg-white text-black p-8 font-light flex">
                  <div className="button-ticker-container overflow-hidden flex-1 relative">
                    <Ticker textItems={['GitHub']} />
                    <div className="button-ticker-cover absolute top-0 left-0 w-full h-full" style={{ boxShadow: '-150px 0 50px -50px #fff inset' }} />
                  </div>
                  <div className="w-8"><Arrow /></div>
                </div>
              </div>
            </div>
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

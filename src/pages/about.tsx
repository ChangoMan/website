import React from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';

const AboutIndex = () => (
  <Layout>
    <SEO title="About" />
    <div className="max-w-2xl my-0 mx-auto">
      <div className="text-center mb-8">
        <h2 className="font-black font-display text-xl inline-block border-solid border-b-4 border-gray-400 mb-5">
          ABOUT
        </h2>
      </div>

      <div
        className="sm:float-right mb-5 px-8 mx-auto sm:ml-5 overflow-hidden relative"
        style={{ maxWidth: '50%', boxShadow: '0 -1px 0 rgba(0,0,0,0.5) inset' }}
      >
        <img
          className="relative"
          style={{ zIndex: -1, imageRendering: 'crisp-edges' }}
          src="about-profile-photo.jpg"
        />
      </div>
      <p className="text-3xl font-display tracking-tight mb-0">
        Hey there, I'm Anson.
      </p>
      <p className="text-xl mb-5">Frontend Engineer. Designer.</p>
      <p className="mb-4">
        I make beautiful, enjoyable online experiences. Previous back-end
        experience informs design and architectural decisions I make every day,
        helping drive reusable, fast user interfaces. I currently specialize in
        front-end engineering, using technologies like React.js, Next.js, and
        Gatsby.js to build powerful applications used by thousands.
      </p>
      <p>
        Some of my greatest joy comes from building excellent UIs that deftly
        balance positive emotional experiences and stakeholder-optimized
        usability. A design might be pretty, but that point is moot if no one
        understands how to use it.
      </p>
      <p>
        Connect with me on: <a href="#">LinkedIn</a>, <a href="#">Twitter</a>,
        and <a href="#">Instagram</a>.
      </p>
    </div>
  </Layout>
);

export default AboutIndex;

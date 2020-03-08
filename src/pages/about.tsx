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
        className="float-right mb-5 px-8 ml-5 overflow-hidden relative"
        style={{ maxWidth: '50%', boxShadow: '0 -1px 0 rgba(0,0,0,0.5) inset' }}
      >
        <img
          className="relative"
          style={{ zIndex: -1, imageRendering: 'crisp-edges' }}
          src="about-profile-photo.jpg"
        />
      </div>
      <p className="text-3xl font-display tracking-tight">
        Hey there, I'm Anson.
      </p>
      <p className="text-xl mb-5">Frontend Developer. Leader. Designer.</p>
      <p className="mb-4">
        Avid coder focused on creating elegant solutions for difficult technical
        problems. Consistently deliver high-quality implementations that are
        easy to use. Passionate about maximizing performance, hardened security,
        and using the newest technologies available. Exceeds requirements on
        time and on schedule while effectively working within a team.
        Hard-working, curious, and fast learning.
      </p>
      <p>
        Connect with me on: <a href="#">LinkedIn</a>, <a href="#">Twitter</a>,
        and <a href="#">Instagram</a>.
      </p>
    </div>
  </Layout>
);

export default AboutIndex;

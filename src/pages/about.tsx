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
        style={{ maxWidth: '50%', boxShadow: '0 -1px 0 rgba(0,0,0,0.3) inset' }}
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
      <p className="text-xl mb-5">Developer by trade, designer by passion.</p>
      <p className="mb-4">
        Quisque a leo ipsum. Donec elit lorem, mattis id congue vitae, bibendum
        id eros. Duis volutpat rutrum lectus id luctus. In hac habitasse platea
        dictumst. Aenean interdum massa varius dui tempus, sed ornare velit
        porta. Vivamus et finibus mauris. Nam porta augue a ipsum imperdiet
        fringilla. Aenean sit amet sodales augue. Phasellus sit amet ipsum
        convallis, finibus turpis a, mollis leo. Quisque nec massa velit.
        Vestibulum fermentum metus scelerisque nisl egestas convallis. Nulla
        facilisi. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Pellentesque elit orci, elementum ut
        ullamcorper sed, accumsan quis tellus.
      </p>
      <p>
        Connect with me on: <a href="#">LinkedIn</a>, <a href="#">Twitter</a>,
        and <a href="#">Instagram</a>.
      </p>
    </div>
  </Layout>
);

export default AboutIndex;

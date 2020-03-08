/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/about-profile-photo.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, cropFocus: CENTER) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `);

  const { author, social } = data.site.siteMetadata;
  return (
    <div className="flex mb-10 px-6">
      <div>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author}
          className="border-solid border-b border-black"
        />
      </div>
      <p className="ml-6">
        Written by <strong>{author}</strong>, a frontend engineer building
        useful, beautiful interfaces in Colorado.
      </p>
    </div>
  );
};

export default Bio;

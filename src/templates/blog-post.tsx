import { graphql, Link } from 'gatsby';
import React from 'react';
import Bio from '../components/bio';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';

interface Props {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        description: string;
        date: string;
      };
      excerpt: string;
      html: string;
    };
  };
  pageContext: {
    previous: {
      fields: {
        slug: string;
      };
      frontmatter: {
        title: string;
      };
    };
    next: {
      fields: {
        slug: string;
      };
      frontmatter: {
        title: string;
      };
    };
  };
}

const BlogPostTemplate = ({ data, pageContext }: Props) => {
  const post = data.markdownRemark;
  const { previous, next } = pageContext;

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-black font-display text-xl inline-block border-solid border-b-4 border-gray-400 mb-5">
            <Link className="no-underline text-black" to="/blog">
              BLOG
            </Link>
          </h2>
        </div>
        <h1 className="leading-none mb-0">{post.frontmatter.title}</h1>
        <small className="opacity-50">
          <em>{post.frontmatter.date}</em>
        </small>
        <div className="mt-6" dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr className="mt-8 mb-10 max-w-none" />
        <Bio />

        <ul className="flex flex-wrap justify-between p-0 list-none">
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;

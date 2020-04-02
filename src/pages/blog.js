import React from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../components/bio';
import SEO from '../components/seo';

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <>
      <SEO title="All posts" />
      <Bio />
      <div className="grid gap-16 border-t-2 pt-5 mt-5 border-gray-700 lg:grid-cols-2 lg:col-gap-5 lg:row-gap-12">
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <article key={node.fields.slug}>
              <p className="text-sm leading-5 text-gray-400">
                <time dateTime={new Date(node.frontmatter.date).toISOString()}>
                  {node.frontmatter.date}
                </time>
              </p>
              <Link to={node.fields.slug} className="block">
                <h3 className="mt-2 text-xl leading-7 tracking-wider font-semibold text-gray-50">
                  {title}
                </h3>
                <p
                  className="mt-3 text-base leading-6 text-gray-400"
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt
                  }}
                />
              </Link>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  query {
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

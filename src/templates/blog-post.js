import React from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../components/bio';
import SEO from '../components/seo';

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const { previous, next } = pageContext;

  return (
    <>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header className="blog-post">
          <h1 className="mt-4 mb-0">{post.frontmatter.title}</h1>
          <small className="block mb-4">{post.frontmatter.date}</small>
        </header>
        <section
          className="blog-post"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <hr className="my-6" />
        <footer>
          <Bio />
        </footer>
      </article>

      <nav className="mt-6">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0
          }}
        >
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
      </nav>
    </>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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

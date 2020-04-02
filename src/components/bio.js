import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
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
    <div className="flex items-center">
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        className="mr-4 mb-0 rounded-full"
        style={{ minWidth: 50 }}
        imgStyle={{ borderRadius: `50%` }}
      />
      <div>
        <p>Personal blog by yours truly.</p>
        <ul className="flex items-center text-xs text-emphasis">
          <li>
            <a href="#">twitter</a>
          </li>
          <li className="dot" />
          <li>
            <a href="#">github</a>
          </li>
          <li className="dot" />
          <li>
            <a href="#">stack overflow</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Bio;

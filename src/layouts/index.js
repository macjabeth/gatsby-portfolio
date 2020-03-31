import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Transition from '../components/transition';

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="flex items-center justify-center min-h-screen p-10">
      <div className="max-w-screen-md">
        <main className="px-4 py-5 sm:p-6">
          <Transition location={location}>{children}</Transition>
        </main>
        <hr className="w-1/6 mx-auto opacity-25" />
        <footer className="px-4 py-4 sm:px-6 text-center">
          <Link to="/" className="inline-flex rounded-md shadow-sm m-1">
            <button
              type="button"
              className="inline-flex items-center px-8 py-2 border border-cool-gray-700 text-xs leading-6 tracking-widest font-medium rounded-md text-white bg-transparent hover:text-pink-400 hover:border-pink-400 focus:outline-none focus:border-purple-300 focus:shadow-outline-purple active:text-gray-50 transition ease-in-out duration-200"
            >
              Home
            </button>
          </Link>
          <Link to="/skills" className="inline-flex rounded-md shadow-sm m-1">
            <button
              type="button"
              className="inline-flex items-center px-8 py-2 border border-cool-gray-700 text-xs leading-6 tracking-widest font-medium rounded-md text-white bg-transparent hover:text-pink-400 hover:border-pink-400 focus:outline-none focus:border-purple-300 focus:shadow-outline-purple active:text-gray-50 transition ease-in-out duration-200"
            >
              Skills
            </button>
          </Link>
          <Link to="/projects" className="inline-flex rounded-md shadow-sm m-1">
            <button
              type="button"
              className="inline-flex items-center px-8 py-2 border border-cool-gray-700 text-xs leading-6 tracking-widest font-medium rounded-md text-white bg-transparent hover:text-pink-400 hover:border-pink-400 focus:outline-none focus:border-purple-300 focus:shadow-outline-purple active:text-gray-50 transition ease-in-out duration-200"
            >
              Projects
            </button>
          </Link>
          <Link to="/blog" className="inline-flex rounded-md shadow-sm m-1">
            <button
              type="button"
              className="inline-flex items-center px-8 py-2 border border-cool-gray-700 text-xs leading-6 tracking-widest font-medium rounded-md text-white bg-transparent hover:text-pink-400 hover:border-pink-400 focus:outline-none focus:border-purple-300 focus:shadow-outline-purple active:text-gray-50 transition ease-in-out duration-200"
            >
              Blog
            </button>
          </Link>
        </footer>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

import React from 'react';
import { Link } from 'gatsby';

const Navigation = () => {
  return (
    <>
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
    </>
  );
};

export default Navigation;

import React from 'react';
import PropTypes from 'prop-types';
import Transition from '../components/transition';
import Navigation from '../components/navigation';

const Layout = ({ children, location }) => {
  return (
    <div className="flex items-center justify-center min-h-screen p-10">
      <div className="max-w-screen-md">
        <main className="px-4 py-5 sm:p-6">
          <Transition location={location}>{children}</Transition>
        </main>
        <hr className="w-1/6 mx-auto opacity-25" />
        <footer className="px-4 py-4 sm:px-6 text-center">
          <Navigation />
        </footer>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

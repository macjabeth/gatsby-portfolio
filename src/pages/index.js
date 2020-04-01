import React from 'react';

import ProfileImg from '../components/profile-img';
import SEO from '../components/seo';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <div className="flex justify-center py-5">
      <ProfileImg className="rounded-md h-36 w-36" />
    </div>
    <header className="w-full text-3xl text-center p-4">
      <h1>Jonathan Picazo</h1>
    </header>
    <ul className="my-2 leading-relaxed max-w-sm mx-auto list-circle">
      <li className="my-2">
        <em>Full Stack Developer</em> with a track record of creating effective
        programs and projects quickly, without sacrificing quality or client
        needs.
      </li>{' '}
      <li className="my-2">
        <em>Lifelong learner</em> committed to staying current on new
        technologies.
      </li>{' '}
      <li className="my-2">
        <em>Team player</em> willing to take the lead on executing tasks and
        experimenting with new ideas.
      </li>
    </ul>
  </>
);

export default IndexPage;

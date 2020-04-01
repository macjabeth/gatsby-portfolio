import React from 'react';
import SEO from '../components/seo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import StrongerFasterImg from '../components/strongerfaster-img';
import SwaapImg from '../components/swaap-img';
import ShowbunnyImg from '../components/showbunny-project';

const ProjectsPage = () => {
  return (
    <>
      <SEO title="Projects" />
      <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl leading-9 font-extrabold sm:text-4xl sm:leading-10">
              Projects
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl leading-7 sm:mt-4">
              What are skills without the ability to apply them?
            </p>
          </div>
          <div
            className="mt-12 grid gap-5 items-start"
            style={{
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))'
            }}
          >
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-primary">
              <div className="flex-shrink-0">
                <StrongerFasterImg className="h-48 w-full object-cover" />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1 text-center">
                  <div>
                    <div class="inline-block">
                      <span class="inline-flex items-center px-3 py-0.5 rounded-lg text-xs font-medium leading-5 bg-transparent border border-pink-400 text-pink-300 mr-2">
                        React
                      </span>
                      <span class="inline-flex items-center px-3 py-0.5 rounded-lg text-xs font-medium leading-5 bg-transparent border border-pink-400 text-pink-300 mr-2">
                        Redux
                      </span>
                      <span class="inline-flex items-center px-3 py-0.5 rounded-lg text-xs font-medium leading-5 bg-transparent border border-pink-400 text-pink-300">
                        Express
                      </span>
                    </div>
                    <hr className="mt-5 opacity-25" />
                    <div className="block mt-3">
                      <h3 className="mt-2 text-xl tracking-widest leading-7 font-semibold">
                        StrongerFaster
                      </h3>
                      <p className="mt-3 text-base leading-6">
                        A web and mobile app to assist training professionals in
                        building workout routines.
                      </p>
                    </div>
                    <div className="mt-3 text-sm leading-5 font-medium flex justify-center">
                      <a
                        href="http://strongerfaster.fit/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emphasis m-2"
                      >
                        <FontAwesomeIcon icon={faHome} class="h-6 w-6" />
                      </a>
                      <a
                        href="https://github.com/Lambda-School-Labs?q=workout-builder"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emphasis m-2"
                      >
                        <FontAwesomeIcon icon={faGithub} class="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-primary">
              <div className="flex-shrink-0">
                <SwaapImg className="h-48 w-full object-cover" />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1 text-center">
                  <div class="inline-block">
                    <span class="inline-flex items-center px-3 py-0.5 rounded-lg text-xs font-medium leading-5 bg-transparent border border-pink-400 text-pink-300 mr-2">
                      React
                    </span>
                    <span class="inline-flex items-center px-3 py-0.5 rounded-lg text-xs font-medium leading-5 bg-transparent border border-pink-400 text-pink-300 mr-2">
                      Apollo
                    </span>
                    <span class="inline-flex items-center px-3 py-0.5 rounded-lg text-xs font-medium leading-5 bg-transparent border border-pink-400 text-pink-300">
                      GraphQL
                    </span>
                  </div>
                  <hr className="mt-5 opacity-25" />
                  <div className="block mt-3">
                    <h3 className="mt-2 text-xl tracking-widest leading-7 font-semibold">
                      Swaap
                    </h3>
                    <p className="mt-3 text-base leading-6">
                      A web and mobile app to facilitate connections at events.
                    </p>
                  </div>
                  <div className="mt-3 text-sm leading-5 font-medium flex justify-center">
                    <a
                      href="http://swaap.co/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emphasis m-2"
                    >
                      <FontAwesomeIcon icon={faHome} class="h-6 w-6" />
                    </a>
                    <a
                      href="https://github.com/Lambda-School-Labs?q=conference-contacts"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emphasis m-2"
                    >
                      <FontAwesomeIcon icon={faGithub} class="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-primary">
              <div className="flex-shrink-0">
                <ShowbunnyImg className="h-48 w-full object-cover" />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1 text-center">
                  <div class="inline-block">
                    <span class="inline-flex items-center px-3 py-0.5 rounded-lg text-xs font-medium leading-5 bg-transparent border border-pink-400 text-pink-300 mr-2">
                      Vanilla
                    </span>
                    <span class="inline-flex items-center px-3 py-0.5 rounded-lg text-xs font-medium leading-5 bg-transparent border border-pink-400 text-pink-300 mr-2">
                      JS
                    </span>
                    <span class="inline-flex items-center px-3 py-0.5 rounded-lg text-xs font-medium leading-5 bg-transparent border border-pink-400 text-pink-300">
                      CSS
                    </span>
                  </div>
                  <hr className="mt-5 opacity-25" />
                  <div className="block mt-3">
                    <h3 className="mt-2 text-xl tracking-widest leading-7 font-semibold">
                      Showbunny
                    </h3>
                    <p className="mt-3 text-base leading-6">
                      A web and mobile app that allows searching and viewing
                      information on movies and TV shows.
                    </p>
                  </div>
                  <div className="mt-3 text-sm leading-5 font-medium flex justify-center">
                    <a
                      href="https://showbunny.macjabeth.now.sh/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emphasis m-2"
                    >
                      <FontAwesomeIcon icon={faHome} class="h-6 w-6" />
                    </a>
                    <a
                      href="https://github.com/macjabeth/showbunny"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emphasis m-2"
                    >
                      <FontAwesomeIcon icon={faGithub} class="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;

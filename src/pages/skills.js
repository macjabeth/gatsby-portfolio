import React from 'react';
import SEO from '../components/seo';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJs,
  faHtml5,
  faCss3,
  faReact,
  faNodeJs,
  faPython,
  faAws,
  faVuejs,
  faDocker,
  faGithubAlt
} from '@fortawesome/free-brands-svg-icons';

const skills = [
  { name: 'JavaScript', icon: faJs },
  { name: 'TypeScript', icon: 'TS' },
  { name: 'HTML', icon: faHtml5 },
  { name: 'CSS', icon: faCss3 },
  { name: 'React', icon: faReact },
  { name: 'Node.js', icon: faNodeJs },
  { name: 'Express', icon: 'XP' },
  { name: 'Python', icon: faPython },
  { name: 'GraphQL', icon: 'GQL' },
  { name: 'SQL', icon: 'SQL' },
  { name: 'AWS', icon: faAws },
  { name: 'Vue', icon: faVuejs },
  { name: 'Docker', icon: faDocker },
  { name: 'Gatsby', icon: 'GB' },
  { name: 'Git', icon: faGithubAlt },
  { name: 'Lua', icon: 'Lua' }
];

const SkillsPage = () => {
  return (
    <>
      <SEO title="Skills" />
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-base text-indigo-400 leading-6 font-semibold tracking-wide uppercase">
            Skills
          </p>
          <h3 className="mt-4 text-3xl leading-8 font-extrabold sm:text-4xl sm:leading-10">
            They're growing
          </h3>
          <p className="mt-4 max-w-2xl text-lg leading-7 lg:mx-auto">
            The industry evolves quickly, so I work constantly to keep my skills
            current on the latest technologies.
          </p>
        </div>

        <div className="mt-10 mb-6">
          <ul className="grid grid-cols-2 col-gap-8 md:row-gap-10">
            {skills.map((skill, idx) => (
              <li
                className={classNames('', {
                  'mt-10 md:mt-0': idx > 1,
                  'sm:js-end': idx % 2 === 0
                })}
              >
                <div className="flex flex-col items-center sm:flex-row">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      {typeof skill.icon === 'string' ? (
                        <div className="font-bold text-xs flex justify-center items-center bg-white text-indigo-500 p-1">
                          {skill.icon}
                        </div>
                      ) : (
                        <FontAwesomeIcon icon={skill.icon} class="h-6 w-6" />
                      )}
                    </div>
                  </div>
                  <div
                    className={classNames('flex items-center mt-4 sm:mt-0', {
                      'sm:ml-4': idx % 2 !== 0,
                      'sm:mr-4 sm:order-first': idx % 2 === 0
                    })}
                  >
                    <h5 className="text-lg leading-6 font-medium tracking-widest">
                      {skill.name}
                    </h5>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SkillsPage;

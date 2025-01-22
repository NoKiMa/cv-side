'use client';

import {useLocale} from './hooks/useLocale';
import {Header} from './components/Header';
import {Section} from './components/Section';
import {SideMenu} from './components/SideMenu';
import {useCallback} from 'react';
import {toast} from 'sonner';
import Image from 'next/image';
import {ExperienceItem} from './types';
import {
  LinkedInLogoIcon,
  MobileIcon,
  EnvelopeClosedIcon,
  SewingPinFilledIcon,
  GlobeIcon
} from '@radix-ui/react-icons';

const sections = [
  {id: 'summary', title: 'Professional Summary'},
  {id: 'skills', title: 'Skills'},
  {id: 'experience', title: 'Experience'},
  {id: 'education', title: 'Education'},
  {id: 'projects', title: 'Projects'},
];

export default function Home() {
  const {language, dir, content, changeLanguage} = useLocale();

  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText(content.email);
    toast.success('Email copied to clipboard!');
  }, [content.email]);

  if (!content) {
    return null;
  }

  return (
    <div dir={dir} className="bg-[#FDF5E6] min-h-screen">
      <Header language={language} onLanguageChange={changeLanguage} />
      <SideMenu sections={sections} dir={dir} />

      <main className="max-w-7xl mx-auto px-4 pt-24">
        <div className="mb-12 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-md">
          <h1 className="text-4xl font-bold mb-2 text-[#8B4513]">
            {content.name}
          </h1>
          <p className="text-xl text-[#4A90E2] mb-4">{content.role}</p>
          <div className="space-y-2 text-gray-600">
            <div className="flex items-center gap-2 align-center">
              <MobileIcon className='text-[#8B4513]'/>
              <p>{content.phone}</p>
            </div>
            <div className="flex items-center gap-2 align-center">
              <EnvelopeClosedIcon className='text-[#8B4513]'/>
              <p
                className="cursor-pointer hover:text-[#4A90E2] transition-colors"
                onClick={copyEmail}>
                {content.email}
              </p>
            </div>
            <div className="flex items-center gap-2 align-center">
            <SewingPinFilledIcon className='text-[#8B4513]'/>
              <p>{content.residence}</p>
            </div>
            <div className="flex items-center gap-2 align-center">
              <GlobeIcon className='text-[#8B4513]'/>
            <p>{content.languages}</p>
            </div>
            
            <div className="flex items-center gap-2 align-center">
              <LinkedInLogoIcon color="#4A90E2" className="align-middle" />
              <a
                href="https://www.linkedin.com/in/kirillnovak/"
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer hover:underline hover:text-[#4A90E2] transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <Section
          id="summary"
          title="PROFESSIONAL SUMMARY"
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-md mb-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <Image
              src="/profile.png"
              alt="Profile Image"
              width={100}
              height={100}
              className="rounded-full w-40 h-40 sm:w-48 sm:h-48 sm:max-w-[25%] flex-shrink-0"
            />
            <p className="text-gray-600 leading-relaxed text-center sm:text-left my-8 sm:max-w-[75%]">
              {content.summary}
            </p>
          </div>
        </Section>

        {content.skills && (
          <Section
            id="skills"
            title={content.skills.title}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-md mb-6">
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {content.skills.items.map((skill: string, index: number) => (
                <li
                  key={index}
                  className="hover:text-[#4A90E2] transition-colors">
                  {skill}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {content.experience && (
          <Section
            id="experience"
            title={content.experience.title}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-md mb-6">
            <div className="space-y-8">
              {content.experience.items.map(
                (exp: ExperienceItem, index: number) => (
                  <div
                    key={index}
                    className="border-l-4 border-[#4A90E2] pl-4 hover:border-[#8B4513] transition-colors">
                    <div className="text-sm text-gray-500">{exp.period}</div>
                    <h3 className="text-xl font-semibold text-[#8B4513]">
                      {exp.role}
                    </h3>
                    <div className="text-[#4A90E2] mb-2">
                      {exp.link ? (
                        <a
                          className="hover:text-[#8B4513] hover:underline transition-colors"
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer">
                          {exp.company}
                        </a>
                      ) : (
                        <span className="hover:underline">{exp.company}</span>
                      )}{' '}
                      • {exp.location}
                    </div>
                    <p className="text-gray-600 mb-2">{exp.description}</p>
                    <div className="text-sm text-gray-500">
                      Technologies: {exp.technologies}
                    </div>
                    {exp.additionalLinks && (
                      <div className="text-sm text-gray-500 mt-2">
                        <p className="font-semibold">Useful links:</p>
                        {exp.additionalLinks.map(
                          (
                            link: {name: string; link: string},
                            index: number,
                          ) => (
                            <a
                              key={index}
                              href={link.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-[#8B4513] text-[#4A90E2] hover:underline transition-colors mr-2">
                              {link.name}
                            </a>
                          ),
                        )}
                      </div>
                    )}
                  </div>
                ),
              )}
            </div>
          </Section>
        )}

        {content.education && (
          <Section
            id="education"
            title={content.education.title}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-md mb-6">
            <div className="space-y-6">
              {content.education.items.map((edu, index) => (
                <div
                  key={index}
                  className="hover:text-[#4A90E2] transition-colors">
                  <div className="text-sm text-gray-500">{edu.period}</div>
                  <h3 className="text-lg font-semibold text-[#8B4513]">
                    {edu.degree}
                  </h3>
                  <div className="text-gray-600">{edu.institution}</div>
                </div>
              ))}
            </div>
          </Section>
        )}

        {content.projects && (
          <Section
            id="projects"
            title={content.projects.title}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-md mb-12">
            <div className="space-y-6">
              {content.projects.items.map((project, index) => (
                <div
                  key={index}
                  className="hover:text-[#4A90E2] transition-colors">
                  <div className="text-sm text-gray-500">{project.period}</div>
                  <h3 className="text-lg font-semibold text-[#8B4513]">
                    {project.name}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              ))}
            </div>
          </Section>
        )}
      </main>
    </div>
  );
}

import { LocaleContent } from '../types';

export const en: LocaleContent = {
  name: 'Kirill Novak',
  role: 'FULLSTACK JS DEVELOPER (Frontend 70% / Backend 30%)',
  phone: '053-2410720',
  email: 'novak.kirill@gmail.com',
  residence: 'Central District (Merkaz)',
  languages: 'Hebrew, English (Fluent), Russian, Ukrainian',
  summary: 'Experienced Fullstack Developer with over 7 years of expertise in TypeScript, JavaScript, React, Node.js and React Native. Proven track record in building scalable web applications and leading frontend projects. Seeking a challenging role in a dynamic organization to contribute my skills and grow professionally.',
  skills: {
    title: 'SKILLS',
    items: [
      'Targeting roles: Frontend (React) with elements of Backend (Node.js) and/or Mobile (React-Native)',
      'Programming languages: TypeScript, JavaScript (including Flow), Java (familiar), C# (familiar), Rust (familiar)',
      'Web/Mobile: React, HTML5, CSS3, SCSS, Bootstrap, React Native, RXjs, Next.js, Angular (familiar), Vue (familiar)',
      'Back-end: Node.js, Express',
      'Technologies: Redux, Zustand, Git, WebPack, Vite, Single-SPA, Jest, Cypress, MUI, Styled-components',
      'Web-services: REST, GraphQL, gRPC (familiar)',
      'Environments – IDE/tools: WebStorm, VScode, GitHub, GitLab',
      'Databases: MySQL, MongoDB'
    ]
  },
  experience: {
    title: 'EXPERIENCE',
    items: [
      {
        period: '2021-present',
        role: 'Fullstack Developer (React/Node.js)',
        company: 'VeePeeTech',
        location: 'Tel-Aviv, Israel',
        shortDescription: 'IT Solutions subsidiary for Veepee',
        description: 'Main project: Gipsy - Back office management tool for internal users/customers to manage sales in the main application, a web application for selling cruises, hotel rooms, and related travel products. Responsibilities included refactoring, adding new features, developing new sections, implementing micro frontends/services, and maintaining legacy code.',
        technologies: 'TypeScript, JavaScript, Flow, React, Node.js, GitLab, Scrum, REST API, Redux, Zustand, Single-SPA',
        link: 'https://careers.veepee.com/veepee-tech/'
      },
      {
        period: '2020-2021',
        role: 'Fullstack / Mobile Developer (React / React Native / Node.js)',
        company: 'Inetex LTD',
        location: 'Rehovot, Israel',
        shortDescription: 'Project company',
        description: 'Main projects: itseems, tellme - Social projects combating domestic violence and providing psychological assistance during the pandemic. Web applications were created for the Institute of Cognitive Modeling (Kiev, Ukraine).',
        technologies: 'JavaScript, TypeScript, React, React Native, Node.js, GitHub, Scrum, REST API',
        link: 'https://inetex.co.il',
        additionalLinks: [{
          name: 'itseems',
          link: 'https://itseems.com.ua/'
        }, {
          name: 'tellme',
          link: 'https://tellme.com.ua'
        }],
      },
      {
        period: '2018-2020',
        role: 'Frontend / Mobile Developer (React / React Native)',
        company: 'Timefreek',
        location: 'Nes Ziona, Israel',
        shortDescription: 'Startup',
        description: 'Created iOS and Android apps for efficient personal time management, including features like profiles, contact search, calendars, groups, and notifications. Multilingual support. Involved in all project stages.',
        technologies: 'JavaScript, React Native, React, GitHub, Scrum, GraphQL, Redux, AsyncStorage',
        link: 'https://www.linkedin.com/company/timefreek-app/about/'
      },
      {
        period: '2016-2018',
        role: 'Android Developer',
        company: 'Elpisor LTD',
        location: 'Rehovot, Israel',
        shortDescription: 'Project company',
        description: 'Main project: Mishpahug app for new immigrants and lone soldiers. Created user and admin apps with features like profile creation, event management, and notifications.',
        technologies: 'Java, OkHTTP, Dagger2, GSON, GitHub, Scrum, MVP.',
        link: 'https://elpisor.com/index.html'
      }
    ]
  },
  education: {
    title: 'EDUCATION',
    items: [
      {
        period: '2010-2014',
        degree: 'Computer Science',
        institution: 'Kiev Polytechnic University Computer science, Department of Informatics, Kiev, Ukraine'
      }
    ]
  },
  projects: {
    title: 'PROJECTS AND ADDITIONAL EDUCATION',
    items: [
      {
        period: '2016-2017',
        name: 'Special program for adaptation of software developer',
        description: 'According to Israel IT technologies by Ministry of Absorption - Tel-Ran Computing Solutions'
      }
    ]
  }
};
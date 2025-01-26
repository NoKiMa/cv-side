import { LocaleContent } from '../types';

export const ru: LocaleContent = {
  name: 'Кирилл Новак',
  role: 'FULLSTACK JS Developer (Frontend 70% / Backend 30%)',
  phone: '053-2410720',
  email: 'novak.kirill@gmail.com',
  residence: 'Центральный округ (Мерказ)',
  languages: 'Иврит, английский (свободно), русский, украинский',
  summary: 'Опытный fullstack-разработчик с более чем 7-летним опытом работы в TypeScript, JavaScript, React, Node.js и React Native. Общирный опыт создания масштабируемых веб-приложений и управления frontend-проектами. Ищу интересную роль в динамичной организации, где смогу применить свои навыки и профессионально развиваться.',
  skills: {
    title: 'НАВЫКИ',
    items: [
      'Целевые роли: Frontend (React) с элементами Backend (Node.js) и/или Mobile (React-Native)',
      'Языки программирования: TypeScript, JavaScript (включая Flow), Java (знаком), C# (знаком), Rust (знаком)',
      'Веб/Мобильная разработка: React, HTML5, CSS3, SCSS, Bootstrap, React Native, RXjs, Next.js, Angular (знаком), Vue (знаком)',
      'Backend: Node.js, Express',
      'Технологии: Redux, Zustand, Git, WebPack, Vite, Single-SPA, Jest, Cypress, MUI, Styled-components',
      'Веб-сервисы: REST, GraphQL, gRPC (знаком)',
      'Среды разработки: WebStorm, VScode, GitHub, GitLab',
      'Базы данных: MySQL, MongoDB'
    ]
  },
  experience: {
    title: 'ОПЫТ РАБОТЫ',
    items: [
      {
        period: '2021-настоящее время',
        role: 'Fullstack-разработчик (React/Node.js)',
        company: 'VeePeeTech',
        location: 'Тель-Авив, Израиль',
        shortDescription: 'IT-решения дочерней компании Veepee',
        description: 'Основной проект: Gipsy - инструмент управленияback-office для внутренних пользователей/клиентов по управлению продажами в основном приложении, веб-приложении для продажи круизов, номеров отелей и связанных туристических продуктов. Обязанности включали рефакторинг, добавление новых функций, разработку новых разделов, внедрение микрофронтендов/сервисов и поддержку устаревшего кода.',
        technologies: 'TypeScript, JavaScript, Flow, React, Node.js, GitLab, Scrum, REST API, Redux, Zustand, Single-SPA',
        link: 'https://careers.veepee.com/veepee-tech/'
      },
      {
        period: '2020-2021',
        role: 'Fullstack / Мобильный разработчик (React / React Native / Node.js)',
        company: 'Inetex LTD',
        location: 'Реховот, Израиль',
        shortDescription: 'Проектная компания',
        description: 'Основные проекты: itseems, tellme - социальные проекты по борьбе с домашним насилием и оказанию психологической помощи во время пандемии. Веб-приложения были созданы для Института когнитивного моделирования (Киев, Украина).',
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
        role: 'Frontend / Мобильный разработчик (React / React Native)',
        company: 'Timefreek',
        location: 'Нес-Циона, Израиль',
        shortDescription: 'Стартап',
        description: 'Создание iOS и Android приложений для эффективного управления личным временем, включая функции профилей, поиска контактов, календарей, групп и уведомлений. Многоязычная поддержка. Участие во всех этапах проекта.',
        technologies: 'JavaScript, React Native, React, GitHub, Scrum, GraphQL, Redux, AsyncStorage',
        link: 'https://www.linkedin.com/company/timefreek-app/about/'
      },
      {
        period: '2016-2018',
        role: 'Android-разработчик',
        company: 'Elpisor LTD',
        location: 'Реховот, Израиль',
        shortDescription: 'Проектная компания',
        description: 'Основной проект: Приложение Mishpahug для новых иммигрантов и одиноких солдат. Создание пользовательских и административных приложений с функциями создания профиля, управления событиями и уведомлениями.',
        technologies: 'Java, OkHTTP, Dagger2, GSON, GitHub, Scrum, MVP.',
        link: 'https://elpisor.com/index.html'
      }
    ]
  },
  education: {
    title: 'ОБРАЗОВАНИЕ',
    items: [
      {
        period: '2010-2014',
        degree: 'Компьютерные науки',
        institution: 'Киевский политехнический университет, Кафедра информатики, Киев, Украина'
      }
    ]
  },
  projects: {
    title: 'ПРОЕКТЫ И ДОПОЛНИТЕЛЬНОЕ ОБРАЗОВАНИЕ',
    items: [
      {
        period: '2016-2017',
        name: 'Специальная программа адаптации разработчика',
        description: 'По технологиям IT Израиля, Министерство абсорбции - Вычислительные решения Tel-Ran'
      }
    ]
  }
};
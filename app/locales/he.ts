import { LocaleContent } from '../types';

export const he: LocaleContent = {
  name: 'קיריל נובק',
  role: 'מפתח FULLSTACK JS (Frontend 70% / Backend 30%)',
  phone: '053-2410720',
  email: 'novak.kirill@gmail.com',
  residence: 'אזור המרכז (מרכז)',
  languages: 'עברית, אנגלית (רמת שפת אם), רוסית, אוקראינית',
  summary: 'מפתח Fullstack מנוסה עם יותר מ-7 שנות ניסיון ב- TypeScript, JavaScript, React, Node.js ו-React Native. ניסיון מוכח בבניית יישומים אינטרנטיים סקלאביליים ובהובלת פרויקטים בחזית. מחפש תפקיד מאתגר בארגון דינמי שבו אוכל לתרום מהכישורים שלי ולצמוח מקצועית.',
  skills: {
    title: 'כישורים',
    items: [
      'תפקידי מטרה: Frontend (React) עם רכיבים של Backend (Node.js) ו/או Mobile (React-Native)',
      'שפות תכנות: TypeScript, JavaScript (כולל Flow), Java (מכיר), C# (מכיר), Rust (מכיר)',
      'פיתוח ווב/מובייל: React, HTML5, CSS3, SCSS, Bootstrap, React Native, RXjs, Next.js, Angular (מכיר), Vue (מכיר)',
      'Backend: Node.js, Express',
      'טכנולוגיות: Redux, Zustand, Git, WebPack, Vite, Single-SPA, Jest, Cypress, MUI, Styled-components',
      'שירותי אינטרנט: REST, GraphQL, gRPC (מכיר)',
      'סביבות פיתוח: WebStorm, VScode, GitHub, GitLab',
      'מסדי נתונים: MySQL, MongoDB'
    ]
  },
  experience: {
    title: 'ניסיון תעסוקתי',
    items: [
      {
        period: '2021-הווה',
        role: 'מפתח Fullstack (React/Node.js)',
        company: 'VeePeeTech',
        location: 'תל אביב, ישראל',
        shortDescription: 'חברת פתרונות IT של Veepee',
        description: 'פרויקט עיקרי: Gipsy - כלי ניהול משרדי אחורי למשתמשים פנימיים/לקוחות לניהול מכירות באפליקציה הראשית, אפליקציית אינטרנט למכירת שייטים, חדרי מלון ומוצרי נסיעות קשורים. האחריות כללה רפקטורינג, הוספת תכונות חדשות, פיתוח מקטעים חדשים, יישום מיקרו-פרונטנדים/שירותים, ותחזוקת קוד מורשת.',
        technologies: 'TypeScript, JavaScript, Flow, React, Node.js, GitLab, Scrum, REST API, Redux, Zustand, Single-SPA',
        link: 'https://careers.veepee.com/veepee-tech/'
      },
      {
        period: '2020-2021',
        role: 'מפתח Fullstack / מובייל (React / React Native / Node.js)',
        company: 'Inetex LTD',
        location: 'רחובות, ישראל',
        shortDescription: 'חברת פרויקטים',
        description: 'פרויקטים עיקריים: itseems, tellme - פרויקטים חברתיים למאבק באלימות במשפחה ומתן סיוע פסיכולוגי במהלך מגפת הקורונה. אפליקציות אינטרנט נוצרו עבור המכון למידול קוגניטיבי (קייב, אוקראינה).',
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
        role: 'מפתח Frontend / מובייל (React / React Native)',
        company: 'Timefreek',
        location: 'נס ציונה, ישראל',
        shortDescription: 'סטארטאפ',
        description: 'יצירת אפליקציות iOS ו-Android לניהול זמן אישי יעיל, כולל תכונות כמו פרופילים, חיפוש אנשי קשר, לוחות שנה, קבוצות והתראות. תמיכה רב-לשונית. מעורב בכל שלבי הפרויקט.',
        technologies: 'JavaScript, React Native, React, GitHub, Scrum, GraphQL, Redux, AsyncStorage',
        link: 'https://www.linkedin.com/company/timefreek-app/about/'
      },
      {
        period: '2016-2018',
        role: 'מפתח Android',
        company: 'Elpisor LTD',
        location: 'רחובות, ישראל',
        shortDescription: 'חברת פרויקטים',
        description: 'פרויקט עיקרי: אפליקציית Mishpahug למהגרים חדשים וחיילים בודדים. יצירת אפליקציות למשתמשים ומנהלים עם תכונות כמו יצירת פרופיל, ניהול אירועים והתראות.',
        technologies: 'Java, OkHTTP, Dagger2, GSON, GitHub, Scrum, MVP.',
        link: 'https://elpisor.com/index.html'
      }
    ]
  },
  education: {
    title: 'השכלה',
    items: [
      {
        period: '2010-2014',
        degree: 'מדעי מחשב',
        institution: 'אוניברסיטת קייב הפוליטכנית, מחלקת מדעי המחשב, קייב, אוקראינה'
      }
    ]
  },
  projects: {
    title: 'פרויקטים והשכלה נוספת',
    items: [
      {
        period: '2016-2017',
        name: 'תכנית מיוחדת להתאקלמות של מפתח תוכנה',
        description: 'על פי טכנולוגיות IT של ישראל, על ידי משרד הקליטה - פתרונות מחשוב Tel-Ran'
      }
    ]
  }
};
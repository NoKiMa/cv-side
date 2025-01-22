// 'use client';

// import { Menu, X } from 'lucide-react';
// import { useState, useEffect } from 'react';
// import { cn } from '@/lib/utils';

// interface Props {
//   sections: Array<{
//     id: string;
//     title: string;
//   }>;
// }

// export function SideMenu({ sections }: Props) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('');

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY + 100;

//       for (const section of sections) {
//         const element = document.getElementById(section.id);
//         if (element) {
//           const { offsetTop, offsetHeight } = element;
//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             setActiveSection(section.id);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [sections]);

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       const offset = 80;
//       const elementPosition = element.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.pageYOffset - offset;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: 'smooth'
//       });
//     }
//     setIsOpen(false);
//   };

//   return (
//     <>
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="fixed top-4 left-4 z-50 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:bg-white transition-colors"
//       >
//         {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//       </button>

//       <nav
//         className={cn(
//           'fixed top-0 left-0 h-full w-64 bg-white/95 backdrop-blur-sm shadow-lg transform transition-transform duration-300 ease-in-out z-40 pt-20',
//           isOpen ? 'translate-x-0' : '-translate-x-full'
//         )}
//       >
//         <ul className="space-y-2 p-4">
//           {sections.map((section) => (
//             <li key={section.id}>
//               <button
//                 onClick={() => scrollToSection(section.id)}
//                 className={cn(
//                   'w-full text-left px-4 py-2 rounded-lg transition-colors',
//                   activeSection === section.id
//                     ? 'bg-[#8B4513]/10 text-[#8B4513] font-medium'
//                     : 'hover:bg-[#8B4513]/5'
//                 )}
//               >
//                 {section.title}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </>
//   );
// }

'use client';

import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface Props {
  sections: Array<{
    id: string;
    title: string;
  }>;
  dir?: 'ltr' | 'rtl';
}

export function SideMenu({ sections, dir = 'ltr' }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const isRTL = dir === 'rtl';

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'fixed top-2 z-50 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:bg-white transition-colors',
          isRTL ? 'right-4' : 'left-4'
        )}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <nav
        className={cn(
          'fixed top-0 h-full w-64 bg-white/95 backdrop-blur-sm shadow-lg transform transition-transform duration-300 ease-in-out z-40 pt-20',
          isRTL 
            ? (isOpen ? 'translate-x-0 right-0' : 'translate-x-full right-0') 
            : (isOpen ? 'translate-x-0 left-0' : '-translate-x-full left-0')
        )}
      >
        <ul className="space-y-2 p-4">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  'w-full text-left px-4 py-2 rounded-lg transition-colors',
                  activeSection === section.id
                    ? 'bg-[#8B4513]/10 text-[#8B4513] font-medium'
                    : 'hover:bg-[#8B4513]/5'
                )}
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
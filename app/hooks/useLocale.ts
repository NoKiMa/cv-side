'use client';

import { useCallback, useEffect, useState } from 'react';
import { Language } from '../types';
import { en } from '../locales/en';
import { ru } from '../locales/ru';
import { he } from '../locales/he';

const locales = { en, ru, he };

export function useLocale() {
  const [language, setLanguage] = useState<Language>('en');
  const [dir, setDir] = useState<'ltr' | 'rtl'>('ltr');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && locales[savedLang]) {
      setLanguage(savedLang);
      setDir(savedLang === 'he' ? 'rtl' : 'ltr');
    }
  }, []);

  const changeLanguage = useCallback((newLang: Language) => {
    if (locales[newLang]) {
      setLanguage(newLang);
      setDir(newLang === 'he' ? 'rtl' : 'ltr');
      localStorage.setItem('language', newLang);
    }
  }, []);

  return {
    language,
    dir,
    content: locales[language] || locales.en, // Fallback to English if language content is undefined
    changeLanguage
  };
}
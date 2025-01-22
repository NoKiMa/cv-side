'use client';

import { Language } from '../types';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Download, Linkedin } from 'lucide-react';

interface Props {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export function Header({ language, onLanguageChange }: Props) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex-1" />
        <nav className="flex items-center gap-6">
          <LanguageSwitcher
            currentLanguage={language}
            onLanguageChange={onLanguageChange}
          />
          <a
            href="/Kirill-Novak-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Kirill-Novak-Resume.pdf"
            className="flex items-center gap-2 hover:text-green-600 transition-colors"
          >
            <Download className="w-5 h-5" />
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/novak-kirill-bb877a153/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            <Linkedin className="w-5 h-5 text-[#4A90E2]" />
          </a>
        </nav>
      </div>
    </header>
  );
}
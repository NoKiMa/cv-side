'use client';

import { Language } from '../types';
import { Languages } from 'lucide-react';

interface Props {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

export function LanguageSwitcher({ currentLanguage, onLanguageChange }: Props) {
  return (
    <div className="flex items-center gap-2">
      <Languages className="w-5 h-5 text-[#4A90E2]" />
      <select
        value={currentLanguage}
        onChange={(e) => onLanguageChange(e.target.value as Language)}
        className="bg-transparent border-none focus:outline-none cursor-pointer"
      >
        <option value="en">English</option>
        <option value="ru">Русский</option>
        <option value="he">עברית</option>
      </select>
    </div>
  );
}
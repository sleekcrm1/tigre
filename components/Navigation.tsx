'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Menu, X, Globe, Moon, Sun } from 'lucide-react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export default function Navigation() {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  const changeLanguage = (lang: string) => {
    const newPath = pathname.replace(/^\/[a-z]{2}/, `/${lang}`);
    router.push(newPath);
  };

  return (
    <>
      {/* Desktop Nav */}
      <nav className="hidden md:flex sticky top-0 z-50 bg-white dark:bg-capoeira-dark shadow-md">
        <div className="w-full px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-capoeira-red">ABADÁ</div>
          <div className="flex gap-8">
            <button onClick={toggleDarkMode} className="text-gray-600 dark:text-gray-300">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <div className="flex gap-2">
              {['fr', 'en', 'pt'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => changeLanguage(lang)}
                  className="px-3 py-1 text-sm rounded hover:bg-capoeira-red hover:text-white"
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Floating Controls */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 flex justify-between z-50">
        <button onClick={() => changeLanguage('fr')} className="text-2xl">🌐</button>
        <button onClick={toggleDarkMode} className="text-2xl">
          {isDark ? '☀️' : '🌙'}
        </button>
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)} />
      )}
    </>
  );
}

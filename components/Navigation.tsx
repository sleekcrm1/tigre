'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

export default function Navigation() {
  const t = useTranslations();
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
    <nav className="hidden md:flex sticky top-0 z-50 bg-white dark:bg-capoeira-dark shadow-md">
      <div className="w-full px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-capoeira-red">ABADÁ</div>
        <div className="flex gap-8">
          <button onClick={toggleDarkMode} className="text-gray-600 dark:text-gray-300">
            {isDark ? '☀️' : '🌙'}
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
  );
}

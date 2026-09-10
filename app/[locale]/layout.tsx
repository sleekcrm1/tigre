'use client';
import { ReactNode } from 'react';
import { useLocale } from 'next-intl';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function LocaleLayout({ children }: { children: ReactNode }) {
  const locale = useLocale();
  return (
    <html lang={locale} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: `if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) { document.documentElement.classList.add('dark'); }` }} /></head>
      <body className="bg-white dark:bg-capoeira-dark text-gray-900 dark:text-white">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

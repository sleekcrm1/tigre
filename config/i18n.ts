import { notFound } from 'next/navigation';

const locales = ['fr', 'en', 'pt'];

export function getMessages(locale: string) {
  try {
    return require(`../messages/${locale}.json`);
  } catch (error) {
    notFound();
  }
}

export default {
  locales,
  defaultLocale: 'fr',
  localePrefix: 'as-needed',
};

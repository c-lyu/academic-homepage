import { joinURL, cleanDoubleSlashes } from 'ufo';
import en from "./en.json";
import zh from "./zh.json";

export const languages = {
  en: "English",
  zh: "中文",
};

export const defaultLang = "en";

export const translations = {
  en,
  zh,
} as const;

export type Language = keyof typeof translations;

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split("/");
  if (lang in translations) return lang as Language;
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return function t(key: string): string {
    const keys = key.split(".");
    let value: any = translations[lang];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };
}

export function getLocalizedPath(path: string, lang: Language): string {
  // Get the base path from import.meta.env
  const base = import.meta.env.BASE_URL || '/';
  return cleanDoubleSlashes(joinURL(base, lang, path));
}

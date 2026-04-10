"use client";

import { createContext, useContext } from "react";
import type { Locale } from "@/lib/i18n";
import { translations } from "@/lib/i18n";

export const LocaleContext = createContext<{
  locale: Locale;
  setLocale: (l: Locale) => void;
}>({
  locale: "es",
  setLocale: () => {},
});

export function useLocale() {
  const { locale, setLocale } = useContext(LocaleContext);
  const t = translations[locale];
  return { locale, setLocale, t };
}

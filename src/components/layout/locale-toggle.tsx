"use client";

import { useLocale } from "@/hooks/use-locale";
import { cn } from "@/lib/utils";

export function LocaleToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <button
      onClick={() => setLocale(locale === "es" ? "en" : "es")}
      className={cn(
        "relative inline-flex h-9 items-center justify-center rounded-md px-2.5",
        "text-xs font-semibold tracking-wider uppercase",
        "text-muted-foreground hover:text-foreground hover:bg-accent",
        "transition-colors"
      )}
      aria-label="Cambiar idioma"
    >
      {locale === "es" ? "EN" : "ES"}
    </button>
  );
}

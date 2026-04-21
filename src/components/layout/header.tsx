"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { ThemeToggle } from "./theme-toggle";
import { LocaleToggle } from "./locale-toggle";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { useLocale } from "@/hooks/use-locale";

const sectionIds = siteConfig.navItems.map((item) =>
  item.href.replace("#", "")
);

type NavKey = keyof ReturnType<typeof useLocale>["t"]["nav"];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeId = useScrollSpy(sectionIds);
  const { t } = useLocale();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="/#inicio"
          className="text-lg font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
        >
          JB
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {siteConfig.navItems.map((item) => {
            const id = item.href.replace("#", "");
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-sm rounded-md transition-colors",
                    activeId === id
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {t.nav[item.key as NavKey]}
                </a>
              </li>
            );
          })}
          <li className="ml-2">
            <Link
              href={siteConfig.cta.href}
              className="group inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm shadow-primary/20 hover:shadow-primary/40 hover:bg-primary/90 transition-all duration-300"
            >
              {t.nav.cta}
              <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </li>
          <li className="ml-2 flex items-center gap-1">
            <LocaleToggle />
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 md:hidden">
          <LocaleToggle />
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg">
          <ul className="flex flex-col p-4 gap-1">
            {siteConfig.navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2.5 text-sm rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                >
                  {t.nav[item.key as NavKey]}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <Link
                href={siteConfig.cta.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center w-full h-10 rounded-md bg-primary text-sm font-medium text-primary-foreground shadow-sm"
              >
                {t.nav.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

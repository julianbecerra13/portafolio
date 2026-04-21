"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeader } from "@/components/shared/section-header";
import { faqItems } from "@/lib/constants";
import { useLocale } from "@/hooks/use-locale";
import { cn } from "@/lib/utils";

export function FAQ() {
  const { t } = useLocale();
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);

  return (
    <section id="faq" className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <SectionHeader title={t.faq.title} subtitle={t.faq.subtitle} />

        <div className="space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <AnimatedSection key={item.id} delay={index * 0.05}>
                <div
                  className={cn(
                    "rounded-lg border bg-card overflow-hidden transition-colors duration-300",
                    isOpen
                      ? "border-primary/30"
                      : "border-border hover:border-primary/20"
                  )}
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium text-foreground">
                      {item.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0"
                    >
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 transition-colors",
                          isOpen ? "text-primary" : "text-muted-foreground"
                        )}
                      />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

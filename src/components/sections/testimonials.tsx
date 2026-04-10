"use client";

import { useState, useEffect, useCallback } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimatedSection } from "@/components/shared/animated-section";
import { testimonials } from "@/lib/constants";
import { useLocale } from "@/hooks/use-locale";

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback(
    (dir: number) => {
      setDirection(dir);
      setCurrent(
        (prev) =>
          (prev + dir + testimonials.length) % testimonials.length
      );
    },
    []
  );

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 6000);
    return () => clearInterval(timer);
  }, [paginate]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -200 : 200, opacity: 0 }),
  };

  const { t } = useLocale();

  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          title={t.testimonials.title}
          subtitle={t.testimonials.subtitle}
        />

        <AnimatedSection delay={0.1}>
          <div className="relative">
            {/* Carousel */}
            <div className="overflow-hidden rounded-lg border border-border bg-card p-8 md:p-12 min-h-[280px] flex items-center justify-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring" as const, stiffness: 200, damping: 25 },
                    opacity: { duration: 0.3 },
                  }}
                  className="text-center max-w-2xl mx-auto"
                >
                  <Quote className="h-8 w-8 text-primary/30 mx-auto mb-6" />
                  <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
                    &ldquo;{testimonials[current].text}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonials[current].name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[current].role} &middot;{" "}
                      {testimonials[current].company}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={() => paginate(-1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
                aria-label="Anterior"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > current ? 1 : -1);
                      setCurrent(i);
                    }}
                    className="group p-1"
                    aria-label={`Testimonio ${i + 1}`}
                  >
                    <motion.div
                      className="rounded-full bg-border"
                      animate={{
                        width: i === current ? 24 : 8,
                        backgroundColor:
                          i === current
                            ? "var(--primary)"
                            : "var(--border)",
                      }}
                      style={{ height: 8 }}
                      transition={{ duration: 0.3 }}
                    />
                  </button>
                ))}
              </div>

              <button
                onClick={() => paginate(1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
                aria-label="Siguiente"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

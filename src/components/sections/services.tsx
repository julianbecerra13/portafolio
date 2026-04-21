"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeader } from "@/components/shared/section-header";
import { services } from "@/lib/constants";
import { siteConfig } from "@/config/site";
import { useLocale } from "@/hooks/use-locale";
import { cn } from "@/lib/utils";

export function Services() {
  const { t } = useLocale();

  return (
    <section id="servicios" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.02] to-background pointer-events-none" />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          title={t.services.title}
          subtitle={t.services.subtitle}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={cn(
                  "group relative h-full flex flex-col rounded-xl border bg-card p-6 transition-colors duration-300",
                  service.highlighted
                    ? "border-primary/40 shadow-lg shadow-primary/10"
                    : "border-border hover:border-primary/30"
                )}
              >
                {service.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground shadow-sm">
                      <Sparkles className="h-3 w-3" />
                      {t.services.featured}
                    </div>
                  </div>
                )}

                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mb-5 pb-5 border-b border-border">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">
                      {t.services.priceFrom}
                    </span>
                    <span className="text-xl font-bold text-foreground">
                      {service.priceFrom}
                    </span>
                  </div>
                  <div className="mt-1.5 flex items-center gap-2">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">
                      {t.services.duration}
                    </span>
                    <span className="text-sm text-foreground">
                      {service.duration}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6 flex-1">
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 + i * 0.03 + 0.2 }}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <Link
                  href={`${siteConfig.cta.href}?servicio=${service.id}`}
                  className={cn(
                    "group/cta inline-flex items-center justify-center h-10 rounded-md px-4 text-sm font-medium transition-all duration-300",
                    service.highlighted
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-primary/20"
                      : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
                  )}
                >
                  {t.services.cta}
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover/cta:translate-x-0.5 transition-transform" />
                </Link>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <p className="text-center text-xs text-muted-foreground mt-8 max-w-2xl mx-auto">
            {t.services.note}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeader } from "@/components/shared/section-header";
import { siteConfig } from "@/config/site";
import { stats } from "@/lib/constants";
import { useLocale } from "@/hooks/use-locale";

function CountUp({ target, suffix = "" }: { target: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const numericValue = parseInt(target.replace(/\D/g, ""));
  const prefix = target.startsWith("+") ? "+" : "";

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = numericValue / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, numericValue]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export function About() {
  const { t } = useLocale();
  return (
    <section id="sobre-mi" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title={t.about.title}
          subtitle={t.about.subtitle}
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={0.1}>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Soy desarrollador Full Stack con base en Bucaramanga, Colombia.
                Mi stack principal:{" "}
                <span className="text-foreground font-medium">Go</span> y{" "}
                <span className="text-foreground font-medium">Node.js</span>{" "}
                para APIs,{" "}
                <span className="text-foreground font-medium">
                  React/Next.js
                </span>{" "}
                para web, y{" "}
                <span className="text-foreground font-medium">Flutter</span>{" "}
                para movil.
              </p>
              <p>
                He construido plataformas SaaS con dashboards complejos,
                integraciones OAuth con Meta y Google, sistemas de pagos, APIs
                con autenticacion JWT y apps publicadas en Play Store. Me enfoco
                en arquitectura modular, buenas practicas y despliegues
                productivos.
              </p>
              <p>
                Actualmente trabajo en GSA Marketing Hub, una plataforma de
                marketing digital con CRM, inbox multicanal y herramientas SEO,
                donde desarrollo frontend, backend y app movil.
              </p>
              <div className="flex items-center gap-2 text-sm pt-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{siteConfig.location}</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    scale: 1.05,
                    borderColor: "var(--primary)",
                    transition: { duration: 0.2 },
                  }}
                  className="rounded-lg border border-border bg-card p-6 text-center cursor-default"
                >
                  <p className="text-3xl font-bold text-primary">
                    <CountUp
                      target={stat.value}
                      suffix={stat.value.includes("+") ? "" : ""}
                    />
                    {stat.value.endsWith("+") ? "+" : ""}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

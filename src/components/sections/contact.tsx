"use client";

import Link from "next/link";
import { Mail, MapPin, Github, Linkedin, Briefcase, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeader } from "@/components/shared/section-header";
import { CVDownload } from "@/components/shared/cv-download";
import { siteConfig } from "@/config/site";
import { useLocale } from "@/hooks/use-locale";

const socialLinks = [
  {
    name: "GitHub",
    href: siteConfig.social.github,
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: siteConfig.social.linkedin,
    icon: Linkedin,
  },
  {
    name: "Freelancer",
    href: siteConfig.social.freelancer,
    icon: Briefcase,
  },
  {
    name: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
];

export function Contact() {
  const { t } = useLocale();
  return (
    <section id="contacto" className="py-24 px-6">
      <div className="mx-auto max-w-2xl">
        <SectionHeader
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <AnimatedSection delay={0.1}>
          <div className="rounded-lg border border-border bg-card p-8 text-center">
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {t.contact.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={siteConfig.cta.href}
                  className="group inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:bg-primary/90 transition-all duration-300"
                >
                  {t.contact.requestQuote}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </motion.div>
              <motion.a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-background/50 px-6 text-sm font-medium text-foreground hover:border-primary/30 hover:bg-accent transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="mr-2 h-4 w-4" />
                {t.contact.sendEmail}
              </motion.a>
              <CVDownload variant="outline" />
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
              <MapPin className="h-4 w-4" />
              {siteConfig.location}
            </div>

            <div className="flex items-center justify-center gap-3 pt-6 border-t border-border">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.name === "Email" ? undefined : "_blank"}
                  rel={link.name === "Email" ? undefined : "noopener noreferrer"}
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-muted-foreground hover:text-primary hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

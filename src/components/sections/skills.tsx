"use client";

import {
  Server,
  Monitor,
  Smartphone,
  Database,
  Container,
  Plug,
} from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/section-header";
import { skillCategories } from "@/lib/constants";
import { useLocale } from "@/hooks/use-locale";

const iconMap: Record<string, React.ReactNode> = {
  Server: <Server className="h-5 w-5" />,
  Monitor: <Monitor className="h-5 w-5" />,
  Smartphone: <Smartphone className="h-5 w-5" />,
  Database: <Database className="h-5 w-5" />,
  Container: <Container className="h-5 w-5" />,
  Plug: <Plug className="h-5 w-5" />,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      type: "spring" as const,
      stiffness: 100,
    },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.04,
      type: "spring" as const,
      stiffness: 200,
      damping: 15,
    },
  }),
};

export function Skills() {
  const { t } = useLocale();
  return (
    <section id="skills" className="py-24 px-6 bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title={t.skills.title}
          subtitle={t.skills.subtitle}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              variants={cardVariants}
              whileHover={{
                y: -4,
                borderColor: "var(--primary)",
                transition: { duration: 0.2 },
              }}
              className="rounded-lg border border-border bg-card p-6 h-full cursor-default"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {iconMap[category.icon]}
                </motion.div>
                <h3 className="font-semibold text-foreground">
                  {category.name}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    custom={i}
                    variants={badgeVariants}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "var(--primary)",
                      color: "var(--primary-foreground)",
                    }}
                    className="inline-flex items-center rounded-md border border-border bg-background px-2.5 py-1 text-sm text-muted-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

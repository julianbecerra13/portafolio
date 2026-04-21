"use client";

import { useEffect, useState, FormEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  MessageSquare,
  FileText,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  AlertCircle,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { services } from "@/lib/constants";
import { useLocale } from "@/hooks/use-locale";

type SubmitState = "idle" | "submitting" | "success" | "error";

const FORMSPREE_PLACEHOLDER = "https://formspree.io/f/REPLACE_WITH_YOUR_ID";

export function QuoteForm() {
  const { t } = useLocale();
  const [preselectedService, setPreselectedService] = useState<string>("");
  const [state, setState] = useState<SubmitState>("idle");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const servicio = params.get("servicio");
    if (servicio && services.some((s) => s.id === servicio)) {
      setPreselectedService(servicio);
    }
  }, []);

  const isConfigured =
    siteConfig.quoteForm.endpoint !== FORMSPREE_PLACEHOLDER;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isConfigured) {
      setState("error");
      return;
    }
    setState("submitting");
    try {
      const formData = new FormData(e.currentTarget);
      const res = await fetch(siteConfig.quoteForm.endpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("submit failed");
      setState("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setState("error");
    }
  };

  const whatsappUrl = `https://wa.me/${siteConfig.quoteForm.whatsappNumber}?text=${encodeURIComponent(
    "Hola Julian, me interesa cotizar un proyecto."
  )}`;

  return (
    <section className="px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.cotizar.form.backHome}
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            {t.cotizar.title}
          </h1>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
            {t.cotizar.subtitle}
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-xl border border-border bg-card p-6 sm:p-8"
          >
            {state === "success" ? (
              <SuccessMessage t={t} />
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                noValidate
              >
                {!isConfigured && (
                  <div className="flex items-start gap-3 rounded-lg border border-amber-500/30 bg-amber-500/10 p-4 text-sm">
                    <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-amber-500" />
                    <p className="text-amber-700 dark:text-amber-400 leading-relaxed">
                      Configura tu endpoint de Formspree en
                      <code className="mx-1 px-1.5 py-0.5 rounded bg-amber-500/20 text-xs font-mono">
                        src/config/site.ts
                      </code>
                      para recibir las solicitudes por email.
                    </p>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4">
                  <Field
                    label={t.cotizar.form.name}
                    name="nombre"
                    placeholder={t.cotizar.form.namePlaceholder}
                    required
                  />
                  <Field
                    label={t.cotizar.form.company}
                    name="empresa"
                    placeholder={t.cotizar.form.companyPlaceholder}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Field
                    label={t.cotizar.form.email}
                    name="email"
                    type="email"
                    placeholder={t.cotizar.form.emailPlaceholder}
                    required
                  />
                  <Field
                    label={t.cotizar.form.phone}
                    name="telefono"
                    type="tel"
                    placeholder={t.cotizar.form.phonePlaceholder}
                  />
                </div>

                <div>
                  <Label htmlFor="servicio">
                    {t.cotizar.form.service}
                    <Required />
                  </Label>
                  <select
                    id="servicio"
                    name="servicio"
                    required
                    defaultValue={preselectedService}
                    className="w-full h-11 rounded-md border border-border bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                  >
                    <option value="">
                      {t.cotizar.form.servicePlaceholder}
                    </option>
                    {services.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="presupuesto">
                      {t.cotizar.form.budget}
                    </Label>
                    <select
                      id="presupuesto"
                      name="presupuesto"
                      className="w-full h-11 rounded-md border border-border bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                      defaultValue=""
                    >
                      <option value="">
                        {t.cotizar.form.budgetPlaceholder}
                      </option>
                      {t.cotizar.form.budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                  <Field
                    label={t.cotizar.form.deadline}
                    name="plazo"
                    placeholder={t.cotizar.form.deadlinePlaceholder}
                  />
                </div>

                <div>
                  <Label htmlFor="mensaje">
                    {t.cotizar.form.message}
                    <Required />
                  </Label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={5}
                    required
                    placeholder={t.cotizar.form.messagePlaceholder}
                    className="w-full rounded-md border border-border bg-background p-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors resize-y"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={state === "submitting"}
                    className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow-md shadow-primary/20 hover:shadow-primary/40 hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    {state === "submitting"
                      ? t.cotizar.form.submitting
                      : t.cotizar.form.submit}
                  </button>
                  {state === "error" && (
                    <p className="text-sm text-destructive flex items-center gap-1.5">
                      <AlertCircle className="h-4 w-4" />
                      {t.cotizar.form.error}
                    </p>
                  )}
                </div>
              </form>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="text-lg font-semibold text-foreground mb-5">
                {t.cotizar.sidebar.title}
              </h2>
              <ul className="space-y-4">
                <Step
                  icon={<FileText className="h-4 w-4" />}
                  title={t.cotizar.sidebar.step1Title}
                  desc={t.cotizar.sidebar.step1Desc}
                />
                <Step
                  icon={<MessageSquare className="h-4 w-4" />}
                  title={t.cotizar.sidebar.step2Title}
                  desc={t.cotizar.sidebar.step2Desc}
                />
                <Step
                  icon={<CheckCircle2 className="h-4 w-4" />}
                  title={t.cotizar.sidebar.step3Title}
                  desc={t.cotizar.sidebar.step3Desc}
                />
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <p className="text-sm text-muted-foreground mb-4">
                {t.cotizar.sidebar.contactAlt}
              </p>
              <div className="space-y-3">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2.5 text-sm text-foreground hover:text-primary transition-colors group"
                >
                  <Mail className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  {siteConfig.email}
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-foreground hover:text-primary transition-colors group"
                >
                  <Phone className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  WhatsApp: {siteConfig.phone}
                </a>
                <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {siteConfig.location}
                </div>
                <div className="flex items-center gap-2.5 text-sm text-muted-foreground pt-1">
                  <Clock className="h-4 w-4" />
                  Lun-Vie · 8am-6pm COT
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label htmlFor={name}>
        {label}
        {required && <Required />}
      </Label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full h-11 rounded-md border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
      />
    </div>
  );
}

function Label({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-foreground mb-1.5"
    >
      {children}
    </label>
  );
}

function Required() {
  return <span className="text-destructive ml-0.5">*</span>;
}

function Step({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <li className="flex gap-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-foreground">{title}</p>
        <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
      </div>
    </li>
  );
}

function SuccessMessage({
  t,
}: {
  t: ReturnType<typeof useLocale>["t"];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="text-center py-10"
    >
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
        <CheckCircle2 className="h-8 w-8 text-primary" />
      </div>
      <h2 className="text-2xl font-semibold text-foreground mb-2">
        {t.cotizar.form.success}
      </h2>
      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
        Mientras tanto puedes revisar mis proyectos o escribirme por WhatsApp si
        es urgente.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
      >
        <ArrowLeft className="h-4 w-4" />
        {t.cotizar.form.backHome}
      </Link>
    </motion.div>
  );
}

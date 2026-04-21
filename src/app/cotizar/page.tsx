import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { QuoteForm } from "@/components/sections/quote-form";

export const metadata: Metadata = {
  title: "Cotizar proyecto",
  description:
    "Solicita una cotizacion personalizada para tu proyecto web, movil o backend. Respuesta en menos de 48 horas.",
};

export default function CotizarPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}

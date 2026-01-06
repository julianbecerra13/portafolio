import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://enchanting-sunflower-e31c11.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Julian Becerra | Full Stack Developer",
    template: "%s | Julian Becerra",
  },
  description:
    "Desarrollador Full Stack especializado en Go, React, Next.js y Flutter. +3 años construyendo APIs escalables y productos digitales. Bucaramanga, Colombia.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Go Developer",
    "Flutter Developer",
    "Node.js",
    "Next.js",
    "Colombia",
    "Bucaramanga",
    "APIs",
    "Mobile Apps",
  ],
  authors: [{ name: "Julian Becerra", url: siteUrl }],
  creator: "Julian Becerra",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: siteUrl,
    siteName: "Julian Becerra Portfolio",
    title: "Julian Becerra | Full Stack Developer",
    description:
      "Construyo APIs escalables y interfaces que convierten usuarios en clientes. Go · React · Flutter",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Julian Becerra - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Julian Becerra | Full Stack Developer",
    description:
      "Construyo APIs escalables y interfaces que convierten usuarios en clientes. Go · React · Flutter",
    images: ["/og-image.png"],
    creator: "@julianbecerra",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#7c3aed" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

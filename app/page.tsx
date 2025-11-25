// 🎯 GRITA: "Página principal del portafolio"
import { Hero } from "@/features/hero/Hero";
import { Projects } from "@/features/projects/Projects";
import { Experience } from "@/features/experience/Experience";
import { About } from "@/features/about/About";
import { Contact } from "@/features/contact/Contact";

export default function Home() {
  return (
    <main className="bg-gray-900">
      <Hero />
      <Experience />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}

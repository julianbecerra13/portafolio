"use client";

import { useState, useRef, useEffect } from "react";
import { Download, ChevronDown, Code, Server, Smartphone, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const cvOptions = [
  {
    label: "Full Stack",
    file: "/resume/Julian_Becerra_CV_Fullstack.pdf",
    icon: Layers,
    description: "Go + Next.js + Flutter",
  },
  {
    label: "Frontend",
    file: "/resume/Julian_Becerra_CV_Frontend.pdf",
    icon: Code,
    description: "React + Next.js + Flutter",
  },
  {
    label: "Backend",
    file: "/resume/Julian_Becerra_CV_Backend.pdf",
    icon: Server,
    description: "Go + Node.js + APIs",
  },
  {
    label: "Mobile",
    file: "/resume/Julian_Becerra_CV_Mobile.pdf",
    icon: Smartphone,
    description: "Flutter + React Native",
  },
];

interface CVDownloadProps {
  variant?: "primary" | "outline";
  className?: string;
}

export function CVDownload({ variant = "outline", className }: CVDownloadProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "inline-flex h-12 items-center justify-center rounded-lg px-7 text-sm font-medium transition-all duration-300 gap-2",
          variant === "primary"
            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:bg-primary/90"
            : "border border-border bg-background/50 backdrop-blur-sm text-foreground shadow-sm hover:bg-accent hover:border-primary/30"
        )}
      >
        <Download className="h-4 w-4" />
        Descargar CV
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-64 rounded-lg border border-border bg-card/95 backdrop-blur-xl shadow-xl shadow-black/10 overflow-hidden z-50"
          >
            <div className="p-1.5">
              {cvOptions.map((option, i) => (
                <motion.a
                  key={option.label}
                  href={option.file}
                  download
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm hover:bg-primary/10 group transition-colors"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    <option.icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      CV {option.label}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {option.description}
                    </p>
                  </div>
                  <Download className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

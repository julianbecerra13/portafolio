// 🎯 GRITA: "Botón secundario con estilo outline"
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SecondaryButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function SecondaryButton({ children, href, onClick, className = "" }: SecondaryButtonProps) {
  const buttonContent = (
    <motion.button
      onClick={onClick}
      className={`px-8 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition-colors ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
}

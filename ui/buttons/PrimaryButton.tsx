// 🎯 GRITA: "Botón principal reutilizable con animaciones"
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function PrimaryButton({ children, href, onClick, className = "" }: PrimaryButtonProps) {
  const buttonContent = (
    <motion.button
      onClick={onClick}
      className={`px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow ${className}`}
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

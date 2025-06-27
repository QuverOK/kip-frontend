"use client";
import { motion } from "motion/react";

export function HeaderLayout({ children }: { children: React.ReactNode }) {
  return (
    <motion.header
      className="flex gap-7 items-center justify-end"
      variants={{
        hidden: { opacity: 0, x: 75 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.header>
  );
}

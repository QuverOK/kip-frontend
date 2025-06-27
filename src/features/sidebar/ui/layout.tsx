"use client";
import { motion } from "motion/react";

export function SidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <motion.aside
      className="flex flex-col h-full"
      variants={{
        hidden: { opacity: 0, x: -150 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.aside>
  );
}

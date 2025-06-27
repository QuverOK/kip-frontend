import { motion } from "motion/react";

export function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="grid grid-cols-2 gap-8 h-full"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1.25 }}
    >
      {children}
    </motion.div>
  );
}

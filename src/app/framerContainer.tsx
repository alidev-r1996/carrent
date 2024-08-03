"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function FramerProvicer({ children }: { children: React.ReactNode }) {
  let pathname = usePathname();

  return (
    <>
      <AnimatePresence mode={"wait"} initial={false}>
        <motion.div
          className="max-w-[100vw] max-h-[100vh]"
          key={pathname}
          initial={{ opacity: 0, x: "100vw" }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1,
            ease: [0.27, 0.94, 0.48, 1.0],
            staggerChildren: 0.2,
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}

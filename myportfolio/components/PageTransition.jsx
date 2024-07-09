"use client";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div>{children}</div>
    </AnimatePresence>
  );
};

export default PageTransition;

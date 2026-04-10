"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionHeaderProps {
  num: string;
  title: string;
}

export default function SectionHeader({ num, title }: SectionHeaderProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="flex items-baseline gap-4 mb-20 overflow-hidden">
      <motion.span
        className="text-[10px] tracking-[.25em] text-gold font-mono shrink-0"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        {num}
      </motion.span>

      <motion.h2
        style={{
          fontFamily: "var(--font-cormorant-garamond), 'Cormorant Garamond', serif",
          fontSize: "clamp(38px, 4.5vw, 62px)",
          fontWeight: 300,
          letterSpacing: "-0.01em",
          lineHeight: 1,
        }}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
      >
        {title}
      </motion.h2>

      <motion.div
        className="flex-1 h-px ml-4"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.10), transparent)",
          transformOrigin: "left",
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1], delay: 0.25 }}
      />
    </div>
  );
}

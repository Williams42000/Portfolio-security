"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const duration = 2400;
    const start = Date.now();
    const tick = () => {
      const p = Math.min((Date.now() - start) / duration, 1);
      // ease in-out cubic
      const e = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
      setCount(Math.round(100 * e));
      if (p < 1) requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 400);
    };
    requestAnimationFrame(tick);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "#050507" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
        >
          {/* Horizontal line that grows */}
          <motion.div
            className="absolute left-0 right-0 top-1/2 h-px bg-white/[0.06]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
          />

          {/* Counter */}
          <motion.div
            className="relative z-10 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div
              style={{
                fontFamily: "var(--font-cormorant-garamond), serif",
                fontSize: "clamp(80px, 16vw, 200px)",
                fontWeight: 300,
                lineHeight: 1,
                color: "#c8a96e",
                letterSpacing: "-0.03em",
              }}
            >
              {count}
            </div>
          </motion.div>

          {/* Name */}
          <motion.p
            className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[10px] tracking-[.5em] uppercase text-white/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Williams Mache Kemgni
          </motion.p>

          {/* Corner labels */}
          <span className="absolute top-8 left-10 text-[10px] tracking-[.3em] uppercase text-white/15">
            WMK
          </span>
          <span className="absolute top-8 right-10 text-[10px] tracking-[.3em] uppercase text-white/15">
            2025
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ── rotating badge helper ── */
function RotatingBadge() {
  const text = "DISPONIBLE · MONTRÉAL · 2025 · WMK · ";
  const chars = text.split("");
  const r = 42;
  return (
    <div className="relative w-[100px] h-[100px]">
      <svg viewBox="0 0 100 100" className="w-full h-full animate-spin" style={{ animationDuration: "12s" }}>
        {chars.map((char, i) => {
          const angle = (i / chars.length) * 360 - 90;
          const rad = (angle * Math.PI) / 180;
          const x = 50 + r * Math.cos(rad);
          const y = 50 + r * Math.sin(rad);
          return (
            <text
              key={i}
              x={x}
              y={y}
              fontSize="6.5"
              fill="#c8a96e"
              textAnchor="middle"
              dominantBaseline="middle"
              transform={`rotate(${angle + 90}, ${x}, ${y})`}
            >
              {char}
            </text>
          );
        })}
      </svg>
      <span
        className="absolute inset-0 flex items-center justify-center text-gold text-xl"
        style={{ color: "#c8a96e" }}
      >
        →
      </span>
    </div>
  );
}

/* ── counter hook ── */
function useCounter(target: number, delay: number) {
  const [v, setV] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => {
      const d = 1800, s = Date.now();
      const tick = () => {
        const p = Math.min((Date.now() - s) / d, 1);
        const e = 1 - Math.pow(1 - p, 3);
        setV(Math.round(target * e));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay);
    return () => clearTimeout(t);
  }, [target, delay]);
  return v;
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  const years     = useCounter(4,   2800);
  const sites     = useCounter(400, 2800);
  const langs     = useCounter(3,   2800);

  const stats = [
    { v: years,  s: "+", l: "Années" },
    { v: sites,  s: "+", l: "Sites surveillés" },
    { v: langs,  s: "",  l: "Langues" },
  ];

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden"
      style={{ background: "#050507" }}
    >
      {/* Subtle grid */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.018) 1px,transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
        }}
      />

      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          width: "60vw", height: "60vw",
          top: "-20vw", right: "-10vw",
          background: "radial-gradient(circle, rgba(200,169,110,.07) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Top bar */}
      <motion.div
        className="flex justify-between items-center px-8 md:px-14 pt-10 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.6 }}
      >
        <span
          className="text-[10px] tracking-[.4em] uppercase"
          style={{ color: "rgba(255,255,255,0.25)" }}
        >
          Portfolio — 2025
        </span>
        <span
          className="text-[10px] tracking-[.4em] uppercase"
          style={{ color: "rgba(255,255,255,0.25)" }}
        >
          Montréal, QC
        </span>
      </motion.div>

      {/* ── MAIN NAME BLOCK ── */}
      <motion.div
        className="px-6 md:px-12 relative z-10"
        style={{ y }}
      >
        {/* Williams */}
        <div style={{ overflow: "hidden", lineHeight: 0.88 }}>
          <motion.h1
            style={{
              fontFamily: "var(--font-cormorant-garamond), 'Cormorant Garamond', serif",
              fontSize: "clamp(72px, 14.5vw, 220px)",
              fontWeight: 300,
              letterSpacing: "-0.03em",
              color: "#f0ece4",
              display: "block",
            }}
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 2.6 }}
          >
            Williams
          </motion.h1>
        </div>

        {/* Mache — italic gold, slightly inset */}
        <div style={{ overflow: "hidden", lineHeight: 0.88, display: "flex", alignItems: "flex-end", gap: "4vw" }}>
          <motion.h1
            style={{
              fontFamily: "var(--font-cormorant-garamond), 'Cormorant Garamond', serif",
              fontSize: "clamp(72px, 14.5vw, 220px)",
              fontWeight: 300,
              fontStyle: "italic",
              letterSpacing: "-0.03em",
              color: "#c8a96e",
              display: "block",
              paddingLeft: "6vw",
            }}
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 2.72 }}
          >
            Mache
          </motion.h1>

          {/* Rotating badge inside the name row */}
          <motion.div
            className="hidden lg:flex items-end pb-4 shrink-0"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 3.2, duration: 0.8, ease: "backOut" }}
          >
            <RotatingBadge />
          </motion.div>
        </div>

        {/* Kemgni */}
        <div style={{ overflow: "hidden", lineHeight: 0.88 }}>
          <motion.h1
            style={{
              fontFamily: "var(--font-cormorant-garamond), 'Cormorant Garamond', serif",
              fontSize: "clamp(72px, 14.5vw, 220px)",
              fontWeight: 300,
              letterSpacing: "-0.03em",
              color: "#f0ece4",
              display: "block",
            }}
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 2.84 }}
          >
            Kemgni
          </motion.h1>
        </div>
      </motion.div>

      {/* ── BOTTOM STRIPE ── */}
      <motion.div
        className="relative z-10 px-8 md:px-14 pb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 0.7 }}
      >
        {/* Separator */}
        <div className="h-px w-full mb-6" style={{ background: "rgba(255,255,255,0.08)" }} />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          {/* Role descriptor */}
          <div>
            <p
              className="text-[11px] tracking-[.28em] uppercase mb-2"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Agent de Sécurité Institutionnel
            </p>
            <div className="flex items-center gap-3">
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: "#4ade80", boxShadow: "0 0 8px #4ade80" }}
              />
              <span className="text-[11px] tracking-[.2em] uppercase" style={{ color: "#4ade80" }}>
                Disponible immédiatement
              </span>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-right">
                <div
                  style={{
                    fontFamily: "var(--font-cormorant-garamond), serif",
                    fontSize: "clamp(22px, 2.5vw, 36px)",
                    fontWeight: 300,
                    color: "#c8a96e",
                    lineHeight: 1,
                  }}
                >
                  {s.v}{s.s}
                </div>
                <div className="text-[9px] tracking-[.22em] uppercase mt-1" style={{ color: "rgba(255,255,255,0.25)" }}>
                  {s.l}
                </div>
              </div>
            ))}
          </div>

          {/* Scroll hint */}
          <div
            className="hidden md:flex items-center gap-3 text-[9px] tracking-[.35em] uppercase"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            <motion.div
              className="h-8 w-px"
              style={{ background: "rgba(255,255,255,0.15)" }}
              animate={{ scaleY: [1, 0.4, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 3.5 }}
            />
            Défiler
          </div>
        </div>
      </motion.div>
    </section>
  );
}

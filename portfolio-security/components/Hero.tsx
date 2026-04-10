"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const nameLines = [
  { text: "Williams", italic: false },
  { text: "Mache", italic: true },
  { text: "Kemgni", italic: false },
];

const tags = ["Permis BSP", "Vue.js", "Trilingue", "NestJS", "TypeScript"];

function useCounter(target: number, startDelay: number) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      const duration = 1800;
      const start = Date.now();
      const tick = () => {
        const p = Math.min((Date.now() - start) / duration, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        setValue(Math.round(target * ease));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, startDelay);
    return () => clearTimeout(timer);
  }, [target, startDelay]);
  return value;
}

export default function Hero() {
  const years     = useCounter(4,   1400);
  const sites     = useCounter(400, 1400);
  const langs     = useCounter(3,   1400);
  const employers = useCounter(6,   1400);

  const stats = [
    { value: years,     suffix: "+", label: "Années d'exp." },
    { value: sites,     suffix: "+", label: "Sites surveillés" },
    { value: langs,     suffix: "",  label: "Langues" },
    { value: employers, suffix: "",  label: "Employeurs" },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen grid px-15 relative overflow-hidden"
      style={{ gridTemplateRows: "1fr auto" }}
    >
      {/* Ambient */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 75% 40%,rgba(200,169,110,.045) 0%,transparent 70%), radial-gradient(ellipse 50% 70% at 15% 75%,rgba(139,58,58,.035) 0%,transparent 60%)",
        }}
      />
      {/* Grid */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.012) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.012) 1px,transparent 1px)",
          backgroundSize: "88px 88px",
          maskImage:
            "radial-gradient(ellipse at center, black 10%, transparent 75%)",
        }}
      />

      {/* Body */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center pt-28 lg:pt-[120px] gap-10 lg:gap-16 relative z-10">
        {/* Name block */}
        <div>
          <motion.p
            className="flex items-center gap-3.5 text-[10px] tracking-[.35em] uppercase text-gold mb-8"
            style={{
              ["--before-content" as string]: '""',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <span className="block w-9 h-px bg-gold shrink-0" />
            Disponible · Montréal, QC
          </motion.p>

          {nameLines.map(({ text, italic }, i) => (
            <div key={text} className="overflow-hidden" style={{ lineHeight: 0.92 }}>
              <motion.span
                className={`block font-cormorant font-light tracking-[-0.02em] text-[clamp(64px,9.5vw,140px)]${italic ? " italic text-gold" : ""}`}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.1,
                  ease: [0.76, 0, 0.24, 1],
                  delay: 0.4 + i * 0.12,
                }}
              >
                {text}
              </motion.span>
            </div>
          ))}
        </div>

        {/* Info panel */}
        <motion.div
          className="hidden lg:flex flex-col gap-5 min-w-[260px] p-8 border border-white/[0.055] rounded-lg"
          style={{ background: "rgba(11,11,20,.75)", backdropFilter: "blur(14px)" }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 1.0 }}
        >
          <p className="font-cormorant text-[22px] font-light leading-[1.35]">
            Agent de Sécurité
          </p>
          <div className="h-px bg-white/[0.055]" />
          <p className="text-[11px] tracking-[.15em] uppercase text-dim">
            4+ ans · Montréal, QC
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 border border-white/10 rounded-full text-[9px] tracking-[.15em] uppercase text-dim hover:border-gold hover:text-gold hover:bg-gold/10 transition-all duration-300 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Stats + scroll */}
      <motion.div
        className="grid grid-cols-[1fr_auto] items-end pb-12 gap-10 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.3 }}
      >
        <div className="flex flex-wrap gap-0">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`pr-8 ${i < stats.length - 1 ? "border-r border-white/[0.055] mr-8" : ""}`}
            >
              <div className="font-cormorant text-[clamp(28px,3vw,42px)] font-light text-gold leading-none mb-1">
                {s.value}
                {s.suffix}
              </div>
              <div className="text-[9px] tracking-[.2em] uppercase text-dim">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3.5 text-[10px] tracking-[.3em] uppercase text-muted">
          <div className="w-14 h-px bg-muted relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gold"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
                repeatDelay: 0.5,
              }}
            />
          </div>
          Défiler
        </div>
      </motion.div>
    </section>
  );
}

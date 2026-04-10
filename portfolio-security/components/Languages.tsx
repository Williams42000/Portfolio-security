"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

const langs = [
  { name: "Français",  level: "Niveau expert — langue principale",           pct: 100 },
  { name: "Espagnol",  level: "Niveau avancé — communication professionnelle", pct: 75  },
  { name: "Anglais",   level: "Niveau intermédiaire — communication fonctionnelle", pct: 70  },
];

const certs = [
  {
    icon: "🛡",
    title: "Permis d'Agent de Sécurité",
    desc: "Permis valide — Bureau de la Sécurité Privée (BSP) du Québec",
  },
  {
    icon: "🚑",
    title: "Certificat de Secourisme",
    desc: "Premiers soins et secourisme — intervention d'urgence médicale",
  },
  {
    icon: "🚗",
    title: "Permis de Conduire",
    desc: "Permis valide au Québec — mobilité complète en région métropolitaine",
  },
];

function LangBar({ name, level, pct, delay }: { name: string; level: string; pct: number; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="mb-9"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay }}
    >
      <div className="flex justify-between items-baseline mb-1.5">
        <span className="font-syne text-[13px] font-bold tracking-[.1em] uppercase">{name}</span>
        <span className="text-[10px] text-gold tracking-[.1em]">{pct}%</span>
      </div>
      <p className="text-[10px] text-dim tracking-[.15em] uppercase mb-3">{level}</p>
      <div className="h-0.5 bg-white/[0.055] rounded-sm overflow-hidden">
        <motion.div
          className="h-full rounded-sm"
          style={{ background: "linear-gradient(90deg,#c8a96e,#e8d5b0)" }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : {}}
          transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1], delay: delay + 0.3 }}
        />
      </div>
    </motion.div>
  );
}

export default function Languages() {
  return (
    <section
      id="langues"
      className="px-15 py-[120px] border-t border-b border-white/[0.055] bg-bg-dark2"
    >
      <SectionHeader num="05" title="Langues & Certifications" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div>
          {langs.map((l, i) => (
            <LangBar key={l.name} {...l} delay={i * 0.15} />
          ))}
        </div>

        <div className="flex flex-col gap-3.5">
          {certs.map((c, i) => (
            <Reveal key={i} delay={i * 0.1} direction="right">
              <div className="group flex gap-4 items-start p-5 border border-white/[0.055] rounded-md bg-surface hover:border-gold/25 hover:bg-gold/[0.04] transition-all duration-300">
                <span className="text-[22px] shrink-0 mt-0.5">{c.icon}</span>
                <div>
                  <p className="font-syne text-[11px] font-bold tracking-[.08em] uppercase mb-1.5">{c.title}</p>
                  <p className="text-[10px] leading-[1.65] text-dim">{c.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

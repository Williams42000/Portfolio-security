"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "./SectionHeader";

const categories = [
  {
    label: "Frontend",
    chips: ["Vue.js", "Ionic", "JavaScript", "TypeScript"],
  },
  {
    label: "Backend & BDD",
    chips: ["NestJS", "PostgreSQL", "Jest"],
  },
  {
    label: "Outils & Méthodes",
    chips: [
      "Git", "GitHub", "Figma", "Trello",
      "Notion", "Bubble", "WordPress", "Cypress.io", "Pinia",
    ],
  },
];

function ChipGroup({ chips, baseDelay }: { chips: string[]; baseDelay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="flex flex-wrap gap-2">
      {chips.map((chip, i) => (
        <motion.span
          key={chip}
          className="px-4 py-2.5 border border-white/[0.055] rounded bg-bg-dark3 text-[11px] tracking-[.08em] text-dim cursor-default hover:border-gold hover:text-gold hover:bg-gold/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(200,169,110,0.12)]"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{
            duration: 0.45,
            ease: [0.4, 0, 0.2, 1],
            delay: baseDelay + i * 0.04,
          }}
        >
          {chip}
        </motion.span>
      ))}
    </div>
  );
}

export default function Tech() {
  return (
    <section id="tech" className="px-15 py-[120px]">
      <SectionHeader num="04" title="Tech" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {categories.map((cat, ci) => (
          <div key={cat.label}>
            <p className="flex items-center gap-3 text-[10px] tracking-[.28em] uppercase text-gold mb-5 after:flex-1 after:h-px after:bg-gradient-to-r after:from-white/10 after:to-transparent">
              {cat.label}
            </p>
            <ChipGroup chips={cat.chips} baseDelay={ci * 0.1} />
          </div>
        ))}
      </div>
    </section>
  );
}

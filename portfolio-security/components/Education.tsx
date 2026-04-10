"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "./SectionHeader";

const items = [
  {
    year: "2022 — 2023",
    title: "AEC — Développement Web",
    place: "Collège Ahuntsic · Montréal",
    desc: "Formation intensive en développement web full-stack, couvrant les technologies modernes et les pratiques de développement agile.",
  },
  {
    year: "2016 — 2018",
    title: "DEP — Techniques de Composite",
    place: "École de formation Lachine · Montréal",
    desc: "Formation professionnelle en techniques industrielles, développant précision, discipline et savoir-faire technique.",
  },
  {
    year: "2014 — 2016",
    title: "DEC — Sciences Humaines",
    place: "Cégep Saint-Laurent · Montréal",
    desc: "Formation renforçant les aptitudes analytiques, la compréhension des dynamiques sociales et la communication.",
  },
  {
    year: "2008 — 2012",
    title: "Université — Euro-plastique",
    place: "Jean Zay · Oyonnax, France",
    desc: "Formation universitaire en sciences des matériaux et procédés industriels, développant rigueur scientifique et pensée analytique.",
  },
];

function TimelineItem({ item, index }: { item: (typeof items)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="group relative pl-12 mb-12 last:mb-0"
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.7,
        ease: [0.4, 0, 0.2, 1],
        delay: index * 0.12,
      }}
    >
      {/* Dot */}
      <motion.div
        className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full border-2 border-gold bg-bg-dark"
        whileHover={{ scale: 1.4, backgroundColor: "#c8a96e" }}
        transition={{ duration: 0.2 }}
      />

      <p className="text-[10px] tracking-[.28em] uppercase text-gold mb-2">{item.year}</p>
      <p className="font-syne text-[15px] font-bold tracking-[.05em] mb-1">{item.title}</p>
      <p className="text-[11px] text-dim mb-2">{item.place}</p>
      <p className="text-[11px] leading-[1.75] text-muted">{item.desc}</p>
    </motion.div>
  );
}

export default function Education() {
  return (
    <section id="formation" className="px-15 py-[120px]">
      <SectionHeader num="06" title="Formation" />

      <div
        className="relative pl-0"
        style={{
          // vertical line
        }}
      >
        {/* Timeline spine */}
        <div
          className="absolute left-[5px] top-2 bottom-2 w-px"
          style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.10), transparent)" }}
        />

        {items.map((item, i) => (
          <TimelineItem key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}

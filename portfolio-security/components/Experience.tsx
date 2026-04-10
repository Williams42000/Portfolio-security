"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

interface Job {
  company: string;
  role: string;
  date: string;
  location: string;
  desc: string;
  bullets: string[];
}

const jobs: Job[] = [
  {
    company: "Banque Nationale du Canada",
    role: "Agent de Surveillance — Centre de Surveillance Institutionnel",
    date: "Nov 2023 — Présent",
    location: "Montréal, QC",
    desc: "Poste central et stratégique au sein d'un centre de surveillance de grande envergure — réception, analyse et priorisation des incidents provenant d'un réseau de plus de 400 succursales à travers le pays.",
    bullets: [
      "Traitement en temps réel des alertes de 400+ succursales",
      "Priorisation selon la nature et gravité des événements",
      "Liaison directe avec police, pompiers et premiers répondants",
      "Gestion simultanée d'incidents critiques multiples",
      "Rédaction de rapports détaillés et suivi documenté",
      "Évaluation des risques en temps réel",
    ],
  },
  {
    company: "GardaWorld",
    role: "Agent de Sécurité & Gardiennage",
    date: "Actuellement",
    location: "Montréal, QC",
    desc: "Affecté à diverses missions dans le cadre de l'une des plus grandes entreprises de sécurité privée au Canada, reconnu pour ses standards élevés et protocoles rigoureux.",
    bullets: [
      "Application des procédures de sécurité GardaWorld",
      "Surveillance et contrôle d'accès multi-environnements",
      "Gestion professionnelle des situations imprévues",
    ],
  },
  {
    company: "Groupe CH — Centre Bell",
    role: "Agent de Sécurité — Événements & Lieux Emblématiques",
    date: "Déc 2023 — Juin 2025",
    location: "Montréal, QC",
    desc: "Sécurité d'événements majeurs dans des lieux emblématiques de Montréal, notamment le Centre Bell — gestion de foules importantes et collaboration événementielle.",
    bullets: [
      "Sécurité lors de concerts et matchs au Centre Bell",
      "Surveillance de festivals en centre-ville et plein air",
      "Gestion des flux de foule et contrôle d'accès",
    ],
  },
  {
    company: "CISC",
    role: "Agent de Sécurité — Sites Sensibles",
    date: "Déc 2022 — Présent",
    location: "Montréal, QC",
    desc: "Surveillance et sécurisation de sites variés nécessitant une approche humaine et sensible : centres de réfugiés, hôtels et établissements spécialisés.",
    bullets: [
      "Intervention avec tact auprès de populations vulnérables",
      "Gestion des relations interpersonnelles complexes",
      "Discrétion et professionnalisme en tout temps",
    ],
  },
  {
    company: "Sécurité XGuard",
    role: "Agent de Sécurité — Environnements à Haute Exigence",
    date: "Juin 2021 — Jan 2023",
    location: "Montréal, QC",
    desc: "Affectations multiples dans des environnements extrêmement variés — une expérience qui forge une polyvalence opérationnelle rare.",
    bullets: [
      "Centres de santé (clientèle à handicap mental)",
      "Urgences hospitalières",
      "Festivals et concerts",
      "Centres de vaccination (période pandémique)",
    ],
  },
  {
    company: "TindArt",
    role: "Développeur Web Frontend",
    date: "Juin — Août 2023",
    location: "Montréal, QC",
    desc: "Développement web au sein d'une startup montréalaise — contribution efficace dans un environnement agile et collaboratif.",
    bullets: [
      "Développement d'interfaces avec Vue.js et Ionic",
      "Rédaction de code propre, testable et documenté",
      "Collecte et raffinement des spécifications techniques",
      "Résolution de problèmes sur systèmes web en production",
    ],
  },
];

export default function Experience() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <section id="experience" className="px-15 py-[120px]">
      <SectionHeader num="02" title="Expérience" />

      <div className="flex flex-col gap-0.5">
        {jobs.map((job, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <div
              className={`border rounded-md bg-bg-dark2 transition-colors duration-300 overflow-hidden ${open === i ? "border-gold/25" : "border-white/[0.055] hover:border-white/10"}`}
            >
              {/* Header */}
              <button
                onClick={() => toggle(i)}
                className="w-full text-left px-8 py-6 grid grid-cols-[1fr_auto] gap-5 items-center relative cursor-pointer"
              >
                {/* Left accent bar */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-[3px] bg-gold"
                  animate={{ scaleY: open === i ? 1 : 0 }}
                  style={{ transformOrigin: "top" }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                />

                <div>
                  <p className="font-syne text-[14px] font-bold tracking-[.06em] uppercase mb-1.5">
                    {job.company}
                  </p>
                  <p className="text-[11px] text-dim tracking-[.05em]">{job.role}</p>
                </div>

                <div className="text-right">
                  <p className="text-[10px] tracking-[.18em] uppercase text-gold mb-1">
                    {job.date}
                  </p>
                  <p className="text-[10px] text-muted tracking-[.12em] uppercase mb-2">
                    {job.location}
                  </p>
                  <motion.span
                    className="text-[18px] text-dim inline-block"
                    animate={{ rotate: open === i ? 90 : 0, color: open === i ? "#c8a96e" : "#68625c" }}
                    transition={{ duration: 0.3 }}
                  >
                    ›
                  </motion.span>
                </div>
              </button>

              {/* Body */}
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="px-8 pb-7 border-t border-white/[0.055]">
                      <p className="text-[12px] leading-[1.85] text-dim my-5">
                        {job.desc}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                        {job.bullets.map((b, j) => (
                          <div
                            key={j}
                            className="flex gap-2.5 text-[11px] text-dim leading-[1.6] items-start"
                          >
                            <span className="text-gold shrink-0">—</span>
                            {b}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

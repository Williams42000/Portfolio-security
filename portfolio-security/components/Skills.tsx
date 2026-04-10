import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

const skills = [
  {
    icon: "🛡️",
    num: "01",
    title: "Sécurité & Surveillance",
    desc: "Gardiennage, surveillance multi-sites, gestion des accès et prévention des incidents. Application rigoureuse des protocoles dans des environnements variés et exigeants.",
    span: "col-span-6 md:col-span-3",
  },
  {
    icon: "⚡",
    num: "02",
    title: "Gestion de Crise",
    desc: "Gestion simultanée d'incidents critiques multiples, évaluation des risques en temps réel et coordination des interventions d'urgence avec sang-froid.",
    span: "col-span-6 md:col-span-3",
  },
  {
    icon: "👥",
    num: "03",
    title: "Leadership",
    desc: "Supervision d'équipes et coordination d'opérations terrain. Diriger, motiver et organiser les ressources humaines pour atteindre les objectifs.",
    span: "col-span-6 md:col-span-2",
  },
  {
    icon: "💻",
    num: "04",
    title: "Outils Numériques",
    desc: "Suite Microsoft Office, Trello, Notion, technologies web et systèmes de surveillance numérique. Adaptation rapide aux nouveaux outils.",
    span: "col-span-6 md:col-span-2",
  },
  {
    icon: "📝",
    num: "05",
    title: "Communication",
    desc: "Compétences rédactionnelles solides. Communication claire et professionnelle en français, espagnol et anglais.",
    span: "col-span-6 md:col-span-2",
  },
  {
    icon: "🔄",
    num: "06",
    title: "Adaptabilité",
    desc: "Polyvalence démontrée dans des milieux radicalement différents : hôpital, événementiel, banque, centres de réfugiés. Intégration rapide dans tout nouvel environnement.",
    span: "col-span-6",
  },
];

export default function Skills() {
  return (
    <section
      id="competences"
      className="px-15 py-[120px] border-t border-b border-white/[0.055] bg-bg-dark2"
    >
      <SectionHeader num="03" title="Compétences" />

      <div className="grid grid-cols-6 gap-4">
        {skills.map((sk, i) => (
          <Reveal
            key={i}
            className={sk.span}
            delay={(i % 3) * 0.08}
          >
            <div className="group relative h-full p-7 border border-white/[0.055] rounded-lg bg-surface hover:border-gold/25 transition-all duration-400 overflow-hidden">
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 0% 100%,rgba(200,169,110,.06),transparent 60%)" }}
              />

              <span className="absolute top-4 right-4 text-[10px] text-muted tracking-[.15em]">
                {sk.num}
              </span>

              <span className="inline-block text-[28px] mb-4 group-hover:scale-110 transition-transform duration-300">
                {sk.icon}
              </span>

              <p className="font-syne text-[12px] font-bold tracking-[.1em] uppercase mb-2.5">
                {sk.title}
              </p>

              <p className="text-[11px] leading-[1.75] text-dim">{sk.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

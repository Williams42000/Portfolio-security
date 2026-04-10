import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

const points = [
  { icon: "🏦", text: "Gestion d'incidents provenant de réseaux multi-sites (400+ succursales)" },
  { icon: "🚨", text: "Coordination en temps réel avec police, pompiers et premiers répondants" },
  { icon: "💻", text: "Compétences en développement web : Vue.js, NestJS, TypeScript" },
  { icon: "🌐", text: "Trilinguisme fonctionnel : français expert, espagnol avancé, anglais intermédiaire" },
];

export default function About() {
  return (
    <section
      id="profil"
      className="px-15 py-[120px] relative border-t border-b border-white/[0.055] bg-bg-dark2"
    >
      <SectionHeader num="01" title="Profil" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <Reveal>
          <p className="font-cormorant text-[23px] font-light leading-[1.65]">
            Professionnel de la sécurité actif à Montréal depuis plus de{" "}
            <em className="text-gold italic">quatre ans</em>, Williams cumule une
            expérience riche dans des environnements exigeants : centres de santé,
            institutions financières, hôtels, festivals et hôpitaux. Reconnu pour
            sa rigueur, sa capacité à gérer{" "}
            <em className="text-gold italic">plusieurs situations simultanément</em>{" "}
            et son sang-froid absolu en cas de crise.
          </p>
        </Reveal>

        <div className="flex flex-col gap-4">
          {points.map((pt, i) => (
            <Reveal key={i} delay={i * 0.1} direction="right">
              <div className="group flex gap-4 items-start p-5 border border-white/[0.055] rounded-md bg-surface hover:border-gold/30 hover:bg-gold/[0.04] transition-all duration-300 hover:translate-x-1">
                <div className="w-8 h-8 shrink-0 rounded bg-gold/10 border border-gold/20 flex items-center justify-center text-sm">
                  {pt.icon}
                </div>
                <p className="text-[11px] leading-[1.7] text-dim">{pt.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

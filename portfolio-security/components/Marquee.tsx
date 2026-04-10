const items = [
  "Sécurité Institutionnelle",
  "Gestion de Crise",
  "Surveillance Multi-Sites",
  "Leadership",
  "Vue.js · TypeScript",
  "NestJS · PostgreSQL",
  "Trilingue",
  "Permis BSP Valide",
  "Montréal, QC",
];

const doubled = [...items, ...items];

export default function Marquee() {
  return (
    <div className="overflow-hidden border-t border-b border-white/[0.055] bg-bg-dark2 py-3.5">
      <div
        className="flex w-max"
        style={{ animation: "marquee 30s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-7 px-7 text-[10px] tracking-[.25em] uppercase text-dim whitespace-nowrap"
          >
            {item}
            <span className="w-1 h-1 rounded-full bg-gold opacity-60 shrink-0" />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

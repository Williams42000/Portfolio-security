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
  "4+ Années",
  "400+ Sites",
];

const doubled = [...items, ...items];

export default function Marquee() {
  return (
    <div
      className="overflow-hidden py-4 relative"
      style={{ borderTop: "1px solid rgba(255,255,255,0.055)", borderBottom: "1px solid rgba(255,255,255,0.055)", background: "#050507" }}
    >
      {/* top line */}
      <div
        className="flex w-max"
        style={{ animation: "marquee-fwd 32s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <div
            key={`a${i}`}
            className="flex items-center gap-8 px-8 whitespace-nowrap"
            style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)" }}
          >
            {item}
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#c8a96e", opacity: 0.5, display: "inline-block" }} />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee-fwd {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

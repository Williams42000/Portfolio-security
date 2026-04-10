import Reveal from "./Reveal";

const links = [
  { icon: "✉",  label: "negisama42@gmail.com",  href: "mailto:negisama42@gmail.com" },
  { icon: "📞", label: "+1 263 382 6309",         href: "tel:+12633826309" },
  { icon: "📍", label: "Montréal, QC",             href: "#" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-15 py-[120px] min-h-[65vh] flex flex-col justify-center border-t border-white/[0.055] bg-bg-dark2"
    >
      <Reveal>
        <h2 style={{ fontFamily: "var(--font-cormorant-garamond), 'Cormorant Garamond', serif", fontSize: "clamp(44px, 6vw, 88px)", fontWeight: 300, lineHeight: 1.08 }} className="mb-12">
          Discutons de votre
          <br />
          prochain <em className="text-gold italic">projet.</em>
        </h2>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-green-soft/20 rounded-full text-[10px] tracking-[.18em] uppercase text-green-soft mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-green-soft animate-pulse" />
          Disponible immédiatement — Montréal &amp; région
        </div>
      </Reveal>

      <div className="flex flex-wrap gap-3.5">
        {links.map((l, i) => (
          <Reveal key={i} delay={0.25 + i * 0.1}>
            <a
              href={l.href}
              className="group flex items-center gap-3 px-6 py-4 border border-white/10 rounded-md bg-bg-dark3 text-[12px] tracking-[.08em] hover:border-gold hover:text-gold hover:bg-gold/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(200,169,110,0.10)]"
            >
              <span className="text-[17px]">{l.icon}</span>
              {l.label}
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

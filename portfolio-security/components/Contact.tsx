import Reveal from "./Reveal";
import MagneticButton from "./MagneticButton";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{
        background: "#050507",
        borderTop: "1px solid rgba(255,255,255,0.055)",
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "120px 56px",
      }}
    >
      {/* Large decorative number */}
      <div
        aria-hidden
        className="absolute right-[-2vw] top-1/2 -translate-y-1/2 select-none pointer-events-none"
        style={{
          fontFamily: "var(--font-cormorant-garamond), serif",
          fontSize: "clamp(160px, 25vw, 380px)",
          fontWeight: 300,
          color: "rgba(200,169,110,0.035)",
          lineHeight: 1,
          letterSpacing: "-0.04em",
        }}
      >
        07
      </div>

      <Reveal>
        <p
          className="mb-5"
          style={{
            fontFamily: "var(--font-syne-base), sans-serif",
            fontSize: 10,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "#c8a96e",
          }}
        >
          — Contact
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <h2
          className="mb-12"
          style={{
            fontFamily: "var(--font-cormorant-garamond), 'Cormorant Garamond', serif",
            fontSize: "clamp(48px, 7vw, 100px)",
            fontWeight: 300,
            lineHeight: 1.05,
            color: "#f0ece4",
          }}
        >
          Prêt à collaborer ?<br />
          <em style={{ color: "#c8a96e", fontStyle: "italic" }}>Parlons-en.</em>
        </h2>
      </Reveal>

      <Reveal delay={0.2}>
        <div
          className="inline-flex items-center gap-2.5 mb-12 px-5 py-2.5 rounded-full"
          style={{ border: "1px solid rgba(74,222,128,0.2)", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#4ade80" }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: "#4ade80", boxShadow: "0 0 6px #4ade80" }}
          />
          Disponible immédiatement — Montréal &amp; région
        </div>
      </Reveal>

      {/* Magnetic contact buttons */}
      <Reveal delay={0.3}>
        <div className="flex flex-wrap gap-4">
          <MagneticButton
            href="mailto:negisama42@gmail.com"
            className="flex items-center gap-3 px-7 py-4 rounded-full text-[12px] tracking-[.08em] transition-all duration-300"
            style={{
              border: "1px solid rgba(200,169,110,0.4)",
              color: "#c8a96e",
              background: "rgba(200,169,110,0.06)",
              letterSpacing: "0.08em",
            } as React.CSSProperties}
          >
            <span style={{ fontSize: 16 }}>✉</span>
            negisama42@gmail.com
          </MagneticButton>

          <MagneticButton
            href="tel:+12633826309"
            className="flex items-center gap-3 px-7 py-4 rounded-full text-[12px] tracking-[.08em] transition-all duration-300"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.6)",
              background: "transparent",
              letterSpacing: "0.08em",
            } as React.CSSProperties}
          >
            <span style={{ fontSize: 16 }}>📞</span>
            +1 263 382 6309
          </MagneticButton>

          <MagneticButton
            href="#"
            className="flex items-center gap-3 px-7 py-4 rounded-full text-[12px] tracking-[.08em] transition-all duration-300"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.6)",
              background: "transparent",
              letterSpacing: "0.08em",
            } as React.CSSProperties}
          >
            <span style={{ fontSize: 16 }}>📍</span>
            Montréal, QC
          </MagneticButton>
        </div>
      </Reveal>
    </section>
  );
}

"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const links = [
  { href: "#profil", label: "Profil" },
  { href: "#experience", label: "Expérience" },
  { href: "#competences", label: "Compétences" },
  { href: "#formation", label: "Formation" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const bg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(7,7,14,0)", "rgba(7,7,14,0.92)"]
  );
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const paddingY = useTransform(scrollY, [0, 80], [22, 14]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-[200] flex justify-between items-center px-15 backdrop-blur-[16px]"
      style={{ backgroundColor: bg, paddingTop: paddingY, paddingBottom: paddingY }}
    >
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.055]"
        style={{ opacity: borderOpacity }}
      />

      <span className="font-syne text-[13px] font-extrabold tracking-[.3em] text-gold uppercase">
        WMK
      </span>

      <ul className="hidden md:flex gap-9 list-none">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="relative text-[10px] tracking-[.22em] uppercase text-dim hover:text-[#e5e0d8] transition-colors duration-300 group"
            >
              {label}
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2 px-3.5 py-1.5 border border-green-soft/20 rounded-full text-[10px] tracking-[.18em] uppercase text-green-soft">
        <span className="w-1.5 h-1.5 rounded-full bg-green-soft animate-pulse" />
        Disponible
      </div>
    </motion.nav>
  );
}

import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Mono, Syne } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const syne = Syne({
  variable: "--font-syne-base",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Williams Mache Kemgni — Agent de Sécurité",
  description:
    "Portfolio professionnel — Agent de sécurité institutionnel avec 4+ ans d'expérience à Montréal. Compétences en surveillance, gestion de crise et développement web.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${dmMono.variable} ${syne.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}

# Portfolio — Williams Mache Kemgni

Portfolio professionnel développé avec **Next.js 16**, **TypeScript**, **Tailwind CSS v4** et **Framer Motion**.

---

## Stack technique

| Technologie   | Version | Rôle                                        |
|---------------|---------|---------------------------------------------|
| Next.js       | 16.2.3  | Framework React — App Router, static export |
| React         | 19.2    | Bibliothèque UI                             |
| TypeScript    | 5.x     | Typage statique strict                      |
| Tailwind CSS  | 4.x     | Utilitaires CSS — configuration CSS-first   |
| Framer Motion | 12.x    | Animations déclaratives                     |
| GitHub Actions| —       | CI/CD — déploiement automatique             |
| GitHub Pages  | —       | Hébergement statique                        |

---

## Architecture

```
portfolio-security/
├── app/
│   ├── layout.tsx        # Layout racine — polices Google, métadonnées SEO
│   ├── page.tsx          # Page principale — assemblage des sections
│   └── globals.css       # Tailwind v4 + tokens de design (@theme)
├── components/
│   ├── Cursor.tsx         # Curseur custom (useMotionValue + useSpring)
│   ├── Grain.tsx          # Overlay texture grain SVG
│   ├── Nav.tsx            # Navigation fixe — opacité scroll-based
│   ├── Hero.tsx           # Hero — clip reveal + compteurs animés
│   ├── Marquee.tsx        # Ticker horizontal infini
│   ├── About.tsx          # Section profil
│   ├── Experience.tsx     # Accordion avec AnimatePresence
│   ├── Skills.tsx         # Bento grid compétences
│   ├── Tech.tsx           # Chips technologies
│   ├── Languages.tsx      # Barres de langues animées + certifications
│   ├── Education.tsx      # Timeline formation
│   ├── Contact.tsx        # Section contact
│   ├── Footer.tsx         # Pied de page
│   ├── Reveal.tsx         # HOC — reveal au scroll (useInView)
│   └── SectionHeader.tsx  # En-tête de section animé
├── .github/workflows/
│   └── deploy.yml        # CI/CD GitHub Pages
└── next.config.ts        # Static export + basePath
```

---

## Animations Framer Motion

| Composant         | Technique                                              |
|-------------------|--------------------------------------------------------|
| `Cursor`          | `useMotionValue` + `useSpring` (stiffness/damping)     |
| `Hero` (nom)      | Clip reveal `y: "110%" → 0`, stagger 120ms            |
| `Hero` (stats)    | Compteurs RAF avec ease cubique                        |
| `Experience`      | `AnimatePresence` — `height: 0 → auto`                |
| `Nav`             | `useScroll` + `useTransform` — fond transparent→opaque |
| `Reveal`          | `useInView` — fade + translate au scroll               |
| `Languages`       | `width: 0 → n%` déclenché par `useInView`             |

---

## Design system (Tailwind v4 `@theme`)

```css
--color-gold:     #c8a96e   /* Accent éditorial */
--color-surface:  #131320   /* Cartes / surfaces */
--color-bg-dark:  #07070e   /* Fond principal    */
--font-cormorant: Cormorant Garamond (serif, titres)
--font-syne:      Syne (sans-serif, labels UI)
--font-mono:      DM Mono (monospace, corps de texte)
```

---

## Commandes

```bash
# Installation
cd portfolio-security && npm install

# Développement local
npm run dev
# → http://localhost:3000/Portfolio-security

# Build de production (génère out/)
npm run build

# Lint TypeScript
npm run lint
```

---

## Déploiement CI/CD

Chaque `git push` sur `main` déclenche automatiquement :
1. Build Next.js (static export → `out/`)
2. Upload sur GitHub Pages
3. Site en ligne sur `https://williams42000.github.io/Portfolio-security/`

**Pré-requis une seule fois** : Settings → Pages → Source → **GitHub Actions**

---

## Auteur

**Williams Mache Kemgni** — Agent de Sécurité Institutionnel · Montréal, QC  
negisama42@gmail.com · +1 263 382 6309

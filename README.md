# Portfolio — José Alejandro Téllez Prada

Portafolio personal: **React 19 + Vite + Tailwind v4 + Framer Motion + TypeScript**, bilingüe (ES/EN), one-page con secciones de buque insignia (Calaut.pro), proyectos, stack, trayectoria y contacto.

🔗 **En vivo:** https://joserraldo.github.io

---

## Stack

| Capa | Tecnología |
|---|---|
| UI | React 19, TypeScript, Tailwind CSS v4 (`@tailwindcss/vite`) |
| Motion | Framer Motion |
| Iconos | lucide-react |
| Build | Vite 8 (`base: './'`), `tsc -b` para typecheck |
| Lint | Oxlint |
| Deploy | GitHub Actions → GitHub Pages (`Joserraldo.github.io`) |

## Correr en local

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # tsc -b && vite build  → ./dist
npm run preview  # sirve el build
npm run lint     # oxlint
```

## Estructura

```
src/
├─ components/     # Hero, Flagship, Projects, Skills, Timeline, BeyondCode, Contact, Nav, Footer
│  ├─ accents.ts   # paleta por acento (gold, mint, coral, sky, violet, amber)
│  └─ motion.ts    # variantes compartidas de Framer Motion
├─ data/content.ts # ← TODO el contenido: perfil, copy ES/EN, stack, proyectos, hitos
├─ i18n/lang.tsx   # contexto de idioma (ES/EN) con persistencia
└─ index.css       # tokens de tema (snow, fog, gold, panel, void, edge…)
```

**Para editar el sitio se toca `src/data/content.ts`**: ahí viven los proyectos, la trayectoria y los textos en ambos idiomas. El copy está tipado con paridad ES/EN forzada por construcción.

## Deploy

El sitio publicado (`https://joserraldo.github.io`) vive en el repo [`Joserraldo/Joserraldo.github.io`](https://github.com/Joserraldo/Joserraldo.github.io) y se alimenta del build de este repo.

Al hacer push a `main`, el workflow `.github/workflows/deploy.yml` corre `npm ci && npm run build` y publica `./dist` en ese repo. Requiere una sola vez:

1. Crear un **fine-grained PAT** en GitHub → Settings → Developer settings → Fine-grained tokens, con acceso al repo `Joserraldo/Joserraldo.github.io` y permiso **Contents: Read and write**.
2. Guardarlo en este repo como secreto de Actions con el nombre **`PAGES_TOKEN`** (Settings → Secrets and variables → Actions).

Sin el secreto, el workflow compila pero avisa y no publica. Deploy manual alternativo: `npm run build` y subir el contenido de `dist/` al repo del sitio.

## Contacto

- GitHub: [@Joserraldo](https://github.com/Joserraldo)
- LinkedIn: [José Alejandro Téllez Prada](https://www.linkedin.com/in/jos%C3%A9-alejandro-t%C3%A9llez-prada-489312366/)
- Email: Joseale2006@gmail.com
- Calaut.pro: https://calaut.pro

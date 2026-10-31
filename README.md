# Portfolio — José Alejandro Téllez Prada

Portafolio personal: **React 19 + Vite + Tailwind v4 + Framer Motion + TypeScript**, bilingüe (ES/EN), one-page con CDE Conecta (ganador del UNAB Venture Challenge 2026), Calaut.pro, proyectos por categoría, stack, trayectoria y contacto.

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
├─ components/     # Hero, Conecta, Flagship, Projects, Skills, Timeline, BeyondCode, Contact, Nav, Footer
│  ├─ accents.ts   # paleta por acento (gold, mint, coral, sky, violet, amber)
│  └─ motion.ts    # variantes compartidas de Framer Motion
├─ data/content.ts # ← TODO el contenido: perfil, copy ES/EN, stack, proyectos, hitos
├─ i18n/lang.tsx   # contexto de idioma (ES/EN) con persistencia
└─ index.css       # tokens de tema (snow, fog, gold, panel, void, edge…)
```

**Para editar el sitio se toca `src/data/content.ts`**: ahí viven los proyectos, la trayectoria y los textos en ambos idiomas. El copy está tipado con paridad ES/EN forzada por construcción.

## Diseño (v4)

- Plano azul con marcador amarillo: la página es un plano porque el trabajo empieza planeando. Títulos en Big Shoulders Display, texto en Instrument Sans y datos en IBM Plex Mono.
- La pieza principal es el enrutador interactivo de `Conecta.tsx`: eliges una pregunta y se ve qué agente responde.
- Los proyectos van en pestañas por categoría (`categories` en `content.ts`) para que la página no sea eterna. Los repos privados no llevan enlace al código.
- Las capturas de CDE Conecta salen de `docs/pitch/capturas` de su repo; usan datos de prueba.

## CV

`public/cv/` tiene los PDF públicos en inglés y español, sin teléfono. El generador y las versiones con teléfono viven fuera del repo, junto a los CV originales (`generar_cv.py`), para no publicar el número.

## Deploy

El sitio publicado (`https://joserraldo.github.io`) vive en el repo [`Joserraldo/Joserraldo.github.io`](https://github.com/Joserraldo/Joserraldo.github.io) y se alimenta del build de este repo.

Al hacer push a `main`, el workflow `.github/workflows/deploy.yml` corre `npm ci && npm run build` y publica `./dist` en ese repo. Requiere una sola vez:

1. Crear un **fine-grained PAT** en GitHub → Settings → Developer settings → Fine-grained tokens, con acceso al repo `Joserraldo/Joserraldo.github.io` y permiso **Contents: Read and write**.
2. Guardarlo en este repo como secreto de Actions con el nombre **`PAGES_TOKEN`** (Settings → Secrets and variables → Actions).

Sin el secreto, el workflow compila pero avisa y no publica. Deploy manual alternativo: compilar con `npx vite build --outDir <carpeta-temporal>` (porque `dist/` es un clon del repo del sitio y `vite build` lo vaciaría), copiar el resultado a `dist/` sin tocar `dist/.git` y hacer push desde ahí.

## Contacto

- GitHub: [@Joserraldo](https://github.com/Joserraldo)
- LinkedIn: [José Alejandro Téllez Prada](https://www.linkedin.com/in/jos%C3%A9-alejandro-t%C3%A9llez-prada-489312366/)
- Email: Joseale2006@gmail.com
- Calaut.pro: https://calaut.pro

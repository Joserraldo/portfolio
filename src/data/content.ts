import type { L } from '../i18n/lang'

export type { L }

/* ────────────────────────── profile facts ────────────────────────── */

export const PROFILE = {
  name: 'José Alejandro Téllez Prada',
  handle: '@Joserraldo',
  location: 'Bucaramanga, Colombia',
  email: 'Joseal…006@gmail.com',
  github: 'https://github.com/Joserraldo',
  linkedin:
    'https://www.linkedin.com/in/jos%C3%A9-alejandro-t%C3%A9llez-prada-489312366/',
  instagram: 'https://instagram.com/Joseale106',
  discord: 'joserraldo',
} as const

/* ────────────────────────── copy (ES + EN) ───────────────────────── */
/* One nested object → ES/EN key parity guaranteed by construction. */

export const copy = {
  nav: {
    about: { es: 'Sobre mí', en: 'About' },
    stack: { es: 'Stack', en: 'Stack' },
    projects: { es: 'Proyectos', en: 'Projects' },
    timeline: { es: 'Trayectoria', en: 'Timeline' },
    contact: { es: 'Contacto', en: 'Contact' },
    menu: { es: 'Abrir menú', en: 'Open menu' },
    close: { es: 'Cerrar menú', en: 'Close menu' },
  },
  hero: {
    role: {
      es: 'Systems Engineering Student @ UNAB',
      en: 'Systems Engineering Student @ UNAB',
    },
    tagline: {
      es: 'Full-Stack Developer & Founder · Calaut.pro',
      en: 'Full-Stack Developer & Founder · Calaut.pro',
    },
    blurb: {
      es: 'Construyo software del silicio al navegador: SaaS B2B, IA/ML, IoT embebido y cloud. Estudiante de Ingeniería de Sistemas en la UNAB, basado en Bucaramanga, Colombia.',
      en: 'I build software from silicon to browser: B2B SaaS, AI/ML, embedded IoT and cloud. Systems Engineering student at UNAB, based in Bucaramanga, Colombia.',
    },
    ctaProjects: { es: 'Ver proyectos', en: 'See projects' },
    ctaContact: { es: 'Hablemos', en: 'Let’s talk' },
    fun: {
      es: 'Cinturón negro de Taekwondo · Disney Alumni ✨ · Armador de PCs',
      en: 'Taekwondo black belt · Disney Alumni ✨ · PC builder',
    },
    altPhoto: { es: 'Retrato de José Alejandro Téllez Prada', en: 'Portrait of José Alejandro Téllez Prada' },
  },
  about: {
    title: { es: 'Sobre mí', en: 'About me' },
    lead: {
      es: 'Ingeniero en formación, fundador en ejercicio.',
      en: 'Engineer in training, founder in practice.',
    },
    p1: {
      es: 'Soy José Alejandro. Estudio Ingeniería de Sistemas en la UNAB y fundé Calaut.pro, una plataforma SaaS B2B que hoy construyo y escalo yo mismo — del diseño de arquitectura al deploy.',
      en: 'I’m José Alejandro. I study Systems Engineering at UNAB and founded Calaut.pro, a B2B SaaS platform I build and scale hands-on — from architecture design all the way to deploy.',
    },
    p2: {
      es: 'Trabajo cómodo en toda la pila: firmware en ESP32, pipelines de datos, APIs y frontends pulidos. Entregué un prototipo funcional en el Hackathon Colombia 5.0 («Factory OS») y viví un entorno multicultural intensivo como Alumni del Disney Cultural Exchange Program.',
      en: 'I work comfortably across the whole stack: ESP32 firmware, data pipelines, APIs and polished frontends. I shipped a working prototype at Hackathon Colombia 5.0 (“Factory OS”) and thrived in a high-intensity multicultural environment as a Disney Cultural Exchange Program alumnus.',
    },
    trivia: {
      tkdTitle: { es: 'Taekwondo', en: 'Taekwondo' },
      tkdBody: {
        es: 'Cinturón negro y atleta de alto rendimiento. La disciplina del tatami vive en mi código.',
        en: 'Black belt and high-performance athlete. The discipline of the tatami lives in my code.',
      },
      disTitle: { es: 'Disney Alumni', en: 'Disney Alumni' },
      disBody: {
        es: 'Cultural Exchange Program: trabajo real en equipos multiculturales de alto estándar.',
        en: 'Cultural Exchange Program: real work in high-standard multicultural teams.',
      },
      hwTitle: { es: 'Hardware', en: 'Hardware' },
      hwBody: {
        es: 'Ensamblo PCs a medida por gusto — del cableado al overclock.',
        en: 'I build custom PCs for fun — from cable management to overclocking.',
      },
      owTitle: { es: 'Gaming', en: 'Gaming' },
      owBody: {
        es: 'Fan de Overwatch. Estrategia, sinergia y review de partidas.',
        en: 'Overwatch fan. Strategy, synergy and match reviews.',
      },
    },
  },
  skills: {
    title: { es: 'Stack', en: 'Stack' },
    lead: {
      es: 'Las herramientas que uso a diario, del silicio a la nube.',
      en: 'The tools I use daily, from silicon to cloud.',
    },
  },
  projects: {
    title: { es: 'Proyectos', en: 'Projects' },
    lead: {
      es: 'Diez cosas que construí — casi todo en público.',
      en: 'Ten things I built — most of it in public.',
    },
    viewCode: { es: 'Código', en: 'Code' },
    visit: { es: 'Visitar', en: 'Visit' },
    flagship: { es: 'Buque insignia', en: 'Flagship' },
  },
  timeline: {
    title: { es: 'Trayectoria', en: 'Timeline' },
    lead: {
      es: 'Hitos reales, en orden.',
      en: 'Real milestones, in order.',
    },
    now: { es: 'Hoy', en: 'Now' },
  },
  contact: {
    title: { es: 'Contacto', en: 'Contact' },
    lead: {
      es: '¿Una idea, un proyecto o un build de PC? Escríbeme.',
      en: 'An idea, a project, or a PC build? Write me.',
    },
    mailCta: { es: 'Enviar email', en: 'Send email' },
    discordNote: { es: 'DM abierta', en: 'DMs open' },
  },
  footer: {
    built: {
      es: 'Hecho con React, Tailwind v4 y Framer Motion.',
      en: 'Built with React, Tailwind v4 and Framer Motion.',
    },
    rights: { es: 'Todos los derechos reservados.', en: 'All rights reserved.' },
  },
} as const

/* ────────────────────────── skills groups ────────────────────────── */

export interface SkillGroup {
  icon: 'lang' | 'backend' | 'frontend' | 'mobile' | 'iot' | 'cloud' | 'data' | 'ai'
  title: L
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    icon: 'lang',
    title: { es: 'Lenguajes', en: 'Languages' },
    items: ['TypeScript', 'JavaScript', 'Kotlin', 'Python', 'C', 'C++', 'PHP', 'Java', 'Bash', 'PowerShell'],
  },
  {
    icon: 'backend',
    title: { es: 'Backend', en: 'Backend' },
    items: ['Node.js', 'Express', 'NestJS', 'Laravel', 'Django', 'FastAPI', 'REST', 'WebSockets'],
  },
  {
    icon: 'frontend',
    title: { es: 'Frontend', en: 'Frontend' },
    items: ['React', 'Next.js', 'Tailwind', 'Vue', 'Vite'],
  },
  {
    icon: 'mobile',
    title: { es: 'Mobile & Desktop', en: 'Mobile & Desktop' },
    items: ['Jetpack Compose', 'React Native', 'Expo', 'Electron'],
  },
  {
    icon: 'iot',
    title: { es: 'IoT & Embebido', en: 'IoT & Embedded' },
    items: ['Arduino', 'ESP32', 'MQTT', 'Azure IoT'],
  },
  {
    icon: 'cloud',
    title: { es: 'Cloud & DevOps', en: 'Cloud & DevOps' },
    items: ['Azure', 'GCP', 'AWS', 'Firebase', 'Vercel', 'Docker', 'Kubernetes', 'Jenkins', 'Nginx'],
  },
  {
    icon: 'data',
    title: { es: 'Datos', en: 'Data' },
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'Firestore'],
  },
  {
    icon: 'ai',
    title: { es: 'IA / ML', en: 'AI / ML' },
    items: ['TensorFlow', 'PyTorch', 'YOLO', 'Notebooks'],
  },
]

/* ────────────────────────── projects (10, real URLs) ─────────────── */

export interface Project {
  name: string
  url: string
  tech: string
  blurb: L
  featured?: boolean
}

export const projects: Project[] = [
  {
    name: 'Calaut.pro',
    url: 'https://calaut.pro',
    tech: 'SaaS · Full-Stack',
    featured: true,
    blurb: {
      es: 'Mi propia plataforma B2B: la diseño, la construyo y la escalo — arquitectura, backend, frontend y deploy.',
      en: 'My own B2B platform: I design, build and scale it — architecture, backend, frontend and deploy.',
    },
  },
  {
    name: 'FactoryFlow-ERP',
    url: 'https://github.com/Joserraldo/FactoryFlow-ERP',
    tech: 'TypeScript',
    blurb: {
      es: 'ERP de ingeniería de software, heredero de «Factory OS» (Hackathon Colombia 5.0).',
      en: 'A software-engineering ERP, successor of “Factory OS” (Hackathon Colombia 5.0).',
    },
  },
  {
    name: 'clipboard-file-injector',
    url: 'https://github.com/Joserraldo/clipboard-file-injector',
    tech: 'JavaScript · Chrome MV3',
    blurb: {
      es: 'Extensión que inyecta imágenes del portapapeles directo en inputs de archivo, sin descargas.',
      en: 'Extension that injects clipboard images straight into file inputs — no downloads.',
    },
  },
  {
    name: 'ytdownloader',
    url: 'https://github.com/Joserraldo/ytdownloader',
    tech: 'Python · ffmpeg',
    blurb: {
      es: 'App portable de Windows: MP4 a máxima calidad o MP3 320 kbps, con ffmpeg embebido.',
      en: 'Portable Windows app: max-quality MP4 or 320 kbps MP3, with bundled ffmpeg.',
    },
  },
  {
    name: 'proyecto-IA-MetroPT-3',
    url: 'https://github.com/Joserraldo/proyecto-IA-MetroPT-3',
    tech: 'Python · Streamlit · Expo',
    blurb: {
      es: 'Proyecto final de IA: predicción para un metro con notebooks, dashboard y app móvil.',
      en: 'Final AI project: metro prediction with notebooks, a dashboard and a mobile app.',
    },
  },
  {
    name: 'UnabStore',
    url: 'https://github.com/Joserraldo/UnabStore',
    tech: 'Kotlin · Android',
    blurb: {
      es: 'Tienda nativa Android escrita en Kotlin.',
      en: 'A native Android storefront written in Kotlin.',
    },
  },
  {
    name: 'HormigaCulonaGame',
    url: 'https://github.com/Joserraldo/HormigaCulonaGame',
    tech: 'Unity · C#',
    blurb: {
      es: 'Juego multimedia en Unity con shaders propios.',
      en: 'A multimedia game in Unity with custom shaders.',
    },
  },
  {
    name: 'Iot_learning',
    url: 'https://github.com/Joserraldo/Iot_learning',
    tech: 'C++ · ESP32 · Azure IoT',
    blurb: {
      es: 'Laboratorio de IoT embebido: ESP32, Arduino, MQTT y Azure IoT.',
      en: 'Embedded IoT lab: ESP32, Arduino, MQTT and Azure IoT.',
    },
  },
  {
    name: 'corazon · diabetes',
    url: 'https://github.com/Joserraldo/corazon',
    tech: 'Python · ML',
    blurb: {
      es: 'Notebooks de ML para predicción de cardiopatías y diabetes.',
      en: 'ML notebooks for heart-disease and diabetes prediction.',
    },
  },
  {
    name: 'trade-upb-connect',
    url: 'https://github.com/Joserraldo/trade-upb-connect',
    tech: 'TypeScript',
    blurb: {
      es: 'Plataforma educativa de trading — mi trabajo sobre una base compartida.',
      en: 'An educational trading platform — my work on a shared base.',
    },
  },
]

/* ────────────────────────── timeline (4) ─────────────────────────── */

export interface Milestone {
  icon: 'rocket' | 'trophy' | 'sparkles' | 'cap'
  title: L
  org: L
  body: L
  when: L
}

export const milestones: Milestone[] = [
  {
    icon: 'rocket',
    title: { es: 'Founder & Full-Stack Dev', en: 'Founder & Full-Stack Dev' },
    org: { es: 'Calaut.pro', en: 'Calaut.pro' },
    body: {
      es: 'Construyendo y escalando mi plataforma SaaS B2B, del diseño al deploy.',
      en: 'Building and scaling my B2B SaaS platform, design through deploy.',
    },
    when: { es: 'Actual', en: 'Current' },
  },
  {
    icon: 'trophy',
    title: { es: 'Hackathon Colombia 5.0', en: 'Hackathon Colombia 5.0' },
    org: { es: '«Factory OS»', en: '“Factory OS”' },
    body: {
      es: 'Prototipo funcional de ERP entregado en tiempo récord, bajo presión.',
      en: 'A working ERP prototype delivered in record time, under pressure.',
    },
    when: { es: 'Hito', en: 'Milestone' },
  },
  {
    icon: 'sparkles',
    title: { es: 'Disney Cultural Exchange', en: 'Disney Cultural Exchange' },
    org: { es: 'Alumni ✨', en: 'Alumni ✨' },
    body: {
      es: 'Trabajo y comunicación en un entorno multicultural exigente.',
      en: 'Worked and communicated in a demanding multicultural environment.',
    },
    when: { es: 'Programa', en: 'Program' },
  },
  {
    icon: 'cap',
    title: { es: 'Ingeniería de Sistemas', en: 'Systems Engineering' },
    org: { es: 'UNAB', en: 'UNAB' },
    body: {
      es: 'Universidad Autónoma de Bucaramanga — mi base como ingeniero.',
      en: 'Universidad Autónoma de Bucaramanga — my engineering foundation.',
    },
    when: { es: 'En curso', en: 'In progress' },
  },
]

import type { L } from '../i18n/lang'

export type { L }

/* ────────────────────────── profile facts ────────────────────────── */

export const PROFILE = {
  name: 'José Alejandro Téllez Prada',
  handle: '@Joserraldo',
  location: 'Bucaramanga, Colombia',
  email: 'Joseale2006@gmail.com',
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
    beyond: { es: 'Más allá', en: 'Beyond' },
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
    badges: [
      { icon: 'medal', label: { es: 'Cinturón negro TKD', en: 'TKD black belt' }, accent: 'gold' },
      { icon: 'sparkles', label: { es: 'Disney Alumni', en: 'Disney Alumni' }, accent: 'amber' },
      { icon: 'cpu', label: { es: 'Armador de PCs', en: 'PC builder' }, accent: 'sky' },
      { icon: 'gamepad', label: { es: 'Overwatch', en: 'Overwatch' }, accent: 'coral' },
    ] as { icon: 'medal' | 'sparkles' | 'cpu' | 'gamepad'; label: L; accent: ProjectAccent }[],
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
    term: {
      prompt: { es: 'joserraldo@unab:~$ whoami', en: 'joserraldo@unab:~$ whoami' },
      out: [
        { es: 'fundador → diseñando Calaut.pro a las 2am y cumpliendo.', en: 'founder → designing Calaut.pro at 2am and shipping.' },
        { es: 'atleta → el tatami también es mi sala de juntas.', en: 'athlete → the tatami is also my boardroom.' },
        { es: 'alumni Disney → estándares internacionales de fábrica.', en: 'Disney alumni → international standards by default.' },
        { es: 'builder → PCs ajenas incluidas.', en: 'builder → other people’s PCs included.' },
      ] as L[],
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
      es: 'Construido de verdad, casi todo en público.',
      en: 'Real builds, most of it in public.',
    },
    viewCode: { es: 'Código', en: 'Code' },
    visit: { es: 'Visitar', en: 'Visit' },
    flagship: { es: 'Buque insignia', en: 'Flagship' },
    building: { es: 'En curso', en: 'In progress' },
  },
  flagship: {
    kicker: { es: 'El proyecto que es mi bebé', en: 'The project I’m raising' },
    title: { es: 'Calaut.pro', en: 'Calaut.pro' },
    cta: { es: 'Abrir Calaut.pro', en: 'Open Calaut.pro' },
    stackLabel: { es: 'Bajo el capó', en: 'Under the hood' },
    stack: 'TypeScript · Next.js · Firebase · Google Calendar API · WhatsApp links · PWA',
    altShot: {
      es: 'Captura de la landing de Calaut.pro',
      en: 'Screenshot of the Calaut.pro landing page',
    },
  },
  beyond: {
    title: { es: 'Más allá del código', en: 'Beyond the code' },
    lead: {
      es: 'Lo que me forma tanto como un buen commit.',
      en: 'What shapes me as much as a good commit.',
    },
    beltNote: { es: 'Disciplina negra, sentido del humor dorado.', en: 'Black-belt discipline, gold-belt humor.' },
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

/* ────────────────────────── projects (real URLs) ─────────────── */

export type ProjectAccent = 'gold' | 'mint' | 'coral' | 'sky' | 'violet' | 'amber'

export interface Project {
  name: string
  url?: string
  code?: string
  tech: string
  icon:
    | 'calendar' | 'bus' | 'factory' | 'graduation' | 'brain'
    | 'clipboard' | 'download' | 'wallet' | 'android' | 'gamepad'
    | 'radio' | 'heart' | 'wrench' | 'shirt' | 'egg'
  kind: L
  accent: ProjectAccent
  role: L
  when: L
  blurb: L
  featured?: boolean
}

export const projects: Project[] = [
  {
    name: 'Calaut.pro',
    url: 'https://calaut.pro',
    tech: 'SaaS · Full-Stack · PWA',
    featured: true,
    icon: 'calendar',
    accent: 'gold',
    kind: { es: 'Buque insignia', en: 'Flagship' },
    role: { es: 'Founder & dev único', en: 'Founder & sole dev' },
    when: { es: 'nov 2025 — hoy', en: 'Nov 2025 — now' },
    blurb: {
      es: 'Plataforma B2B de agendamiento multi-tenant con privacidad por roles, sync bidireccional con Google Calendar y automatización omnicanal por WhatsApp y email.',
      en: 'Multi-tenant B2B scheduling platform with role-based privacy, two-way Google Calendar sync and omnichannel WhatsApp + email automation.',
    },
  },
  {
    name: 'BUS UNAB · BUCARATRANSIT',
    tech: 'Kotlin Multiplatform · Laravel',
    icon: 'bus',
    accent: 'sky',
    kind: { es: 'En construcción', en: 'Building' },
    role: { es: 'Equipo UNAB', en: 'UNAB team' },
    when: { es: '2026 — en curso', en: '2026 — in progress' },
    blurb: {
      es: 'App Kotlin Multiplatform con backend Laravel white-label multi-tenant: cada organización descarga su marca y logo desde la API. Rutas y horarios del campus, en construcción.',
      en: 'Kotlin Multiplatform app with a white-label multi-tenant Laravel backend: every organization pulls its own brand and logo from the API. Campus routes and schedules, under construction.',
    },
  },
  {
    name: 'Factory OS → FactoryFlow-ERP',
    url: 'https://factoryos-beta.netlify.app',
    code: 'https://github.com/Joserraldo/FactoryFlow-ERP',
    tech: 'TypeScript · IoT simulado',
    icon: 'factory',
    accent: 'coral',
    kind: { es: 'Hackathon → ERP', en: 'Hackathon → ERP' },
    role: { es: 'Frontend & arquitectura', en: 'Frontend & architecture' },
    when: { es: 'abr 2026', en: 'Apr 2026' },
    blurb: {
      es: 'MVP de monitoreo industrial en tiempo real (Colombia 5.0 Hackathon): anomalías de máquinas, alertas y consulta en lenguaje natural — hoy evolucionando a un ERP completo.',
      en: 'Real-time industrial monitoring MVP (Colombia 5.0 Hackathon): machine anomalies, alerts and natural-language queries — now evolving into a full ERP.',
    },
  },
  {
    name: 'Nexia+',
    url: 'https://nexia-firebase.web.app',
    tech: 'Firebase · Auth · RTDB',
    icon: 'graduation',
    accent: 'violet',
    kind: { es: 'Impacto social', en: 'Social impact' },
    role: { es: 'Backend & arquitectura', en: 'Backend & architecture' },
    when: { es: 'oct 2025', en: 'Oct 2025' },
    blurb: {
      es: 'Plataforma educativa para una fundación sin ánimo de lucro, construida en hackathon competitivo: auth segura y base de datos en tiempo real.',
      en: 'Educational platform for a non-profit foundation, built in a competitive hackathon: secure auth and real-time database.',
    },
  },
  {
    name: 'proyecto-IA-MetroPT-3',
    url: 'https://github.com/Joserraldo/proyecto-IA-MetroPT-3',
    tech: 'Python · Streamlit · Expo',
    icon: 'brain',
    accent: 'mint',
    kind: { es: 'IA aplicada', en: 'Applied AI' },
    role: { es: 'Proyecto final', en: 'Final project' },
    when: { es: '2025', en: '2025' },
    blurb: {
      es: 'Predicción para un metro: notebooks de ML, dashboard y app móvil en un solo entregable.',
      en: 'Metro demand prediction: ML notebooks, dashboard and mobile app in one deliverable.',
    },
  },
  {
    name: 'clipboard-file-injector',
    url: 'https://github.com/Joserraldo/clipboard-file-injector',
    tech: 'JavaScript · Chrome MV3',
    icon: 'clipboard',
    accent: 'amber',
    kind: { es: 'Herramienta', en: 'Tool' },
    role: { es: 'Solo', en: 'Solo' },
    when: { es: '2026', en: '2026' },
    blurb: {
      es: 'Extensión que inyecta imágenes del portapapeles directo en inputs de archivo, sin descargas.',
      en: 'Extension that injects clipboard images straight into file inputs — no downloads.',
    },
  },
  {
    name: 'ytdownloader',
    url: 'https://github.com/Joserraldo/ytdownloader',
    tech: 'Python · ffmpeg',
    icon: 'download',
    accent: 'amber',
    kind: { es: 'Herramienta', en: 'Tool' },
    role: { es: 'Solo', en: 'Solo' },
    when: { es: '2026', en: '2026' },
    blurb: {
      es: 'App portable de Windows: MP4 a máxima calidad o MP3 320 kbps, con ffmpeg embebido.',
      en: 'Portable Windows app: max-quality MP4 or 320 kbps MP3, with bundled ffmpeg.',
    },
  },
  {
    name: 'budget_laravel',
    url: 'https://github.com/Joserraldo/budget_laravel',
    tech: 'PHP · Laravel · MySQL',
    icon: 'wallet',
    accent: 'mint',
    kind: { es: 'Monolito', en: 'Monolith' },
    role: { es: 'Duo · taller de arquitectura', en: 'Duo · architecture workshop' },
    when: { es: '2026', en: '2026' },
    blurb: {
      es: 'Aplicación monolítica de control financiero personal, extendida a medida en el taller de arquitectura.',
      en: 'Personal-finance monolith app, custom-extended in the architecture workshop.',
    },
  },
  {
    name: 'UnabStore',
    url: 'https://github.com/Joserraldo/UnabStore',
    tech: 'Kotlin · Android',
    icon: 'android',
    accent: 'sky',
    kind: { es: 'Nativo', en: 'Native' },
    role: { es: 'Académico', en: 'Academic' },
    when: { es: '2025', en: '2025' },
    blurb: {
      es: 'Tienda nativa Android escrita en Kotlin.',
      en: 'A native Android storefront written in Kotlin.',
    },
  },
  {
    name: 'HormigaCulonaGame',
    url: 'https://github.com/Joserraldo/HormigaCulonaGame',
    tech: 'Unity · C# · shaders',
    icon: 'gamepad',
    accent: 'coral',
    kind: { es: 'Juego', en: 'Game' },
    role: { es: 'Multimedios', en: 'Multimedia course' },
    when: { es: '2025', en: '2025' },
    blurb: {
      es: 'Juego multimedia en Unity con shaders propios.',
      en: 'A multimedia game in Unity with custom shaders.',
    },
  },
  {
    name: 'Iot_learning',
    url: 'https://github.com/Joserraldo/Iot_learning',
    tech: 'C++ · ESP32 · Azure IoT',
    icon: 'radio',
    accent: 'violet',
    kind: { es: 'Laboratorio', en: 'Lab' },
    role: { es: 'Self-taught', en: 'Self-taught' },
    when: { es: '2026', en: '2026' },
    blurb: {
      es: 'Laboratorio de IoT embebido: ESP32, Arduino, MQTT y Azure IoT.',
      en: 'Embedded IoT lab: ESP32, Arduino, MQTT and Azure IoT.',
    },
  },
  {
    name: 'corazon · diabetes',
    url: 'https://github.com/Joserraldo/corazon',
    tech: 'Python · ML',
    icon: 'heart',
    accent: 'coral',
    kind: { es: 'Data / ML', en: 'Data / ML' },
    role: { es: 'Investigación', en: 'Research' },
    when: { es: '2025', en: '2025' },
    blurb: {
      es: 'Notebooks de ML para predicción de cardiopatías y diabetes.',
      en: 'ML notebooks for heart-disease and diabetes prediction.',
    },
  },
  {
    name: 'hidrolavados.com',
    url: 'https://hidrolavados.com',
    tech: 'Next.js · Firebase · Supabase',
    icon: 'wrench',
    accent: 'sky',
    kind: { es: 'En producción', en: 'Live' },
    role: { es: 'Dev único · negocio familiar', en: 'Sole dev · family business' },
    when: { es: '2026', en: '2026' },
    blurb: {
      es: 'Reconstrucción del sitio del taller de hidrolavadoras de mi papá (Kärcher Gold Partner): catálogo, alquileres nativos, panel del taller con boletas y fotos WebP, y SEO local.',
      en: 'Rebuild of my dad’s pressure-washer shop site (Kärcher Gold Partner): catalog, native rentals, workshop panel with receipts and WebP photos, plus local SEO.',
    },
  },
  {
    name: 'Bordados Zapatoca',
    url: 'https://bordados-zapatoca.vercel.app',
    tech: 'Next.js · carrito + WhatsApp',
    icon: 'shirt',
    accent: 'coral',
    kind: { es: 'En producción', en: 'Live' },
    role: { es: 'Dev único · fundación familiar', en: 'Sole dev · family foundation' },
    when: { es: '2026', en: '2026' },
    blurb: {
      es: 'Tienda de bordados a mano de la fundación de mi tía: blusas, bolsos y fundas con carrito y checkout directo por WhatsApp, sin backend.',
      en: 'My aunt’s foundation handmade-embroidery storefront: blouses, bags and covers with a cart and direct WhatsApp checkout — no backend.',
    },
  },
  {
    name: 'damaged_eggs_CNN',
    url: 'https://github.com/Joserraldo/damaged_eggs_CNN',
    tech: 'YOLOv8n · FastAPI · Expo',
    icon: 'egg',
    accent: 'violet',
    kind: { es: 'Visión por computador', en: 'Computer vision' },
    role: { es: 'Dupla UNAB', en: 'UNAB duo' },
    when: { es: '2026', en: '2026' },
    blurb: {
      es: 'Detección de huevos good/crack con YOLOv8n entrenado en Colab, API FastAPI sobre EC2 y app Expo para capturar desde el celular.',
      en: 'Good/crack egg detection with YOLOv8n trained on Colab, a FastAPI service on EC2 and an Expo app for phone capture.',
    },
  },
  {
    name: 'urban-mobility-hub',
    tech: 'TypeScript · PWA · YOLOv8n-ONNX',
    icon: 'bus',
    accent: 'mint',
    kind: { es: 'En curso', en: 'Building' },
    role: { es: 'Proyecto propio', en: 'Own project' },
    when: { es: '2026 — en curso', en: '2026 — in progress' },
    blurb: {
      es: 'Plataforma PWA multimodal de micromovilidad: logística, alquiler y venta de vehículos urbanos, con detección de casco corriendo en el navegador.',
      en: 'PWA multimodal micromobility platform: logistics, rental and sale of urban vehicles, with helmet detection running in the browser.',
    },
  },
]

/* ────────────────────────── flagship (Calaut.pro) ────────────────── */

export const flagship = {
  name: 'Calaut.pro',
  url: 'https://calaut.pro',
  tagline: {
    es: 'Tu negocio, en piloto automático.',
    en: 'Your business, on autopilot.',
  },
  intro: {
    es: 'Lo diseñé, lo construyo y lo escalo yo mismo — del multi-tenant al deploy.',
    en: 'I designed it, I build it, I scale it — multi-tenant through deploy.',
  },
  bullets: [
    {
      es: 'Arquitectura SaaS B2B multi-tenant con privacidad por roles: agendas aisladas y salas privadas entre colegas.',
      en: 'Multi-tenant B2B SaaS architecture with role-based privacy: isolated agendas and hidden colleague rooms.',
    },
    {
      es: 'Sincronización bidireccional con Google Calendar, sin dobles reservas.',
      en: 'Bi-directional Google Calendar synchronization — no double bookings.',
    },
    {
      es: 'Automatización omnicanal: confirmaciones, recordatorios a 24h y loops de reseñas por WhatsApp dinámico y email.',
      en: 'Omnichannel automation: confirmations, 24h reminders and review loops via dynamic WhatsApp links and email.',
    },
    {
      es: 'CRM con perfilado automático de pacientes y récord clínico opcional cumpliendo Res. 2275 y 1995 (Colombia).',
      en: 'CRM with automatic patient profiling and optional clinical records compliant with Colombian Res. 2275 & 1995.',
    },
    {
      es: 'PWA instalable sin App Store: modo offline y carga por debajo de 1.2 segundos.',
      en: 'App-Store-free PWA: offline capabilities and sub-1.2-second load times.',
    },
    {
      es: 'Iteración con usuarios reales en medicina, estética, legal y educación — eliminando fricción de reserva.',
      en: 'Iterated with real users across medical, aesthetics, legal and education — eliminating booking friction.',
    },
  ] as L[],
  metrics: [
    { value: '99.9%', label: { es: 'uptime', en: 'uptime' } },
    { value: '<1.2 s', label: { es: 'carga PWA', en: 'PWA load' } },
    { value: '4', label: { es: 'industrias activas', en: 'live industries' } },
    { value: '2-way', label: { es: 'sync Google Calendar', en: 'Google Calendar sync' } },
  ],
}


/* ────────────────────────── timeline (4) ─────────────────────────── */

export interface Milestone {
  icon: 'rocket' | 'trophy' | 'sparkles' | 'cap' | 'bus' | 'factory' | 'medal' | 'graduation'
  accent: ProjectAccent
  title: L
  org: L
  body: L
  when: L
}

export const milestones: Milestone[] = [
  {
    icon: 'rocket',
    accent: 'gold',
    title: { es: 'Founder & Full-Stack Dev', en: 'Founder & Full-Stack Dev' },
    org: { es: 'Calaut.pro', en: 'Calaut.pro' },
    body: {
      es: 'SaaS B2B multi-tenant propio: arquitectura, Google Calendar sync, automatización WhatsApp/email y compliance de salud — del diseño al deploy.',
      en: 'My own multi-tenant B2B SaaS: architecture, Google Calendar sync, WhatsApp/email automation and health compliance — design through deploy.',
    },
    when: { es: 'nov 2025 — hoy', en: 'Nov 2025 — now' },
  },
  {
    icon: 'bus',
    accent: 'sky',
    title: { es: 'Movilidad universitaria', en: 'Campus mobility' },
    org: { es: 'BUS UNAB', en: 'BUS UNAB' },
    body: {
      es: 'Revolucionando el transporte del campus: rutas y horarios universitarios, en construcción.',
      en: 'Revolutionizing campus transport: university routes and schedules — under construction.',
    },
    when: { es: '2026 — en curso', en: '2026 — in progress' },
  },
  {
    icon: 'factory',
    accent: 'coral',
    title: { es: 'Hackathon Colombia 5.0', en: 'Colombia 5.0 Hackathon' },
    org: { es: '«Factory OS»', en: '“Factory OS”' },
    body: {
      es: 'MVP funcional de monitoreo industrial con sensores simulados, alertas y consultas en lenguaje natural — entregado contra reloj.',
      en: 'Working industrial-monitoring MVP with simulated sensors, alerts and natural-language queries — delivered against the clock.',
    },
    when: { es: 'abr 2026', en: 'Apr 2026' },
  },
  {
    icon: 'graduation',
    accent: 'violet',
    title: { es: 'Hackathon de impacto social', en: 'Social-impact hackathon' },
    org: { es: 'Nexia+', en: 'Nexia+' },
    body: {
      es: 'Plataforma educativa para una fundación: backend Firebase, auth segura y base de datos en tiempo real bajo presión.',
      en: 'Educational platform for a foundation: Firebase backend, secure auth and a real-time database under pressure.',
    },
    when: { es: 'oct 2025', en: 'Oct 2025' },
  },
  {
    icon: 'sparkles',
    accent: 'amber',
    title: { es: 'Disney Cultural Exchange', en: 'Disney Cultural Exchange' },
    org: { es: 'Alumni ✨', en: 'Alumni ✨' },
    body: {
      es: 'Trabajo real y comunicación en un entorno multicultural exigente — mi crash course de estándares.',
      en: 'Real work and communication in a demanding multicultural environment — my crash course in standards.',
    },
    when: { es: 'Programa', en: 'Program' },
  },
  {
    icon: 'medal',
    accent: 'gold',
    title: { es: 'Cinturón negro de Taekwondo', en: 'Taekwondo black belt' },
    org: { es: 'Atleta de alto rendimiento', en: 'High-performance athlete' },
    body: {
      es: 'El tatami enseña lo mismo que los deadlines: respirar, medir distancia y golpear en el momento exacto.',
      en: 'The tatami teaches what deadlines do: breathe, measure distance, strike at the exact moment.',
    },
    when: { es: 'Vida', en: 'Life' },
  },
  {
    icon: 'cap',
    accent: 'mint',
    title: { es: 'Ingeniería de Sistemas', en: 'Systems Engineering' },
    org: { es: 'UNAB', en: 'UNAB' },
    body: {
      es: 'Universidad Autónoma de Bucaramanga — mi base como ingeniero.',
      en: 'Universidad Autónoma de Bucaramanga — my engineering foundation.',
    },
    when: { es: 'En curso', en: 'In progress' },
  },
]

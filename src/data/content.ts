import type { L } from '../i18n/lang'

import hidroShot from '../assets/p-hidrolavados.webp'
import kskinShot from '../assets/p-kskin.webp'
import bordadosShot from '../assets/p-bordados.webp'
import factoryShot from '../assets/p-factory.webp'
import nexiaShot from '../assets/p-nexia.webp'
import mnistShot from '../assets/p-mnist.webp'
import manoShot from '../assets/p-mano.webp'
import iotShot from '../assets/p-iot.webp'
import huevosShot from '../assets/p-huevos.webp'
import jeepShot from '../assets/modelado-jeep.webp'
import perroShot from '../assets/p-perro.webp'
import urbanShot from '../assets/p-urban.webp'
import cdeLanding from '../assets/cde-landing.webp'
import cdeAsistente from '../assets/cde-asistente.webp'
import cdeImportacion from '../assets/cde-importacion.webp'
import cdeFicha from '../assets/cde-ficha360.webp'
import cdePortal from '../assets/cde-portal.webp'
import cdeInicio from '../assets/cde-inicio-admin.webp'
import cdeOrgs from '../assets/cde-organizaciones.webp'
import btMapa from '../assets/bt-panel-admin-mapa.webp'
import btEmpresa from '../assets/bt-panel-empresa-escritorio.webp'
import btEditor from '../assets/bt-panel-admin-editor-ruta.webp'
import btBus from '../assets/bt-app-siguiendo-bus.webp'
import btWallet from '../assets/bt-app-wallet.webp'
import btConductor from '../assets/bt-app-conductor.webp'
import btInicio from '../assets/bt-app-inicio.webp'
import agendaShot from '../assets/calaut-agenda.webp'
import pilotoShot from '../assets/calaut-piloto.webp'
import omnicanalShot from '../assets/calaut-omnicanal.webp'
import crmShot from '../assets/calaut-crm.webp'
import healthShot from '../assets/calaut-health.webp'

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
    ai: { es: 'IA', en: 'AI' },
    agents: { es: 'CDE Conecta', en: 'CDE Conecta' },
    transit: { es: 'BUCARATRANSIT', en: 'BUCARATRANSIT' },
    calaut: { es: 'Calaut', en: 'Calaut' },
    projects: { es: 'Proyectos', en: 'Projects' },
    stack: { es: 'Stack', en: 'Stack' },
    timeline: { es: 'Trayectoria', en: 'Timeline' },
    beyond: { es: 'Más allá', en: 'Beyond' },
    contact: { es: 'Contacto', en: 'Contact' },
    cv: { es: 'Descargar CV', en: 'Download CV' },
    menu: { es: 'Abrir menú', en: 'Open menu' },
    close: { es: 'Cerrar menú', en: 'Close menu' },
  },
  hero: {
    role: {
      es: 'Desarrollador full-stack · Orquestación de agentes de IA',
      en: 'Full-stack developer · AI agent orchestration',
    },
    blurb: {
      es: 'Planeo la arquitectura, reparto el trabajo entre agentes de IA y reviso lo que entregan. Así construyo productos completos: un SaaS propio, una plataforma de movilidad para Bucaramanga y un CRM con agentes que ganó el UNAB Venture Challenge.',
      en: 'I plan the architecture, split the work across AI agents and review what they ship. That is how I build complete products: my own SaaS, a mobility platform for Bucaramanga and an agent-powered CRM that won the UNAB Venture Challenge.',
    },
    ctaProjects: { es: 'Ver proyectos', en: 'See projects' },
    callout: { es: 'Ganador · UNAB Venture Challenge 2026', en: 'Winner · UNAB Venture Challenge 2026' },
    study: { es: 'Ingeniería de Sistemas, UNAB · promedio 4.61/5.0', en: 'Systems Engineering, UNAB · GPA 4.61/5.0' },
    open: {
      es: 'Disponible para trabajo remoto, prácticas y freelance, en Colombia o EE. UU.',
      en: 'Open to remote roles, internships and freelance work, in Colombia or the U.S.',
    },
    altPhoto: { es: 'Retrato de José Alejandro Téllez Prada', en: 'Portrait of José Alejandro Téllez Prada' },
  },
  conecta: {
    kicker: { es: 'Ganador · UNAB Venture Challenge 2026', en: 'Winner · UNAB Venture Challenge 2026' },
    title: { es: 'CDE Conecta', en: 'CDE Conecta' },
    lead: {
      es: 'Un CRM 2.0 para el Centro de Desarrollo Empresarial de la UNAB. Reemplaza un Excel de 30 hojas y le da a cada emprendimiento un panel para seguir creciendo. El CDE lo va a implementar.',
      en: 'A CRM 2.0 for UNAB’s Business Development Center. It replaces a 30-sheet Excel workbook and gives each startup its own panel to keep growing. The Center will implement it.',
    },
    cta: { es: 'Ver el producto', en: 'See the product' },
    privateCode: { es: 'Código privado', en: 'Private source' },
    routerTitle: { es: 'Así decide el agente', en: 'How the agent decides' },
    routerLead: {
      es: 'Elige una pregunta. Un enrutador escoge al especialista y el código hace el trabajo: el modelo nunca toca los datos.',
      en: 'Pick a question. A router chooses the specialist and code does the work: the model never touches the data.',
    },
    routerNode: { es: 'Enrutador', en: 'Router' },
    sample: { es: 'Decisión de ejemplo', en: 'Sample decision' },
    tokensTitle: { es: 'Tokens por pregunta', en: 'Tokens per question' },
    tokensFull: { es: 'Si el modelo leyera todo el libro', en: 'If the model read the whole workbook' },
    tokensRouter: { es: 'Con el enrutador', en: 'With the router' },
    tokensNote: {
      es: 'Casi 200 veces menos. Medido por el equipo con el libro de prueba.',
      en: 'Nearly 200x less. Measured by the team on the test workbook.',
    },
    reliability: {
      es: 'Eligió bien en 7 de 7 pruebas en producción, en unos 2 segundos. Si el modelo duda o falla, entran reglas fijas.',
      en: 'It routed correctly in 7 of 7 production tests, in about 2 seconds. If the model hesitates or fails, fixed rules take over.',
    },
    galleryTitle: { es: 'El producto', en: 'The product' },
    syntheticNote: { es: 'Capturas con datos de prueba.', en: 'Screenshots use test data.' },
    teamTitle: { es: 'El equipo', en: 'The team' },
    teamPhoto: {
      es: 'El equipo de CDE Conecta recibe la distinción del 50 % en la Semana de la Ingeniería',
      en: 'The CDE Conecta team receiving the 50% distinction at Engineering Week',
    },
    teamNote: {
      es: 'Más que el premio, este proyecto me abrió conexiones muy valiosas para mi futuro.',
      en: 'Beyond the prize, this project opened connections that matter for my future.',
    },
  },
  ai: {
    title: { es: 'IA y orquestación', en: 'AI & orchestration' },
    lead: {
      es: 'Ahora paso más tiempo planeando que tecleando. La calidad sale de cómo se reparte y se revisa el trabajo.',
      en: 'I now spend more time planning than typing. Quality comes from how the work is split and reviewed.',
    },
    processTitle: { es: 'Cómo trabajo con agentes', en: 'How I work with agents' },
    toolsTitle: { es: 'Qué manejo', en: 'What I work with' },
  },
  transit: {
    kicker: { es: 'La solución de movilidad para Bucaramanga', en: 'A mobility solution for Bucaramanga' },
    title: { es: 'BUCARATRANSIT', en: 'BUCARATRANSIT' },
    lead: {
      es: 'Una sola app para moverse en la ciudad: buses en vivo, rutas, billetera prepago y pago con QR. Cada transportadora opera por separado en la misma plataforma, y el celular del conductor se vuelve la terminal de cobro.',
      en: 'One app to get around the city: live buses, routes, a prepaid wallet and QR fares. Each transit company runs separately on the same platform, and the driver’s phone becomes the payment terminal.',
    },
    role: {
      es: 'Mi parte: diseñé el paso de rastreador universitario a plataforma multi-tenant, y trabajé en la billetera, el QR dinámico, el modo conductor y la marca. Lo construimos entre 3.',
      en: 'My part: I designed the move from campus tracker to multi-tenant platform, and worked on the wallet, dynamic QR, driver mode and brand. Built by a team of 3.',
    },
    cta: { es: 'Abrir la plataforma', en: 'Open the platform' },
    code: { es: 'Ver código', en: 'View code' },
    appTitle: { es: 'La app', en: 'The app' },
    panelTitle: { es: 'Los paneles', en: 'The panels' },
    stack: 'Kotlin Multiplatform · Laravel 12 · Filament · MapLibre · Sanctum',
  },
  about: {
    trivia: {
      tkdTitle: { es: 'Taekwondo', en: 'Taekwondo' },
      tkdAlt: { es: 'José con su cinturón negro bordado con su nombre', en: 'José with his black belt embroidered with his name' },
      tkdBody: {
        es: 'Cinturón negro. He competido a nivel nacional e internacional representando a la UNAB, a Santander y a Colombia.',
        en: 'Black belt. I have competed nationally and internationally for UNAB, Santander and Colombia.',
      },
      schoolTitle: { es: 'Taekwondo para niños', en: 'Taekwondo for kids' },
      schoolBody: {
        es: 'Mi proyecto de cinturón negro mostró cómo el taekwondo ayuda a los niños a rendir mejor en el colegio. Logré que se implementara en el colegio donde estudié.',
        en: 'My black-belt project showed how taekwondo helps children do better at school. I got it adopted at the school I attended.',
      },
      disTitle: { es: 'Disney', en: 'Disney' },
      disAlt: { es: 'José con su equipo en Indiana Jones Epic Stunt Spectacular', en: 'José with his team at the Indiana Jones Epic Stunt Spectacular' },
      disBody: {
        es: 'Atracciones y operaciones en Walt Disney World: Indiana Jones Epic Stunt Spectacular, Olaf’s Celebrity Spotlight, Mickey Shorts Theater y Red Carpet Dreams. Mucha gente al día, siempre en inglés.',
        en: 'Attractions & operations at Walt Disney World: Indiana Jones Epic Stunt Spectacular, Olaf’s Celebrity Spotlight, Mickey Shorts Theater and Red Carpet Dreams. Large crowds every day, always in English.',
      },
      cpTitle: { es: 'Programación competitiva', en: 'Competitive programming' },
      cpBody: {
        es: 'Hago parte de la selección de la UNAB y compito en la Maratón Nacional de Programación ACIS/REDIS (2025 y 2026). También armo PCs por gusto.',
        en: 'I am on UNAB’s team and compete in the ACIS/REDIS National Programming Marathon (2025 and 2026). I also build PCs for fun.',
      },
      cpAlt25: { es: 'José con su equipo en la Maratón de Programación 2025', en: 'José with his team at the 2025 Programming Marathon' },
      cpAlt26: { es: 'José con su equipo en la Maratón de Programación 2026', en: 'José with his team at the 2026 Programming Marathon' },
    },
  },
  skills: {
    title: { es: 'Stack', en: 'Stack' },
    lead: {
      es: 'Las herramientas que uso para construir, de la idea al despliegue.',
      en: 'The tools I use to build, from idea to deployment.',
    },
  },
  projects: {
    title: { es: 'Proyectos', en: 'Projects' },
    lead: {
      es: 'Organizados por tipo de trabajo. Cada uno dice qué es y qué hice.',
      en: 'Grouped by type of work. Each one says what it is and what I did.',
    },
    playVideo: { es: 'Ver el video', en: 'Watch the video' },
    viewCode: { es: 'Código', en: 'Code' },
    visit: { es: 'Visitar', en: 'Visit' },
    privateCode: { es: 'Código privado', en: 'Private source' },
    building: { es: 'En desarrollo', en: 'In development' },
  },
  flagship: {
    kicker: { es: 'Mi producto principal', en: 'My main product' },
    title: { es: 'Calaut.pro', en: 'Calaut.pro' },
    cta: { es: 'Abrir Calaut.pro', en: 'Open Calaut.pro' },
    stackLabel: { es: 'Bajo el capó', en: 'Under the hood' },
    stack: 'React 18 · TypeScript · Firebase · Cloud Functions v2 · Google Calendar API · Bold · Resend · PWA',
    galleryTitle: { es: 'Secciones del producto', en: 'Product sections' },
    galleryLead: {
      es: 'Capturas reales del flujo: agenda por salas, piloto automático, omnicanalidad, CRM y módulo clínico.',
      en: 'Real screenshots of the flow: room-based schedule, autopilot, omnichannel, CRM and the clinical module.',
    },
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
      es: '¿Tienes un proyecto, una vacante o unas prácticas? Escríbeme.',
      en: 'Got a project, a role or an internship? Write to me.',
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
  icon: 'agents' | 'lang' | 'backend' | 'frontend' | 'mobile' | 'iot' | 'cloud' | 'data' | 'ai'
  title: L
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    icon: 'agents',
    title: { es: 'Agentes y automatización', en: 'Agents & automation' },
    items: ['Claude Code', 'Hermes Agent', 'Subagents', 'Skills', 'n8n', 'LLM routing', 'CDM', 'Token optimization'],
  },
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
    items: ['TensorFlow', 'PyTorch', 'YOLO', 'MediaPipe', 'OpenCV'],
  },
]

/* ────────────────────────── projects (real URLs) ─────────────── */

export type ProjectAccent = 'gold' | 'mint' | 'coral' | 'sky' | 'violet' | 'amber'

export type ProjectCategory = 'custom' | 'product' | 'ai' | 'iot' | 'tools'

export const categories: { id: ProjectCategory; icon: 'briefcase' | 'rocket' | 'brain' | 'radio' | 'wrench'; label: L; blurb: L }[] = [
  {
    id: 'custom',
    icon: 'briefcase',
    label: { es: 'Software a medida', en: 'Custom software' },
    blurb: { es: 'Proyectos freelance para negocios reales: sitios, tiendas y sistemas internos.', en: 'Freelance projects for real businesses: sites, stores and internal systems.' },
  },
  {
    id: 'product',
    icon: 'rocket',
    label: { es: 'Productos y hackatones', en: 'Products & hackathons' },
    blurb: { es: 'Plataformas completas que diseñé o ayudé a construir.', en: 'Full platforms I designed or helped build.' },
  },
  {
    id: 'ai',
    icon: 'brain',
    label: { es: 'IA y visión', en: 'AI & vision' },
    blurb: { es: 'Modelos entrenados y llevados a una app que se puede usar.', en: 'Models trained and turned into apps people can use.' },
  },
  {
    id: 'iot',
    icon: 'radio',
    label: { es: 'IoT y nube', en: 'IoT & cloud' },
    blurb: { es: 'Dispositivos, telemetría y tableros sobre Azure IoT Central.', en: 'Devices, telemetry and dashboards on Azure IoT Central.' },
  },
  {
    id: 'tools',
    icon: 'wrench',
    label: { es: 'Móvil y herramientas', en: 'Mobile & tools' },
    blurb: { es: 'Apps nativas y utilidades que hice para resolver algo concreto.', en: 'Native apps and utilities built to solve a specific problem.' },
  },
]

export interface Project {
  name: string
  cat: ProjectCategory
  url?: string
  code?: string
  isPrivate?: boolean
  shot?: string
  video?: string
  tech: string
  icon:
    | 'bus' | 'factory' | 'graduation' | 'clipboard' | 'download' | 'wallet'
    | 'android' | 'gamepad' | 'radio' | 'heart' | 'wrench' | 'shirt' | 'egg'
    | 'tooth' | 'truck' | 'sparkles' | 'music' | 'dog' | 'hash'
  kind: L
  accent: ProjectAccent
  blurb: L
  building?: boolean
}

export const projects: Project[] = [
  {
    name: 'Hidrolavados Solution',
    cat: 'custom',
    url: 'https://hidrolavados.solution-lavados.workers.dev',
    isPrivate: true,
    shot: hidroShot,
    tech: 'Next.js · Firebase · Supabase',
    icon: 'wrench',
    accent: 'gold',
    kind: { es: 'Sitio y panel', en: 'Site & panel' },
    blurb: {
      es: 'Plataforma para un taller de hidrolavadoras Kärcher Gold Partner: catálogo, alquileres, seguimiento de reparaciones y boletas con fotos.',
      en: 'Platform for a Kärcher Gold Partner pressure-washer shop: catalog, rentals, repair tracking and photo receipts.',
    },
  },
  {
    name: 'OdontoManager',
    cat: 'custom',
    isPrivate: true,
    tech: 'Tauri · Rust · SQLite',
    icon: 'tooth',
    accent: 'sky',
    building: true,
    kind: { es: 'App de escritorio', en: 'Desktop app' },
    blurb: {
      es: 'Programa para consultorios odontológicos que funciona sin internet y reemplaza un sistema antiguo: pacientes, agenda, planes de pago, caja y copias automáticas.',
      en: 'Offline software for dental offices that replaces a legacy system: patients, schedule, payment plans, cash register and automatic backups.',
    },
  },
  {
    name: 'INMAS de Colombia',
    cat: 'custom',
    isPrivate: true,
    tech: 'Next.js · PostgreSQL · Cloudflare',
    icon: 'truck',
    accent: 'mint',
    building: true,
    kind: { es: 'Plataforma', en: 'Platform' },
    blurb: {
      es: 'Sitio, catálogo y cotizador para una empresa de insumos de alimentación animal, con paneles para conductores, clientes y proveedores en camino.',
      en: 'Site, catalog and quote tool for an animal-feed supplier, with driver, client and supplier panels on the way.',
    },
  },
  {
    name: 'K-Skin BGA',
    cat: 'custom',
    url: 'https://kskin-bga.vercel.app',
    isPrivate: true,
    shot: kskinShot,
    tech: 'Next.js · carrito + WhatsApp',
    icon: 'sparkles',
    accent: 'coral',
    kind: { es: 'Tienda', en: 'Store' },
    blurb: {
      es: 'Tienda de skincare coreano en Bucaramanga con carrito y pedido directo por WhatsApp.',
      en: 'Korean skincare store in Bucaramanga with a cart and direct WhatsApp ordering.',
    },
  },
  {
    name: 'Bordados Zapatoca',
    cat: 'custom',
    url: 'https://bordados-zapatoca.vercel.app',
    isPrivate: true,
    shot: bordadosShot,
    tech: 'Next.js · carrito + WhatsApp',
    icon: 'shirt',
    accent: 'amber',
    kind: { es: 'Tienda', en: 'Store' },
    blurb: {
      es: 'Tienda de bordados a mano: blusas, bolsos y fundas con carrito y pedido por WhatsApp, sin backend.',
      en: 'Handmade embroidery store: blouses, bags and covers with a cart and WhatsApp ordering, no backend.',
    },
  },
  {
    name: 'Urban Mobility Hub',
    cat: 'product',
    code: 'https://github.com/Joserraldo/urban-mobility-hub',
    shot: urbanShot,
    tech: 'TypeScript · PWA · YOLOv8n-ONNX',
    icon: 'bus',
    accent: 'mint',
    kind: { es: 'Plataforma', en: 'Platform' },
    blurb: {
      es: 'Alquiler, venta y domicilios de vehículos urbanos, con detección de casco corriendo en el navegador.',
      en: 'Rental, sale and delivery of urban vehicles, with helmet detection running in the browser.',
    },
  },
  {
    name: 'Factory OS',
    cat: 'product',
    url: 'https://factoryos-beta.netlify.app',
    code: 'https://github.com/Joserraldo/FactoryFlow-ERP',
    shot: factoryShot,
    tech: 'TypeScript · IoT simulado',
    icon: 'factory',
    accent: 'coral',
    kind: { es: 'Colombia 5.0', en: 'Colombia 5.0' },
    blurb: {
      es: 'Monitoreo industrial en tiempo real hecho en el Hackathon Colombia 5.0: anomalías, alertas y consultas en lenguaje natural.',
      en: 'Real-time industrial monitoring built at the Colombia 5.0 Hackathon: anomalies, alerts and natural-language queries.',
    },
  },
  {
    name: 'Nexia+',
    cat: 'product',
    url: 'https://nexia-firebase.web.app',
    isPrivate: true,
    shot: nexiaShot,
    tech: 'Firebase · Auth · Realtime DB',
    icon: 'graduation',
    accent: 'violet',
    kind: { es: 'Hackatón para fundación', en: 'Foundation hackathon' },
    blurb: {
      es: 'Plataforma educativa con formación gamificada para una fundación sin ánimo de lucro.',
      en: 'Educational platform with gamified learning for a non-profit foundation.',
    },
  },
  {
    name: 'Huevos dañados',
    cat: 'ai',
    code: 'https://github.com/Joserraldo/damaged_eggs_CNN',
    shot: huevosShot,
    tech: 'YOLOv8n · FastAPI · Expo',
    icon: 'egg',
    accent: 'violet',
    kind: { es: 'Visión por computador', en: 'Computer vision' },
    blurb: {
      es: 'Detecta huevos buenos y rotos desde el celular: modelo YOLOv8n, API en EC2 y app Expo.',
      en: 'Spots good and cracked eggs from a phone: YOLOv8n model, API on EC2 and an Expo app.',
    },
  },
  {
    name: 'Mano Musical',
    cat: 'ai',
    code: 'https://github.com/Joserraldo/proyecto_mano_musical',
    shot: manoShot,
    tech: 'Python · MediaPipe',
    icon: 'music',
    accent: 'gold',
    kind: { es: 'Piano en el aire', en: 'Air piano' },
    blurb: {
      es: 'La cámara reconoce qué dedo bajas y suena su nota. Diez dedos, diez notas y un modo juego.',
      en: 'The camera sees which finger you lower and plays its note. Ten fingers, ten notes and a game mode.',
    },
  },
  {
    name: 'Puntos clave en perros',
    cat: 'ai',
    code: 'https://github.com/Joserraldo/detector-puntos-clave-perro',
    shot: perroShot,
    tech: 'Keras · MobileNetV2 · Streamlit',
    icon: 'dog',
    accent: 'sky',
    kind: { es: 'Demo de pipeline', en: 'Pipeline demo' },
    blurb: {
      es: 'Ubica 24 puntos anatómicos de un perro en una foto. Demo entrenada con una muestra pequeña.',
      en: 'Locates 24 anatomical points on a dog in a photo. A demo trained on a small sample.',
    },
  },
  {
    name: 'Dígitos con CNN',
    cat: 'ai',
    code: 'https://github.com/Joserraldo/reconocimiento-numeros-mnist',
    shot: mnistShot,
    tech: 'TensorFlow · Flask',
    icon: 'hash',
    accent: 'mint',
    kind: { es: 'App web', en: 'Web app' },
    blurb: {
      es: 'Dibujas un dígito y una red convolucional lo reconoce, mostrando confianza y lo que ve el modelo.',
      en: 'Draw a digit and a convolutional network reads it, showing its confidence and what the model sees.',
    },
  },
  {
    name: 'Metro y salud',
    cat: 'ai',
    code: 'https://github.com/Joserraldo/proyecto-IA-MetroPT-3',
    tech: 'Python · Streamlit · Expo',
    icon: 'heart',
    accent: 'coral',
    kind: { es: 'ML académico', en: 'Academic ML' },
    blurb: {
      es: 'Proyecto final de IA sobre un metro, con dashboard y app, más modelos de cardiopatías y diabetes.',
      en: 'Final AI project on a metro system, with dashboard and app, plus heart-disease and diabetes models.',
    },
  },
  {
    name: 'Flota de 10 dispositivos',
    cat: 'iot',
    code: 'https://github.com/Joserraldo/proyecto_iot_10_devices',
    shot: iotShot,
    tech: 'Python · Azure IoT Central · DPS',
    icon: 'radio',
    accent: 'sky',
    kind: { es: 'Emergencias en campus', en: 'Campus emergencies' },
    blurb: {
      es: 'Diez dispositivos distintos para gestión de emergencias, con reglas de alerta y un tablero tipo cuarto de control.',
      en: 'Ten different devices for emergency management, with alert rules and a control-room dashboard.',
    },
  },
  {
    name: 'IoT Learning',
    cat: 'iot',
    code: 'https://github.com/Joserraldo/Iot_learning',
    tech: 'ESP32 · MQTT · AMQP · CoAP',
    icon: 'radio',
    accent: 'violet',
    kind: { es: 'Laboratorios', en: 'Labs' },
    blurb: {
      es: 'Telemetría, ESP32 simulado y nodos en VM, comparando protocolos con mediciones reales.',
      en: 'Telemetry, simulated ESP32 and VM nodes, comparing protocols with real measurements.',
    },
  },
  {
    name: 'CardboAnt',
    cat: 'tools',
    code: 'https://github.com/Joserraldo/HormigaCulonaGame',
    video: '5l5ThqYfUcE',
    tech: 'Unity · C#',
    icon: 'gamepad',
    accent: 'violet',
    kind: { es: 'Juego en equipo', en: 'Team game' },
    blurb: {
      es: 'Juego en Unity con shaders propios, hecho en equipo para la clase de multimedios. Detrás de lo que se ve hay modelado 3D, texturas, iluminación y programación en C#.',
      en: 'Unity game with custom shaders, built as a team for a multimedia course. Behind what you see: 3D modeling, textures, lighting and C# programming.',
    },
  },
  {
    name: 'Modelado 3D',
    cat: 'tools',
    shot: jeepShot,
    tech: '3D · Modelado · Texturizado · Iluminación',
    icon: 'gamepad',
    accent: 'amber',
    kind: { es: 'Arte 3D para juegos', en: '3D art for games' },
    blurb: {
      es: 'Jeep militar modelado y renderizado por mí. El arte 3D es la parte menos visible y más difícil de un videojuego.',
      en: 'Military jeep modeled and rendered by me. 3D art is the least visible and hardest part of a video game.',
    },
  },
  {
    name: 'ArepasMas POS',
    cat: 'tools',
    isPrivate: true,
    tech: 'Kotlin · Jetpack Compose · Hilt',
    icon: 'android',
    accent: 'gold',
    kind: { es: 'App Android', en: 'Android app' },
    blurb: {
      es: 'Punto de venta para restaurantes con pantallas separadas para mesero, cocina y administrador.',
      en: 'Restaurant point of sale with separate screens for waiter, kitchen and admin.',
    },
  },
  {
    name: 'Clipboard File Injector',
    cat: 'tools',
    code: 'https://github.com/Joserraldo/clipboard-file-injector',
    tech: 'JavaScript · Chrome MV3',
    icon: 'clipboard',
    accent: 'amber',
    kind: { es: 'Extensión', en: 'Extension' },
    blurb: {
      es: 'Sube imágenes del portapapeles a cualquier campo de archivo, sin descargarlas primero.',
      en: 'Uploads clipboard images to any file field without saving them first.',
    },
  },
  {
    name: 'YT Downloader',
    cat: 'tools',
    code: 'https://github.com/Joserraldo/ytdownloader',
    tech: 'Python · ffmpeg',
    icon: 'download',
    accent: 'coral',
    kind: { es: 'App de Windows', en: 'Windows app' },
    blurb: {
      es: 'Un solo .exe para bajar video en MP4 o audio en MP3 a 320 kbps.',
      en: 'A single .exe to grab MP4 video or 320 kbps MP3 audio.',
    },
  },
  {
    name: 'budget_laravel',
    cat: 'tools',
    code: 'https://github.com/Joserraldo/budget_laravel',
    tech: 'PHP · Laravel · MySQL',
    icon: 'wallet',
    accent: 'mint',
    kind: { es: 'Monolito', en: 'Monolith' },
    blurb: {
      es: 'Control de finanzas personales, extendido con Jaime en el taller de arquitectura.',
      en: 'Personal-finance app, extended with Jaime in the architecture workshop.',
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
      es: 'PWA instalable sin pasar por una tienda de apps.',
      en: 'Installable PWA, no app store needed.',
    },
    {
      es: 'Iteración con usuarios reales en medicina, estética, legal y educación.',
      en: 'Iterated with real users across medical, aesthetics, legal and education.',
    },
    {
      es: 'En desarrollo: un agente de migración, como Migra de CDE Conecta, para traer los datos de un negocio de una sola vez.',
      en: 'In development: a migration agent, like Migra from CDE Conecta, to bring a business’s data over in one go.',
    },
  ] as L[],
  gallery: [
    {
      src: agendaShot,
      caption: {
        es: 'El poder de tu agenda: consultorios, especialidades y vistas por rol sobre una sola grilla.',
        en: 'Your agenda at a glance: rooms, specialties and per-role views on a single grid.',
      },
    },
    {
      src: pilotoShot,
      caption: {
        es: 'El piloto automático en 5 pasos: del agendamiento al recordatorio de 24 h sin intervención.',
        en: 'Autopilot in 5 steps: from booking to the 24h reminder with zero intervention.',
      },
    },
    {
      src: omnicanalShot,
      caption: {
        es: 'Omnicanalidad: confirmación al paciente por WhatsApp y emails transaccionales propios.',
        en: 'Omnichannel: patient confirmation over WhatsApp plus own transactional emails.',
      },
    },
    {
      src: crmShot,
      caption: {
        es: 'CRM y landing pública por negocio: cada tenant con su micrositio y reactivación de clientes.',
        en: 'CRM and per-business public landing: every tenant gets its own microsite and client reactivation.',
      },
    },
    {
      src: healthShot,
      caption: {
        es: 'Módulo clínico opcional: RIPS JSON (Res. 2275) e historia clínica inmutable (Res. 1995).',
        en: 'Optional clinical module: automatic RIPS JSON (Res. 2275) and immutable clinical records (Res. 1995).',
      },
    },
  ] as { src: string; caption: L }[],
  metrics: [
    { value: '43', label: { es: 'Cloud Functions', en: 'Cloud Functions' } },
    { value: '25', label: { es: 'rutas con reglas de seguridad', en: 'rule-protected paths' } },
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
    icon: 'trophy',
    accent: 'gold',
    title: { es: 'Ganador, UNAB Venture Challenge', en: 'Winner, UNAB Venture Challenge' },
    org: { es: 'CDE Conecta · Hackatón Semana de Ingeniería', en: 'CDE Conecta · Engineering Week Hackathon' },
    body: {
      es: 'Primer lugar entre 5 equipos y beca del 50% de matrícula para cada integrante.',
      en: 'First place among 5 teams and a 50% tuition scholarship for each member.',
    },
    when: { es: 'oct 2026', en: 'Oct 2026' },
  },
  {
    icon: 'bus',
    accent: 'sky',
    title: { es: 'BUCARATRANSIT', en: 'BUCARATRANSIT' },
    org: { es: 'Movilidad para Bucaramanga', en: 'Mobility for Bucaramanga' },
    body: {
      es: 'De rastreador de buses universitario a plataforma multi-tenant con billetera y pago con QR.',
      en: 'From campus bus tracker to a multi-tenant platform with wallet and QR fares.',
    },
    when: { es: '2026 — hoy', en: '2026 — now' },
  },
  {
    icon: 'sparkles',
    accent: 'amber',
    title: { es: 'Intercambio J-1, Atracciones y Operaciones', en: 'J-1 Exchange, Attractions & Operations' },
    org: { es: 'Walt Disney World, Florida', en: 'Walt Disney World, Florida' },
    body: {
      es: 'Atención a grandes grupos de visitantes en inglés, en 4 atracciones.',
      en: 'Served large crowds in English across 4 attractions.',
    },
    when: { es: 'may — ago 2026', en: 'May — Aug 2026' },
  },
  {
    icon: 'factory',
    accent: 'coral',
    title: { es: 'Hackathon Colombia 5.0', en: 'Colombia 5.0 Hackathon' },
    org: { es: 'Factory OS', en: 'Factory OS' },
    body: {
      es: 'Prototipo de monitoreo industrial con sensores simulados, alertas y consultas en lenguaje natural.',
      en: 'Industrial monitoring prototype with simulated sensors, alerts and natural-language queries.',
    },
    when: { es: 'abr 2026', en: 'Apr 2026' },
  },
  {
    icon: 'rocket',
    accent: 'gold',
    title: { es: 'Fundador y desarrollador', en: 'Founder & developer' },
    org: { es: 'Calaut.pro', en: 'Calaut.pro' },
    body: {
      es: 'SaaS B2B de agendamiento: del diseño al despliegue.',
      en: 'B2B scheduling SaaS, from design to deployment.',
    },
    when: { es: 'nov 2025 — hoy', en: 'Nov 2025 — now' },
  },
  {
    icon: 'graduation',
    accent: 'violet',
    title: { es: 'Hackatón para fundación', en: 'Foundation hackathon' },
    org: { es: 'Nexia+', en: 'Nexia+' },
    body: {
      es: 'Plataforma educativa para una fundación, construida en Firebase.',
      en: 'Educational platform for a foundation, built on Firebase.',
    },
    when: { es: 'oct 2025', en: 'Oct 2025' },
  },
  {
    icon: 'cap',
    accent: 'mint',
    title: { es: 'Ingeniería de Sistemas', en: 'Systems Engineering' },
    org: { es: 'Universidad Autónoma de Bucaramanga', en: 'Universidad Autónoma de Bucaramanga' },
    body: {
      es: 'Promedio 4.61/5.0. Grado esperado en 2028. Mentor y conferencista estudiantil en 2024 y 2025.',
      en: 'GPA 4.61/5.0. Expected graduation 2028. Student mentor and speaker in 2024 and 2025.',
    },
    when: { es: '2024 — hoy', en: '2024 — now' },
  },
]

/* ────────────────────────── CDE Conecta ──────────────────────────── */

export const conecta = {
  url: 'https://cdeunab.lat/conecta',
  facts: [
    { value: '1.º', label: { es: 'de 5 equipos', en: 'of 5 teams' } },
    { value: '25 h', label: { es: 'de desarrollo continuo', en: 'of continuous building' } },
    { value: '50%', label: { es: 'de beca de matrícula', en: 'tuition scholarship' } },
    { value: '4', label: { es: 'agentes especialistas', en: 'specialist agents' } },
  ],
  agents: [
    {
      id: 'migra',
      name: 'Migra',
      icon: 'upload',
      accent: 'sky',
      job: { es: 'Importa y limpia el Excel', en: 'Imports and cleans the Excel file' },
      engine: { es: 'Código', en: 'Code' },
      question: { es: 'Importar el libro de empresas', en: 'Import the company workbook' },
      intent: 'importar_archivo',
      result: { es: 'Importa y une duplicados. En la prueba: 480 empresas en cerca de 1 s y 34 duplicados unidos, con opción de deshacer.', en: 'Imports and merges duplicates. In testing: 480 companies in about 1 s and 34 duplicates merged, with undo.' },
    },
    {
      id: 'vita',
      name: 'Vita',
      icon: 'sprout',
      accent: 'mint',
      job: { es: 'Encuentra la historia de cada empresa', en: 'Finds each company’s history' },
      engine: { es: 'Código', en: 'Code' },
      question: { es: 'Busca Textiles Chicamocha', en: 'Find Textiles Chicamocha' },
      intent: 'consultar_empresa',
      result: { es: 'Busca la empresa y lleva a su ficha 360: citas, proyectos, eventos y brechas.', en: 'Finds the company and leads to its 360 profile: meetings, projects, events and gaps.' },
    },
    {
      id: 'nova',
      name: 'Nova',
      icon: 'chart',
      accent: 'violet',
      job: { es: 'Convierte preguntas en gráficas', en: 'Turns questions into charts' },
      engine: { es: 'Código', en: 'Code' },
      question: { es: '¿Cuántas empresas hay por sector?', en: 'How many companies per sector?' },
      intent: 'analizar_indicadores',
      result: { es: 'Elige un indicador de una lista cerrada y el servidor calcula. El modelo nunca escribe SQL.', en: 'Picks an indicator from a closed list and the server does the math. The model never writes SQL.' },
    },
    {
      id: 'lumi',
      name: 'Lumi',
      icon: 'pen',
      accent: 'amber',
      job: { es: 'Redacta artículos y guías', en: 'Drafts articles and guides' },
      engine: { es: 'Modelo + revisión humana', en: 'Model + human review' },
      question: { es: 'Escribe una guía de facturación electrónica', en: 'Write a guide on e-invoicing' },
      intent: 'redactar_texto',
      result: { es: 'Redacta un borrador y lo deja en espera. Una persona lo aprueba antes de publicar.', en: 'Writes a draft and holds it. A person approves it before it goes live.' },
    },
  ],
  gallery: [
    { src: cdeLanding, caption: { es: 'La página pública: pregúntale a tu CDE', en: 'The public page: ask your Center' } },
    { src: cdeAsistente, caption: { es: 'Nova responde con una gráfica', en: 'Nova answers with a chart' } },
    { src: cdeImportacion, caption: { es: 'Migra importa el Excel', en: 'Migra imports the Excel file' } },
    { src: cdeFicha, caption: { es: 'Ficha 360 y plan de acción de una empresa', en: 'Company 360 profile and action plan' } },
    { src: cdePortal, caption: { es: 'Panel del empresario con puntos y retos', en: 'Founder panel with points and challenges' } },
    { src: cdeInicio, caption: { es: 'Inicio del equipo del CDE', en: 'Center staff dashboard' } },
    { src: cdeOrgs, caption: { es: 'Varias universidades, datos separados', en: 'Several universities, separate data' } },
  ],
  team: [
    { name: 'José Téllez', role: { es: 'Agentes Vita, Nova y Lumi, analítica y negocio', en: 'Vita, Nova and Lumi agents, analytics and business' } },
    { name: 'Jaime Vega', role: { es: 'Base de datos, perfiles y empresas', en: 'Database, profiles and companies' } },
    { name: 'Santiago Cabeza', role: { es: 'Migra, Azure y CI/CD', en: 'Migra, Azure and CI/CD' } },
    { name: 'Daniel Villamizar', role: { es: 'Citas, eventos, proyectos y soporte', en: 'Appointments, events, projects and support' } },
  ],
} as const

/* ────────────────────────── IA y orquestación ────────────────────── */

export const orchestration = {
  steps: [
    {
      icon: 'plan',
      title: { es: 'Planeo', en: 'Plan' },
      body: { es: 'Defino la arquitectura, las reglas y qué significa terminado.', en: 'I set the architecture, the rules and what done means.' },
    },
    {
      icon: 'split',
      title: { es: 'Reparto', en: 'Split' },
      body: { es: 'Divido el trabajo en tareas pequeñas, con dueño y carpeta propia.', en: 'I break the work into small tasks, each with an owner and a folder.' },
    },
    {
      icon: 'build',
      title: { es: 'Los agentes construyen', en: 'Agents build' },
      body: { es: 'Cada agente hace su parte, como en una casa de desarrollo.', en: 'Each agent does its part, like a small dev studio.' },
    },
    {
      icon: 'review',
      title: { es: 'Reviso', en: 'Review' },
      body: { es: 'Tipos, pruebas y CI antes de integrar. Nada entra sin validar.', en: 'Types, tests and CI before merging. Nothing lands unchecked.' },
    },
  ],
  tools: [
    {
      icon: 'bot',
      title: { es: 'Agentes', en: 'Agents' },
      body: { es: 'Desarrollo a diario con Claude Code y Hermes Agent, con subagentes para trabajo en paralelo. Automatizo flujos con n8n.', en: 'I build daily with Claude Code and Hermes Agent, using subagents for parallel work. I automate flows with n8n.' },
    },
    {
      icon: 'skills',
      title: { es: 'Skills', en: 'Skills' },
      body: { es: 'Una biblioteca curada de más de 130 skills reutilizables para despliegues, QA, auditorías y documentos. Lo que funciona una vez queda como procedimiento.', en: 'A curated library of 130+ reusable skills for deploys, QA, audits and documents. What works once becomes a procedure.' },
    },
    {
      icon: 'models',
      title: { es: 'Modelos y proveedores', en: 'Models & providers' },
      body: { es: 'Pruebo proveedores con peticiones reales. En CDE Conecta, Qwen respondió en unos 2 s y DeepSeek en 4 a 8 s con errores intermitentes.', en: 'I test providers with real requests. On CDE Conecta, Qwen answered in about 2 s and DeepSeek in 4 to 8 s with intermittent errors.' },
    },
    {
      icon: 'tokens',
      title: { es: 'Tokens y CDM', en: 'Tokens & CDM' },
      body: { es: 'Cada tarea va al modelo más barato capaz. Con salidas CDM (JSON schema estricto) el modelo responde poco, y ese poco se valida.', en: 'Each job goes to the cheapest capable model. With CDM outputs (strict JSON schema) the model says little, and that little gets validated.' },
    },
    {
      icon: 'train',
      title: { es: 'Entrenamiento de ML', en: 'ML training' },
      body: { es: 'Entreno y despliego modelos: YOLOv8n en Colab servido con FastAPI en EC2, MobileNetV2 para puntos clave y CNN para MNIST.', en: 'I train and deploy models: YOLOv8n on Colab served with FastAPI on EC2, MobileNetV2 for keypoints and a CNN for MNIST.' },
    },
  ],
} as const

/* ────────────────────────── BUCARATRANSIT ─────────────────────────── */

export const transit = {
  url: 'https://bucaratransit.duckdns.org',
  code: 'https://github.com/JaimeMrF/bus_unab',
  facts: [
    { value: '60 s', label: { es: 'de vida por QR, de un solo uso', en: 'QR lifetime, single use' } },
    { value: '88', label: { es: 'pruebas automatizadas', en: 'automated tests' } },
    { value: '2', label: { es: 'plataformas: Android e iOS', en: 'platforms: Android and iOS' } },
    { value: '0', label: { es: 'hardware extra en el bus', en: 'extra hardware on the bus' } },
  ],
  features: [
    { icon: 'map', title: { es: 'Buses en vivo', en: 'Live buses' }, body: { es: 'Mapa, rutas, paradas y tiempo estimado de llegada.', en: 'Map, routes, stops and estimated arrival.' } },
    { icon: 'wallet', title: { es: 'Billetera prepago', en: 'Prepaid wallet' }, body: { es: 'Libro contable de doble entrada: cada movimiento queda registrado y no se reescribe.', en: 'Double-entry ledger: each movement is recorded and never rewritten.' } },
    { icon: 'qr', title: { es: 'Pago con QR', en: 'QR fares' }, body: { es: 'Código firmado con HMAC-SHA256. Se usa una vez y vence en 60 segundos.', en: 'Code signed with HMAC-SHA256. It works once and expires in 60 seconds.' } },
    { icon: 'building', title: { es: 'Multi-empresa', en: 'Multi-company' }, body: { es: 'Cada transportadora tiene su panel y solo ve lo suyo.', en: 'Each transit company has its own panel and sees only its data.' } },
  ],
  app: [
    { src: btInicio, caption: { es: 'Inicio', en: 'Home' } },
    { src: btBus, caption: { es: 'Siguiendo un bus', en: 'Following a bus' } },
    { src: btWallet, caption: { es: 'Billetera', en: 'Wallet' } },
    { src: btConductor, caption: { es: 'Modo conductor', en: 'Driver mode' } },
  ],
  panels: [
    { src: btMapa, caption: { es: 'Mapa en vivo de la operación', en: 'Live operations map' } },
    { src: btEditor, caption: { es: 'Editor de rutas por calles', en: 'Street-based route editor' } },
    { src: btEmpresa, caption: { es: 'Métricas de cada transportadora', en: 'Metrics for each transit company' } },
  ],
} as const

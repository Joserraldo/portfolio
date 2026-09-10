import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import {
  Brain,
  CalendarDays,
  ClipboardList,
  Download,
  Factory,
  Gamepad2,
  GraduationCap,
  HeartPulse,
  Radio,
  Smartphone,
  Bus,
  Code2,
  ExternalLink,
  Wallet,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { MouseEvent, ReactNode } from 'react'
import { projects, copy } from '../data/content'
import type { Project } from '../data/content'
import { useLang } from '../i18n/lang'
import { ACCENT } from './accents'
import { fadeUp, stagger, viewport } from './motion'

const ICONS: Record<Project['icon'], LucideIcon> = {
  calendar: CalendarDays,
  bus: Bus,
  factory: Factory,
  graduation: GraduationCap,
  brain: Brain,
  clipboard: ClipboardList,
  download: Download,
  wallet: Wallet,
  android: Smartphone,
  gamepad: Gamepad2,
  radio: Radio,
  heart: HeartPulse,
}

function Tilt({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion()
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const spring = { stiffness: 170, damping: 16 }
  const rotateX = useSpring(useTransform(my, [0, 1], [6, -6]), spring)
  const rotateY = useSpring(useTransform(mx, [0, 1], [-8, 8]), spring)

  function onMove(e: MouseEvent<HTMLElement>) {
    if (reduce) return
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width)
    my.set((e.clientY - r.top) / r.height)
  }
  function onLeave() {
    mx.set(0.5)
    my.set(0.5)
  }

  return (
    <div style={{ perspective: 900 }} className={className}>
      <motion.article
        variants={fadeUp}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={reduce ? undefined : { rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="group h-full rounded-xl border border-edge bg-panel/60 p-6 transition-[border-color,box-shadow] duration-300"
      >
        {children}
      </motion.article>
    </div>
  )
}

function Card({ p }: { p: Project }) {
  const { t } = useLang()
  const Icon = ICONS[p.icon]
  const a = ACCENT[p.accent]

  return (
    <Tilt className={a.glow}>
      <div className="flex items-start justify-between gap-3">
        <span
          className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border ${a.chip} bg-void/60`}
          aria-hidden
        >
          <Icon size={18} />
        </span>
        <span className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${a.chip}`}>
          {t(p.kind)}
        </span>
      </div>

      <h3 className="mt-4 text-base font-semibold text-snow">{p.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-fog">{t(p.blurb)}</p>

      <p className="mt-3 font-mono text-[11px] text-ink-faint">
        <span className={a.text}>{t(p.role)}</span> · {t(p.when)}
      </p>

      <div className="mt-5 flex items-center justify-between gap-3 border-t border-edge/50 pt-4">
        <span className="font-mono text-[11px] uppercase tracking-wider text-fog">{p.tech}</span>
        <span className="flex items-center gap-3">
          {p.code && (
            <a
              href={p.code}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-xs text-fog transition-colors hover:text-snow"
            >
              <Code2 size={13} aria-hidden />
              {t(copy.projects.viewCode)}
            </a>
          )}
          {p.url ? (
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 font-mono text-xs transition-colors hover:text-snow ${a.text}`}
            >
              <ExternalLink size={13} aria-hidden />
              {t(copy.projects.visit)}
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-faint">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky" aria-hidden />
              {t(copy.projects.building)}
            </span>
          )}
        </span>
      </div>
    </Tilt>
  )
}

export default function Projects() {
  const { t } = useLang()
  const grid = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="scroll-mt-24 border-t border-edge/40 bg-panel/40">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <motion.header variants={stagger()} initial="hidden" whileInView="show" viewport={viewport}>
          <motion.p variants={fadeUp} className="font-mono text-xs uppercase tracking-[0.22em] text-gold">
            04 — projects
          </motion.p>
          <motion.h2 variants={fadeUp} className="mt-3 text-3xl font-bold tracking-tight text-snow sm:text-4xl">
            {t(copy.projects.title)}
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-2 text-fog">
            {t(copy.projects.lead)} <span className="font-mono text-mint">[{grid.length}]</span>
          </motion.p>
        </motion.header>

        <motion.div
          variants={stagger(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
        >
          {grid.map((p) => (
            <Card key={p.name} p={p} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

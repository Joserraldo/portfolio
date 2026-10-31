import { motion } from 'framer-motion'
import {
  Brain,
  Briefcase,
  Bus,
  ClipboardList,
  Code2,
  Dog,
  Download,
  Egg,
  ExternalLink,
  Factory,
  Gamepad2,
  GraduationCap,
  Hash,
  HeartPulse,
  Lock,
  Music,
  Radio,
  Rocket,
  Shirt,
  Smartphone,
  Sparkles,
  Stethoscope,
  Truck,
  Wallet,
  Wrench,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useState } from 'react'
import { categories, copy, projects } from '../data/content'
import type { Project, ProjectCategory } from '../data/content'
import { useLang } from '../i18n/lang'
import { ACCENT } from './accents'
import { fadeUp, stagger, viewport } from './motion'

const ICONS: Record<Project['icon'], LucideIcon> = {
  bus: Bus,
  factory: Factory,
  graduation: GraduationCap,
  clipboard: ClipboardList,
  download: Download,
  wallet: Wallet,
  android: Smartphone,
  gamepad: Gamepad2,
  radio: Radio,
  heart: HeartPulse,
  wrench: Wrench,
  shirt: Shirt,
  egg: Egg,
  tooth: Stethoscope,
  truck: Truck,
  sparkles: Sparkles,
  music: Music,
  dog: Dog,
  hash: Hash,
}

const CAT_ICONS = { briefcase: Briefcase, rocket: Rocket, brain: Brain, radio: Radio, wrench: Wrench }

function Card({ p }: { p: Project }) {
  const { t } = useLang()
  const Icon = ICONS[p.icon]
  const a = ACCENT[p.accent]

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-edge bg-panel transition-[border-color,transform] duration-200 hover:-translate-y-1 hover:border-snow/60">
      {p.shot ? (
        <img src={p.shot} alt="" loading="lazy" className="block aspect-[16/10] w-full border-b border-edge object-cover object-top" />
      ) : (
        <div className={`flex aspect-[16/10] w-full items-center justify-center border-b border-edge bg-void/50 ${a.text}`}>
          <Icon size={52} strokeWidth={1.25} aria-hidden className="transition-transform duration-300 group-hover:scale-110" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-4">
        <p className={`flex items-center gap-1.5 text-xs font-semibold ${a.text}`}>
          <Icon size={14} aria-hidden /> {t(p.kind)}
        </p>
        <h3 className="mt-1.5 text-lg font-semibold text-snow">{p.name}</h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-fog">{t(p.blurb)}</p>
        <p className="mt-3 font-mono text-[11px] text-ink-faint">{p.tech}</p>
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-edge pt-3 text-sm">
          {p.url && (
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-gold hover:text-gold-soft">
              <ExternalLink size={14} aria-hidden /> {t(copy.projects.visit)}
            </a>
          )}
          {p.code && (
            <a href={p.code} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-fog hover:text-snow">
              <Code2 size={14} aria-hidden /> {t(copy.projects.viewCode)}
            </a>
          )}
          {p.building && (
            <span className="inline-flex items-center gap-1.5 text-fog">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mint" aria-hidden /> {t(copy.projects.building)}
            </span>
          )}
          {p.isPrivate && (
            <span className="inline-flex items-center gap-1.5 text-ink-faint">
              <Lock size={13} aria-hidden /> {t(copy.projects.privateCode)}
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const { t } = useLang()
  const [cat, setCat] = useState<ProjectCategory>('custom')
  const current = categories.find((c) => c.id === cat)!
  const list = projects.filter((p) => p.cat === cat)

  return (
    <section id="projects" className="scroll-mt-20 border-t border-edge bg-panel/50">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <motion.header variants={stagger()} initial="hidden" whileInView="show" viewport={viewport}>
          <motion.h2 variants={fadeUp} className="text-5xl font-bold text-snow sm:text-6xl">
            {t(copy.projects.title)}
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-2 text-fog">
            {t(copy.projects.lead)}
          </motion.p>
        </motion.header>

        <div role="tablist" aria-label={t(copy.projects.title)} className="mt-8 flex flex-wrap gap-2">
          {categories.map((c) => {
            const Icon = CAT_ICONS[c.icon]
            const on = c.id === cat
            const n = projects.filter((p) => p.cat === c.id).length
            return (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={on}
                onClick={() => setCat(c.id)}
                className={`inline-flex items-center gap-2 rounded-lg border px-3.5 py-2 text-sm font-semibold transition-colors ${
                  on ? 'border-gold bg-gold text-panel' : 'border-edge bg-panel/70 text-fog hover:border-snow/60 hover:text-snow'
                }`}
              >
                <Icon size={16} aria-hidden /> {t(c.label)} <span className="font-mono text-xs opacity-75">{n}</span>
              </button>
            )
          })}
        </div>

        <p className="mt-4 text-fog">{t(current.blurb)}</p>

        <div key={cat} role="tabpanel" className="rise mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <Card key={p.name} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

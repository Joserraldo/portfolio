import { motion } from 'framer-motion'
import {
  BarChart3,
  CalendarCheck,
  ChevronRight,
  Code2,
  CreditCard,
  ExternalLink,
  Gauge,
  Maximize2,
  Newspaper,
  Play,
  ScanLine,
  ShieldCheck,
  Wrench,
  Workflow,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useState } from 'react'
import { automation, copy } from '../data/content'
import { useLang } from '../i18n/lang'
import { fadeUp, stagger, viewport } from './motion'

const ICONS: Record<string, LucideIcon> = {
  tools: Wrench,
  chart: BarChart3,
  risk: Gauge,
  vision: ScanLine,
  pay: CreditCard,
  booking: CalendarCheck,
  news: Newspaper,
  shield: ShieldCheck,
}

function Flows() {
  const { t } = useLang()
  const [active, setActive] = useState(0)
  const flow = automation.workflows[active]

  return (
    <div className="grid gap-5 lg:grid-cols-[15rem_1fr]">
      <div
        role="tablist"
        aria-label={t(copy.automation.flowsTitle)}
        className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0 lg:flex-col lg:overflow-visible"
      >
        {automation.workflows.map((w, i) => (
          <button
            key={w.id}
            type="button"
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className={`flex shrink-0 items-center gap-2.5 rounded-lg border px-3.5 py-2.5 text-left text-sm transition-colors ${
              active === i
                ? 'border-gold bg-gold font-semibold text-panel'
                : 'border-edge bg-panel/70 text-fog hover:border-snow/60 hover:text-snow'
            }`}
          >
            <span className="font-mono text-xs opacity-80">{w.id}</span>
            <span className="whitespace-nowrap lg:whitespace-normal">{t(w.name)}</span>
          </button>
        ))}
      </div>

      <div key={flow.id} className="rise min-w-0" role="tabpanel">
        <a
          href={flow.src}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block overflow-hidden rounded-lg border border-edge bg-[#1b1b1b]"
        >
          <img
            src={flow.src}
            alt={`n8n ${flow.id}: ${t(flow.name)}`}
            className="block aspect-[16/8] w-full object-contain"
          />
          <span className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-md bg-void/80 px-2 py-1 text-xs text-snow opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
            <Maximize2 size={12} aria-hidden /> {t(copy.automation.openFull)}
          </span>
        </a>
        <p className="mt-3 flex items-center gap-2 font-semibold text-snow">
          <Workflow size={16} className="text-gold" aria-hidden />
          {flow.id} · {t(flow.name)}
        </p>
        <p className="mt-1 max-w-3xl text-sm leading-relaxed text-fog">{t(flow.body)}</p>
      </div>
    </div>
  )
}

export default function Automation() {
  const { t } = useLang()

  return (
    <section id="automation" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <motion.header variants={stagger()} initial="hidden" whileInView="show" viewport={viewport}>
          <motion.p variants={fadeUp} className="flex items-center gap-2 text-sm font-semibold text-gold">
            <Workflow size={16} aria-hidden /> {t(copy.automation.kicker)}
          </motion.p>
          <motion.h2 variants={fadeUp} className="mt-3 text-[2.6rem] font-extrabold text-snow min-[480px]:text-6xl sm:text-7xl">
            {t(copy.automation.title)}
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-2 font-display text-3xl font-bold text-gold">
            {t(copy.automation.project)}
          </motion.p>
          <motion.p variants={fadeUp} className="mt-4 max-w-3xl text-lg leading-relaxed text-fog">
            {t(copy.automation.lead)}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href={automation.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-panel transition hover:bg-gold-soft"
            >
              {t(copy.automation.cta)} <ExternalLink size={15} aria-hidden />
            </a>
            <a
              href={automation.video}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-fog hover:text-snow"
            >
              <Play size={15} aria-hidden /> {t(copy.automation.video)}
            </a>
            <a
              href={automation.code}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-fog hover:text-snow"
            >
              <Code2 size={15} aria-hidden /> {t(copy.automation.code)}
            </a>
          </motion.div>
          <motion.ul variants={fadeUp} className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-y border-edge py-6 sm:grid-cols-4">
            {automation.facts.map((f) => (
              <li key={f.label.es}>
                <p className="font-display text-5xl font-bold text-gold">{f.value}</p>
                <p className="text-sm text-fog">{t(f.label)}</p>
              </li>
            ))}
          </motion.ul>
        </motion.header>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-snow">{t(copy.automation.flowsTitle)}</h3>
          <p className="mt-1 text-fog">{t(copy.automation.flowsLead)}</p>
          <div className="mt-6">
            <Flows />
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-snow">{t(copy.automation.pathTitle)}</h3>
          <ol className="mt-5 flex flex-wrap items-center gap-y-3">
            {automation.steps.map((s, i) => (
              <li key={s.es} className="flex items-center">
                <span className="rounded-md border border-edge bg-panel px-3 py-2 text-sm text-snow">
                  <span className="mr-1.5 font-mono text-xs text-gold">{i + 1}</span>
                  {t(s)}
                </span>
                {i < automation.steps.length - 1 && (
                  <ChevronRight size={16} className="mx-1 text-ink-faint" aria-hidden />
                )}
              </li>
            ))}
          </ol>
          <p className="mt-5 max-w-3xl border-l-2 border-gold pl-4 text-fog">{t(copy.automation.decision)}</p>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-snow">{t(copy.automation.featuresTitle)}</h3>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {automation.features.map((f) => {
              const Icon = ICONS[f.icon]
              return (
                <li key={f.icon}>
                  <Icon size={22} className="text-mint" aria-hidden />
                  <p className="mt-2 font-semibold text-snow">{t(f.title)}</p>
                  <p className="mt-1 text-sm leading-relaxed text-fog">{t(f.body)}</p>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-snow">{t(copy.automation.galleryTitle)}</h3>
          <p className="mt-1 text-sm text-fog">{t(copy.automation.syntheticNote)}</p>
          <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_auto]">
            <ul className="grid gap-4 sm:grid-cols-2">
              {automation.gallery.map((g, i) => (
                <li key={g.src} className={`overflow-hidden rounded-lg border border-edge bg-panel ${i === 0 ? 'sm:col-span-2' : ''}`}>
                  <img src={g.src} alt={t(g.caption)} loading="lazy" className="block aspect-video w-full object-cover object-top" />
                  <p className="px-3 py-2.5 text-sm text-fog">{t(g.caption)}</p>
                </li>
              ))}
            </ul>
            <ul className="grid grid-cols-3 gap-4 lg:w-56 lg:grid-cols-1">
              {automation.phones.map((s) => (
                <li key={s.src}>
                  <img src={s.src} alt={t(s.caption)} loading="lazy" className="block aspect-[9/20] w-full rounded-2xl border border-edge object-cover object-top" />
                  <p className="mt-2 text-center text-sm text-fog">{t(s.caption)}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-snow">{t(copy.automation.teamTitle)}</h3>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {automation.team.map((m) => (
              <li key={m.name} className="border-l-2 border-gold pl-3">
                <p className="font-semibold text-snow">{m.name}</p>
                <p className="text-sm text-fog">{t(m.role)}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-mono text-[11px] text-ink-faint">{copy.automation.stack}</p>
        </div>
      </div>
    </section>
  )
}

import { motion, useReducedMotion } from 'framer-motion'
import {
  BarChart3,
  ExternalLink,
  Lock,
  PenLine,
  Sprout,
  Trophy,
  Upload,
  Workflow,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { conecta, copy } from '../data/content'
import { useLang } from '../i18n/lang'
import { ACCENT } from './accents'
import { fadeUp, stagger, viewport } from './motion'
import teamPhoto from '../assets/hackathon-premio.webp'

const AGENT_ICONS: Record<string, LucideIcon> = {
  upload: Upload,
  sprout: Sprout,
  chart: BarChart3,
  pen: PenLine,
}

function Router() {
  const { t } = useLang()
  const reduce = useReducedMotion()
  const [active, setActive] = useState(2)
  const [auto, setAuto] = useState(true)
  const agent = conecta.agents[active]
  const a = ACCENT[agent.accent]

  useEffect(() => {
    if (!auto || reduce) return
    const id = setInterval(() => setActive((i) => (i + 1) % conecta.agents.length), 4500)
    return () => clearInterval(id)
  }, [auto, reduce])

  return (
    <div className="grid gap-5 lg:grid-cols-[0.9fr_auto_1.1fr]">
      {/* preguntas */}
      <div role="group" aria-label={t(copy.conecta.routerTitle)} className="flex flex-col gap-2">
        {conecta.agents.map((ag, i) => (
          <button
            key={ag.id}
            type="button"
            aria-pressed={active === i}
            onClick={() => {
              setActive(i)
              setAuto(false)
            }}
            className={`rounded-lg border px-4 py-3 text-left text-sm transition-colors ${
              active === i ? 'border-gold bg-gold text-panel font-semibold' : 'border-edge bg-panel/70 text-fog hover:border-snow/60 hover:text-snow'
            }`}
          >
            {t(ag.question)}
          </button>
        ))}
      </div>

      {/* enrutador */}
      <div className="flex items-center justify-center lg:flex-col">
        <div className="relative flex h-24 w-24 flex-col items-center justify-center gap-1 rounded-full border-2 border-gold bg-panel text-gold">
          <Workflow size={24} aria-hidden />
          <span className="text-xs font-semibold">{t(copy.conecta.routerNode)}</span>
          <motion.span
            key={active}
            aria-hidden
            initial={{ scale: 1, opacity: 0.7 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 rounded-full border-2 border-gold"
          />
        </div>
      </div>

      {/* especialistas y resultado */}
      <div className="flex flex-col gap-3">
        <ul className="grid grid-cols-4 gap-2">
          {conecta.agents.map((ag, i) => {
            const Icon = AGENT_ICONS[ag.icon]
            const on = active === i
            return (
              <li
                key={ag.id}
                className={`flex flex-col items-center gap-1 rounded-lg border px-1 py-2.5 transition-all duration-300 ${
                  on ? `border-current bg-panel ${ACCENT[ag.accent].text}` : 'border-edge/70 text-ink-faint'
                }`}
              >
                <Icon size={20} aria-hidden />
                <span className="text-xs font-semibold">{ag.name}</span>
              </li>
            )
          })}
        </ul>

        <div key={agent.id} className="rise min-h-48 rounded-lg border border-edge bg-panel p-4" aria-live="polite">
            <p className={`text-base font-semibold ${a.text}`}>
              {agent.name}: {t(agent.job)}
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-fog">{t(agent.result)}</p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-ink-faint">{t(copy.conecta.sample)}</p>
            <pre className="mt-1 overflow-x-auto font-mono text-xs leading-relaxed text-snow">
{`{ "experto": "${agent.id === 'migra' ? 'migracion' : agent.id}",
  "intencion": "${agent.intent}" }`}
            </pre>
            <p className="mt-2 text-xs text-fog">→ {t(agent.engine)}</p>
        </div>
      </div>
    </div>
  )
}

function Tokens() {
  const { t } = useLang()
  return (
    <div className="rounded-lg border border-edge bg-panel/70 p-5">
      <h4 className="text-base font-semibold text-snow">{t(copy.conecta.tokensTitle)}</h4>
      <div className="mt-4 space-y-4">
        <div>
          <p className="flex justify-between gap-3 text-sm text-fog">
            <span>{t(copy.conecta.tokensFull)}</span>
            <span className="font-mono text-snow">~55.000</span>
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewport}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            className="mt-1.5 h-4 origin-left bg-coral"
          />
        </div>
        <div>
          <p className="flex justify-between gap-3 text-sm text-fog">
            <span>{t(copy.conecta.tokensRouter)}</span>
            <span className="font-mono text-gold">~280</span>
          </p>
          <div className="mt-1.5 h-4 w-1 bg-gold" />
        </div>
      </div>
      <p className="mt-4 text-sm text-fog">{t(copy.conecta.tokensNote)}</p>
      <p className="mt-2 text-sm text-fog">{t(copy.conecta.reliability)}</p>
    </div>
  )
}

export default function Conecta() {
  const { t } = useLang()

  return (
    <section id="agents" className="scroll-mt-20 border-y border-edge bg-panel/50">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <motion.header variants={stagger()} initial="hidden" whileInView="show" viewport={viewport}>
          <motion.p variants={fadeUp} className="flex items-center gap-2 text-sm font-semibold text-gold">
            <Trophy size={16} aria-hidden /> {t(copy.conecta.kicker)}
          </motion.p>
          <motion.h2 variants={fadeUp} className="mt-3 text-6xl font-extrabold text-snow sm:text-7xl">
            {t(copy.conecta.title)}
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 max-w-2xl text-lg leading-relaxed text-fog">
            {t(copy.conecta.lead)}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href={conecta.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-panel transition hover:bg-gold-soft"
            >
              {t(copy.conecta.cta)} <ExternalLink size={15} aria-hidden />
            </a>
            <span className="inline-flex items-center gap-1.5 text-sm text-fog">
              <Lock size={14} aria-hidden /> {t(copy.conecta.privateCode)}
            </span>
          </motion.div>
          <motion.ul variants={fadeUp} className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-y border-edge py-6 sm:grid-cols-4">
            {conecta.facts.map((f) => (
              <li key={f.value}>
                <p className="font-display text-5xl font-bold text-gold">{f.value}</p>
                <p className="text-sm text-fog">{t(f.label)}</p>
              </li>
            ))}
          </motion.ul>
        </motion.header>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-snow">{t(copy.conecta.routerTitle)}</h3>
          <p className="mt-1 max-w-2xl text-fog">{t(copy.conecta.routerLead)}</p>
          <div className="mt-6">
            <Router />
          </div>
          <div className="mt-5">
            <Tokens />
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-snow">{t(copy.conecta.galleryTitle)}</h3>
          <p className="mt-1 text-sm text-fog">{t(copy.conecta.syntheticNote)}</p>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {conecta.gallery.map((g, i) => (
              <li key={g.src} className={`overflow-hidden rounded-lg border border-edge bg-panel ${i === 0 ? 'sm:col-span-2' : ''}`}>
                <img src={g.src} alt={t(g.caption)} loading="lazy" className="block aspect-video w-full object-cover object-top" />
                <p className="px-3 py-2.5 text-sm text-fog">{t(g.caption)}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-snow">{t(copy.conecta.teamTitle)}</h3>
          <div className="mt-5 grid items-center gap-8 lg:grid-cols-[1.25fr_1fr]">
            <figure>
              <img
                src={teamPhoto}
                alt={t(copy.conecta.teamPhoto)}
                loading="lazy"
                className="block aspect-[3/2] w-full rounded-lg border border-edge object-cover object-[center_75%]"
              />
              <figcaption className="mt-2 text-sm text-fog">{t(copy.conecta.teamPhoto)}</figcaption>
            </figure>
            <div>
              <ul className="grid gap-4 sm:grid-cols-2">
                {conecta.team.map((m) => (
                  <li key={m.name} className="border-l-2 border-gold pl-3">
                    <p className="font-semibold text-snow">{m.name}</p>
                    <p className="text-sm text-fog">{t(m.role)}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-fog">{t(copy.conecta.teamNote)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

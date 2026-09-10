import { motion } from 'framer-motion'
import {
  BrainCircuit,
  Cloud,
  Cpu,
  Database,
  Languages,
  Layers,
  Server,
  Smartphone,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { skillGroups, copy } from '../data/content'
import { useLang } from '../i18n/lang'
import { fadeUp, stagger, viewport } from './motion'

const ICONS: Record<string, LucideIcon> = {
  lang: Languages,
  backend: Server,
  frontend: Layers,
  mobile: Smartphone,
  iot: Cpu,
  cloud: Cloud,
  data: Database,
  ai: BrainCircuit,
}

export default function Skills() {
  const { t } = useLang()

  return (
    <section id="stack" className="scroll-mt-24 border-t border-edge/40">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <motion.header variants={stagger()} initial="hidden" whileInView="show" viewport={viewport}>
          <motion.p variants={fadeUp} className="font-mono text-xs uppercase tracking-[0.22em] text-gold">
            02 — stack
          </motion.p>
          <motion.h2 variants={fadeUp} className="mt-3 text-3xl font-bold tracking-tight text-snow sm:text-4xl">
            {t(copy.skills.title)}
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-2 text-fog">
            {t(copy.skills.lead)}
          </motion.p>
        </motion.header>

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
        >
          {skillGroups.map((g) => {
            const Icon = ICONS[g.icon]
            return (
              <motion.article
                key={g.icon}
                variants={fadeUp}
                className="rounded-xl border border-edge bg-panel/60 p-5 transition-colors hover:border-mint/40"
              >
                <h3 className="flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-wider text-snow">
                  <Icon size={16} className="text-mint" aria-hidden />
                  {t(g.title)}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-edge bg-ink/70 px-2 py-0.5 font-mono text-[11px] text-fog"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

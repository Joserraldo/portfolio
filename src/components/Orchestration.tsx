import { motion } from 'framer-motion'
import {
  Bot,
  BrainCircuit,
  ClipboardList,
  Coins,
  GitPullRequestArrow,
  Library,
  Network,
  Split,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { copy, orchestration } from '../data/content'
import { useLang } from '../i18n/lang'
import { fadeUp, stagger, viewport } from './motion'

const ICONS: Record<string, LucideIcon> = {
  plan: ClipboardList,
  split: Split,
  build: Bot,
  review: GitPullRequestArrow,
  bot: Bot,
  skills: Library,
  models: Network,
  tokens: Coins,
  train: BrainCircuit,
}

export default function Orchestration() {
  const { t } = useLang()

  return (
    <section id="ai" className="scroll-mt-20 border-t border-edge">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <motion.header variants={stagger()} initial="hidden" whileInView="show" viewport={viewport}>
          <motion.h2 variants={fadeUp} className="text-5xl font-bold text-snow sm:text-6xl">
            {t(copy.ai.title)}
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-3 max-w-2xl text-lg text-fog">
            {t(copy.ai.lead)}
          </motion.p>
        </motion.header>

        <h3 className="mt-10 text-2xl font-bold text-snow">{t(copy.ai.processTitle)}</h3>
        {/* una secuencia real, por eso va numerada */}
        <motion.ol
          variants={stagger(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {orchestration.steps.map((s, i) => {
            const Icon = ICONS[s.icon]
            return (
              <motion.li key={s.icon} variants={fadeUp} className="rounded-lg border border-edge bg-panel/70 p-4">
                <div className="flex items-center justify-between text-gold">
                  <Icon size={22} aria-hidden />
                  <span className="font-mono text-xs text-ink-faint">{i + 1}/4</span>
                </div>
                <p className="mt-3 font-semibold text-snow">{t(s.title)}</p>
                <p className="mt-1 text-sm leading-relaxed text-fog">{t(s.body)}</p>
              </motion.li>
            )
          })}
        </motion.ol>

        <h3 className="mt-12 text-2xl font-bold text-snow">{t(copy.ai.toolsTitle)}</h3>
        <motion.ul
          variants={stagger(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-5 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {orchestration.tools.map((x) => {
            const Icon = ICONS[x.icon]
            return (
              <motion.li key={x.icon} variants={fadeUp} className="flex gap-3">
                <Icon size={24} className="mt-0.5 shrink-0 text-mint" aria-hidden />
                <div>
                  <p className="font-semibold text-snow">{t(x.title)}</p>
                  <p className="mt-1 text-sm leading-relaxed text-fog">{t(x.body)}</p>
                </div>
              </motion.li>
            )
          })}
        </motion.ul>
      </div>
    </section>
  )
}

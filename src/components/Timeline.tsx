import { motion } from 'framer-motion'
import { GraduationCap, Rocket, Sparkles, Trophy } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { milestones, copy } from '../data/content'
import { useLang } from '../i18n/lang'
import { fadeUp, stagger, viewport } from './motion'

const ICONS: Record<string, LucideIcon> = {
  rocket: Rocket,
  trophy: Trophy,
  sparkles: Sparkles,
  cap: GraduationCap,
}

export default function Timeline() {
  const { t } = useLang()

  return (
    <section id="timeline" className="scroll-mt-24 border-t border-edge/40 bg-panel/40">
      <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
        <motion.header variants={stagger()} initial="hidden" whileInView="show" viewport={viewport}>
          <motion.p variants={fadeUp} className="font-mono text-xs uppercase tracking-[0.22em] text-gold">
            04 — timeline
          </motion.p>
          <motion.h2 variants={fadeUp} className="mt-3 text-3xl font-bold tracking-tight text-snow sm:text-4xl">
            {t(copy.timeline.title)}
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-2 text-fog">
            {t(copy.timeline.lead)}
          </motion.p>
        </motion.header>

        <ol className="relative mt-12 space-y-10 border-l border-edge pl-10">
          {milestones.map((m) => {
            const Icon = ICONS[m.icon]
            return (
              <motion.li
                key={m.icon}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                className="relative"
              >
                <span className="absolute -left-[calc(2.5rem+17px)] top-0 flex h-8 w-8 items-center justify-center rounded-full border border-gold/40 bg-ink text-gold">
                  <Icon size={15} aria-hidden />
                </span>
                <p className="font-mono text-[11px] uppercase tracking-wider text-mint">{t(m.when)}</p>
                <h3 className="mt-1 text-base font-semibold text-snow">{t(m.title)}</h3>
                <p className="font-mono text-xs text-gold">{t(m.org)}</p>
                <p className="mt-2 text-sm leading-relaxed text-fog">{t(m.body)}</p>
              </motion.li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

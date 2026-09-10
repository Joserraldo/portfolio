import { motion } from 'framer-motion'
import { Cpu, Gamepad2, Sparkles, Trophy } from 'lucide-react'
import { copy } from '../data/content'
import { useLang } from '../i18n/lang'
import { fadeUp, stagger, viewport } from './motion'

const trivia = [
  { icon: Trophy, key: 'tkdTitle', body: 'tkdBody' },
  { icon: Sparkles, key: 'disTitle', body: 'disBody' },
  { icon: Cpu, key: 'hwTitle', body: 'hwBody' },
  { icon: Gamepad2, key: 'owTitle', body: 'owBody' },
] as const

export default function About() {
  const { t } = useLang()

  return (
    <section id="about" className="scroll-mt-24 border-t border-edge/40 bg-panel/40">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <motion.header
          variants={stagger()}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <motion.p variants={fadeUp} className="font-mono text-xs uppercase tracking-[0.22em] text-gold">
            01 — about
          </motion.p>
          <motion.h2 variants={fadeUp} className="mt-3 text-3xl font-bold tracking-tight text-snow sm:text-4xl">
            {t(copy.about.title)}
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-2 text-fog">
            {t(copy.about.lead)}
          </motion.p>
        </motion.header>

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="space-y-5">
            <motion.p variants={fadeUp} className="leading-relaxed text-fog">
              {t(copy.about.p1)}
            </motion.p>
            <motion.p variants={fadeUp} className="leading-relaxed text-fog">
              {t(copy.about.p2)}
            </motion.p>
          </div>

          <motion.ul variants={stagger(0.15)} className="grid gap-4 sm:grid-cols-2">
            {trivia.map(({ icon: Icon, key, body }) => (
              <motion.li
                key={key}
                variants={fadeUp}
                className="rounded-xl border border-edge bg-panel/80 p-5 transition-colors hover:border-gold/40"
              >
                <Icon size={20} className="text-gold" aria-hidden />
                <h3 className="mt-3 text-sm font-semibold text-snow">{t(copy.about.trivia[key])}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-fog">
                  {t(copy.about.trivia[body])}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { copy } from '../data/content'
import { useLang } from '../i18n/lang'
import { fadeUp, stagger, viewport } from './motion'

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
            <motion.p variants={fadeUp} className="leading-relaxed text-fog">
              {t(copy.beyond.beltNote)}{' '}
              <a href="#beyond" className="font-mono text-xs text-gold underline-offset-4 hover:underline">
                {t(copy.beyond.title)} ↓
              </a>
            </motion.p>
          </div>

          {/* terminal card */}
          <motion.div
            variants={fadeUp}
            className="self-start overflow-hidden rounded-xl border border-edge bg-void shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)]"
          >
            <div className="flex items-center gap-2 border-b border-edge bg-panel/80 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-coral" aria-hidden />
              <span className="h-2.5 w-2.5 rounded-full bg-amber" aria-hidden />
              <span className="h-2.5 w-2.5 rounded-full bg-mint" aria-hidden />
              <span className="ml-2 font-mono text-[11px] text-ink-faint">bash — joserraldo</span>
            </div>
            <div className="p-5 font-mono text-[13px] leading-relaxed">
              <p className="text-mint">{t(copy.about.term.prompt)}</p>
              {copy.about.term.out.map((line, i) => (
                <p key={i} className="mt-1.5 text-fog">
                  <span className="text-violet">→</span> {t(line)}
                </p>
              ))}
              <p className="mt-2 text-mint">
                $ <span className="inline-block h-4 w-2 animate-pulse bg-gold align-middle" aria-hidden />
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

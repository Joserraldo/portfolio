import { motion } from 'framer-motion'
import { CalendarCheck, ExternalLink, Gauge, ShieldCheck, Sparkles } from 'lucide-react'
import { copy, flagship } from '../data/content'
import { useLang } from '../i18n/lang'
import { fadeUp, stagger, viewport } from './motion'
import shot from '../assets/calaut-landing.jpeg'

export default function Flagship() {
  const { t } = useLang()

  return (
    <section id="flagship" className="scroll-mt-24 border-t border-edge/40">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <motion.div
          variants={stagger(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="relative overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-br from-panel via-panel to-void p-8 sm:p-12"
        >
          {/* decorative corner glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
          />

          <motion.p variants={fadeUp} className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-gold">
            <Sparkles size={13} aria-hidden /> 03 — {t(copy.flagship.kicker)}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-4 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-snow sm:text-4xl">
                {t(copy.flagship.title)}
                <span className="text-gold">.</span>
              </h2>
              <p className="mt-2 font-mono text-sm text-mint">{t(flagship.tagline)}</p>
            </div>
            <a
              href={flagship.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-void transition hover:bg-gold-soft"
            >
              {t(copy.flagship.cta)} <ExternalLink size={15} aria-hidden />
            </a>
          </motion.div>

          <motion.p variants={fadeUp} className="mt-4 max-w-2xl text-sm leading-relaxed text-fog">
            {t(flagship.intro)}
          </motion.p>

          {/* metrics strip */}
          <motion.ul variants={stagger(0.08)} className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {flagship.metrics.map((m) => (
              <motion.li
                key={m.value}
                variants={fadeUp}
                className="rounded-xl border border-gold/25 bg-void/60 px-4 py-3"
              >
                <p className="font-mono text-xl font-bold text-gold">{m.value}</p>
                <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-fog">
                  {t(m.label)}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          {/* capability bullets */}
          <motion.ul variants={stagger(0.06)} className="mt-8 grid gap-x-10 gap-y-4 md:grid-cols-2">
            {flagship.bullets.map((b, i) => (
              <motion.li key={i} variants={fadeUp} className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 text-gold/80" aria-hidden>
                  {i % 3 === 0 ? (
                    <CalendarCheck size={15} />
                  ) : i % 3 === 1 ? (
                    <ShieldCheck size={15} />
                  ) : (
                    <Gauge size={15} />
                  )}
                </span>
                <p className="text-sm leading-relaxed text-fog">{t(b)}</p>
              </motion.li>
            ))}
          </motion.ul>

          {/* landing screenshot in browser chrome */}
          <motion.figure variants={fadeUp} className="mt-10 overflow-hidden rounded-xl border border-gold/25 bg-void shadow-[0_30px_80px_-40px_rgba(217,164,65,0.35)]">
            <figcaption className="flex items-center gap-2 border-b border-edge bg-panel/80 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-coral" aria-hidden />
              <span className="h-2.5 w-2.5 rounded-full bg-amber" aria-hidden />
              <span className="h-2.5 w-2.5 rounded-full bg-mint" aria-hidden />
              <span className="ml-3 rounded-md border border-edge bg-void px-3 py-0.5 font-mono text-[11px] text-fog">
                🔒 calaut.pro
              </span>
            </figcaption>
            <img
              src={shot}
              alt={t(copy.flagship.altShot)}
              loading="lazy"
              className="block w-full"
            />
          </motion.figure>

          {/* gallery: real product sections */}
          <motion.div variants={fadeUp} className="mt-10">
            <p className="font-mono text-[11px] uppercase tracking-wider text-gold">
              {t(copy.flagship.galleryTitle)}
            </p>
            <p className="mt-1 max-w-2xl text-xs leading-relaxed text-fog">
              {t(copy.flagship.galleryLead)}
            </p>
            <motion.ul variants={stagger(0.05)} className="mt-4 grid gap-4 sm:grid-cols-2">
              {flagship.gallery.map((g) => (
                <motion.li
                  key={g.src}
                  variants={fadeUp}
                  className="overflow-hidden rounded-xl border border-edge bg-void"
                >
                  <img src={g.src} alt={t(g.caption)} loading="lazy" className="block w-full" />
                  <p className="border-t border-edge/60 px-4 py-2.5 text-xs leading-relaxed text-fog">
                    {t(g.caption)}
                  </p>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.p variants={fadeUp} className="mt-8 font-mono text-[11px] uppercase tracking-wider text-ink-faint">
            {t(copy.flagship.stackLabel)}: <span className="text-mint">{copy.flagship.stack}</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

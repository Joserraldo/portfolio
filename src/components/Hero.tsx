import { motion } from 'framer-motion'
import { ArrowRight, Mail, MapPin } from 'lucide-react'
import { PROFILE, copy } from '../data/content'
import { useLang } from '../i18n/lang'
import { fadeUp, stagger } from './motion'
import photo from '../assets/profile.png'

export default function Hero() {
  const { t } = useLang()

  return (
    <section id="top" className="relative mx-auto max-w-6xl px-4 pb-24 pt-32 sm:px-6 md:pt-40">
      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        animate="show"
        className="grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr]"
      >
        <div>
          <motion.p
            variants={fadeUp}
            className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-gold"
          >
            <MapPin size={13} aria-hidden /> {PROFILE.location}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-4xl font-bold leading-tight tracking-tight text-snow sm:text-5xl lg:text-6xl"
          >
            José Alejandro
            <br />
            <span className="text-gold">Téllez Prada</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 font-mono text-sm text-mint"
          >
            {t(copy.hero.role)} <span className="text-fog">|</span>{' '}
            {t(copy.hero.tagline)}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-fog"
          >
            {t(copy.hero.blurb)}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-void transition hover:bg-gold-soft"
            >
              {t(copy.hero.ctaProjects)} <ArrowRight size={16} aria-hidden />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-edge px-5 py-2.5 text-sm font-semibold text-snow transition hover:border-gold hover:text-gold"
            >
              <Mail size={16} aria-hidden /> {t(copy.hero.ctaContact)}
            </a>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-10 font-mono text-xs text-fog/80"
          >
            {t(copy.hero.fun)}
          </motion.p>
        </div>

        {/* photo card */}
        <motion.div
          variants={fadeUp}
          className="relative mx-auto w-64 sm:w-72"
        >
          <div className="absolute -inset-3 rounded-2xl border border-gold/20" aria-hidden />
          <img
            src={photo}
            alt={t(copy.hero.altPhoto)}
            width={288}
            height={288}
            className="relative aspect-square w-full rounded-xl border border-edge object-cover shadow-[0_0_60px_-15px_rgba(217,164,65,0.35)]"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

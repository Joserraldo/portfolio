import { motion } from 'framer-motion'
import { ArrowRight, Download, GraduationCap, MapPin, Send, Trophy } from 'lucide-react'
import { PROFILE, copy } from '../data/content'
import { useLang } from '../i18n/lang'
import { fadeUp, stagger } from './motion'
import photo from '../assets/photo.webp'

export default function Hero() {
  const { t, lang } = useLang()

  return (
    <section id="top" className="relative mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6 md:pt-36">
      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        animate="show"
        className="grid items-center gap-12 md:grid-cols-[1.25fr_0.75fr]"
      >
        <div>
          <motion.p
            variants={fadeUp}
            className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-gold"
          >
            <MapPin size={13} aria-hidden /> {PROFILE.location}
          </motion.p>

          <motion.h1 variants={fadeUp} className="text-6xl font-extrabold text-snow sm:text-7xl lg:text-8xl">
            José Alejandro
            <br />
            <span className="text-gold">Téllez Prada</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 text-lg font-semibold text-snow">
            {t(copy.hero.role)}
          </motion.p>

          <motion.p variants={fadeUp} className="mt-3 max-w-xl text-base leading-relaxed text-fog">
            {t(copy.hero.blurb)}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-panel transition hover:bg-gold-soft"
            >
              {t(copy.hero.ctaProjects)} <ArrowRight size={16} aria-hidden />
            </a>
            <a
              href={`cv/CV_Jose_Tellez_Prada_${lang.toUpperCase()}.pdf`}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-snow/50 px-5 py-2.5 text-sm font-semibold text-snow transition hover:border-gold hover:text-gold"
            >
              <Download size={16} aria-hidden /> {t(copy.nav.cv)}
            </a>
          </motion.div>

          <motion.ul variants={fadeUp} className="mt-8 space-y-2 text-sm text-fog">
            <li className="flex items-center gap-2.5">
              <GraduationCap size={16} className="shrink-0 text-mint" aria-hidden /> {t(copy.hero.study)}
            </li>
            <li className="flex items-center gap-2.5">
              <Send size={16} className="shrink-0 text-mint" aria-hidden /> {t(copy.hero.open)}
            </li>
          </motion.ul>
        </div>

        {/* retrato como lámina del plano: marco con cotas y rótulo */}
        <motion.figure variants={fadeUp} className="relative mx-auto w-full max-w-xs md:max-w-sm">
          <span aria-hidden className="absolute -left-4 top-0 bottom-0 w-px bg-snow/50" />
          <span aria-hidden className="absolute -left-[21px] top-0 h-px w-3 bg-snow/50" />
          <span aria-hidden className="absolute -left-[21px] bottom-0 h-px w-3 bg-snow/50" />
          <span aria-hidden className="absolute -top-4 left-0 right-0 h-px bg-snow/50" />
          <span aria-hidden className="absolute -top-[21px] left-0 h-3 w-px bg-snow/50" />
          <span aria-hidden className="absolute -top-[21px] right-0 h-3 w-px bg-snow/50" />
          <img
            src={photo}
            alt={t(copy.hero.altPhoto)}
            width={800}
            height={1067}
            className="block aspect-[4/5] w-full border border-snow/60 object-cover object-top"
          />
          <motion.figcaption
            initial={{ rotate: -2, scale: 0.9, opacity: 0 }}
            animate={{ rotate: -2, scale: 1, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.35 }}
            className="absolute -bottom-5 left-3 right-3 flex items-center gap-2 bg-gold px-3 py-2 text-sm font-semibold text-panel shadow-lg"
          >
            <Trophy size={16} className="shrink-0" aria-hidden /> {t(copy.hero.callout)}
          </motion.figcaption>
        </motion.figure>
      </motion.div>
    </section>
  )
}

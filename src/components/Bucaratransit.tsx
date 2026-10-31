import { motion } from 'framer-motion'
import { Building2, Bus, Code2, ExternalLink, MapPinned, QrCode, Wallet } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { copy, transit } from '../data/content'
import { useLang } from '../i18n/lang'
import { fadeUp, stagger, viewport } from './motion'

const ICONS: Record<string, LucideIcon> = {
  map: MapPinned,
  wallet: Wallet,
  qr: QrCode,
  building: Building2,
}

export default function Bucaratransit() {
  const { t } = useLang()

  return (
    <section id="transit" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <motion.header variants={stagger()} initial="hidden" whileInView="show" viewport={viewport}>
          <motion.p variants={fadeUp} className="flex items-center gap-2 text-sm font-semibold text-gold">
            <Bus size={16} aria-hidden /> {t(copy.transit.kicker)}
          </motion.p>
          <motion.h2 variants={fadeUp} className="mt-3 text-6xl font-extrabold text-snow sm:text-7xl">
            {t(copy.transit.title)}
          </motion.h2>
        </motion.header>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-lg leading-relaxed text-fog">{t(copy.transit.lead)}</p>
            <p className="mt-4 leading-relaxed text-fog">{t(copy.transit.role)}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href={transit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-panel transition hover:bg-gold-soft"
              >
                {t(copy.transit.cta)} <ExternalLink size={15} aria-hidden />
              </a>
              <a
                href={transit.code}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-fog hover:text-snow"
              >
                <Code2 size={15} aria-hidden /> {t(copy.transit.code)}
              </a>
            </div>
            <p className="mt-5 font-mono text-[11px] text-ink-faint">{copy.transit.stack}</p>
          </div>
          <ul className="grid gap-5 sm:grid-cols-2">
            {transit.features.map((f) => {
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

        <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-y border-edge py-6 sm:grid-cols-4">
          {transit.facts.map((f) => (
            <li key={f.label.es}>
              <p className="font-display text-5xl font-bold text-gold">{f.value}</p>
              <p className="text-sm text-fog">{t(f.label)}</p>
            </li>
          ))}
        </ul>

        <h3 className="mt-12 text-2xl font-bold text-snow">{t(copy.transit.appTitle)}</h3>
        <ul className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-4">
          {transit.app.map((s) => (
            <li key={s.src}>
              <img src={s.src} alt={t(s.caption)} loading="lazy" className="block aspect-[9/20] w-full rounded-2xl border border-edge object-cover object-top" />
              <p className="mt-2 text-center text-sm text-fog">{t(s.caption)}</p>
            </li>
          ))}
        </ul>

        <h3 className="mt-12 text-2xl font-bold text-snow">{t(copy.transit.panelTitle)}</h3>
        <ul className="mt-5 grid gap-4 md:grid-cols-3">
          {transit.panels.map((s) => (
            <li key={s.src} className="overflow-hidden rounded-lg border border-edge bg-panel">
              <img src={s.src} alt={t(s.caption)} loading="lazy" className="block aspect-video w-full object-cover object-top" />
              <p className="px-3 py-2.5 text-sm text-fog">{t(s.caption)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Baby, Code2, Medal, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { ProjectAccent } from '../data/content'
import { copy } from '../data/content'
import { useLang } from '../i18n/lang'
import { fadeUp, stagger, viewport } from './motion'

interface Identity {
  icon: LucideIcon
  accent: ProjectAccent
  titleKey: 'tkdTitle' | 'schoolTitle' | 'disTitle' | 'cpTitle'
  bodyKey: 'tkdBody' | 'schoolBody' | 'disBody' | 'cpBody'
}

const IDENTITIES: Identity[] = [
  { icon: Medal, accent: 'gold', titleKey: 'tkdTitle', bodyKey: 'tkdBody' },
  { icon: Baby, accent: 'mint', titleKey: 'schoolTitle', bodyKey: 'schoolBody' },
  { icon: Sparkles, accent: 'amber', titleKey: 'disTitle', bodyKey: 'disBody' },
  { icon: Code2, accent: 'sky', titleKey: 'cpTitle', bodyKey: 'cpBody' },
]

/* accent → concrete classes (static, Tailwind-friendly) */
const STYLE: Record<ProjectAccent, { text: string; border: string; glow: string; bg: string }> = {
  gold: { text: 'text-gold', border: 'hover:border-gold/60', glow: 'bg-gold/10', bg: 'from-gold/15' },
  mint: { text: 'text-mint', border: 'hover:border-mint/60', glow: 'bg-mint/10', bg: 'from-mint/15' },
  coral: { text: 'text-coral', border: 'hover:border-coral/60', glow: 'bg-coral/10', bg: 'from-coral/15' },
  sky: { text: 'text-sky', border: 'hover:border-sky/60', glow: 'bg-sky/10', bg: 'from-sky/15' },
  violet: { text: 'text-violet', border: 'hover:border-violet/60', glow: 'bg-violet/10', bg: 'from-violet/15' },
  amber: { text: 'text-amber', border: 'hover:border-amber/60', glow: 'bg-amber/10', bg: 'from-amber/15' },
}

export default function BeyondCode() {
  const { t } = useLang()

  return (
    <section id="beyond" className="scroll-mt-24 border-t border-edge/40 bg-panel/40">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <motion.header variants={stagger()} initial="hidden" whileInView="show" viewport={viewport}>
          <motion.h2 variants={fadeUp} className="text-5xl font-bold text-snow sm:text-6xl">
            {t(copy.beyond.title)}
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-2 text-fog">
            {t(copy.beyond.lead)}
          </motion.p>
        </motion.header>

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-10 grid gap-5 sm:grid-cols-2"
        >
          {IDENTITIES.map(({ icon: Icon, accent, titleKey, bodyKey }) => {
            const s = STYLE[accent]
            return (
              <motion.article
                key={titleKey}
                variants={fadeUp}
                className={`group relative overflow-hidden rounded-xl border border-edge bg-panel/80 p-6 transition-colors ${s.border}`}
              >
                <div aria-hidden className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl ${s.glow}`} />
                <div className="flex items-center gap-3">
                  <Icon size={22} className={s.text} aria-hidden />
                  <h3 className="text-base font-semibold text-snow">{t(copy.about.trivia[titleKey])}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-fog">{t(copy.about.trivia[bodyKey])}</p>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

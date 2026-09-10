import { motion } from 'framer-motion'
import { AtSign, ExternalLink, Globe, Link2, Mail, MessageCircle } from 'lucide-react'
import { PROFILE, copy } from '../data/content'
import { useLang } from '../i18n/lang'
import { fadeUp, stagger, viewport } from './motion'

export default function Contact() {
  const { t } = useLang()

  const socials = [
    { icon: Globe, label: 'GitHub', value: '@Joserraldo', href: PROFILE.github },
    {
      icon: Link2,
      label: 'LinkedIn',
      value: 'José Alejandro Téllez Prada',
      href: PROFILE.linkedin,
    },
    { icon: AtSign, label: 'Instagram', value: '@Joseale106', href: PROFILE.instagram },
    { icon: MessageCircle, label: 'Discord', value: PROFILE.discord, href: null },
  ] as const

  return (
    <section id="contact" className="scroll-mt-24 border-t border-edge/40">
      <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <motion.header variants={stagger()} initial="hidden" whileInView="show" viewport={viewport}>
          <motion.p variants={fadeUp} className="font-mono text-xs uppercase tracking-[0.22em] text-gold">
            05 — contact
          </motion.p>
          <motion.h2 variants={fadeUp} className="mt-3 text-3xl font-bold tracking-tight text-snow sm:text-4xl">
            {t(copy.contact.title)}
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-3 max-w-md text-fog">
            {t(copy.contact.lead)}
          </motion.p>

          <motion.div variants={fadeUp}>
            <a
              href={`mailto:${PROFILE.email}`}
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-void transition hover:bg-gold-soft"
            >
              <Mail size={16} aria-hidden />
              {t(copy.contact.mailCta)}
              <span className="hidden font-mono text-xs font-normal opacity-80 sm:inline">
                {PROFILE.email}
              </span>
            </a>
          </motion.div>
        </motion.header>

        <motion.ul
          variants={stagger(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mx-auto mt-12 grid max-w-xl gap-3 text-left sm:grid-cols-2"
        >
          {socials.map((s) => {
            const Box = s.href ? 'a' : 'div'
            return (
              <motion.li key={s.label} variants={fadeUp}>
                <Box
                  {...(s.href
                    ? { href: s.href, target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="flex items-center gap-3 rounded-xl border border-edge bg-panel/60 px-4 py-3 transition-colors hover:border-gold/40"
                >
                  <s.icon size={17} className="shrink-0 text-mint" aria-hidden />
                  <span className="min-w-0">
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-fog">
                      {s.label}
                    </span>
                    <span className="block truncate text-sm text-snow">{s.value}</span>
                  </span>
                  {s.href ? (
                    <ExternalLink size={13} className="ml-auto shrink-0 text-fog" aria-hidden />
                  ) : (
                    <span className="ml-auto shrink-0 font-mono text-[10px] uppercase text-fog/70">
                      {t(copy.contact.discordNote)}
                    </span>
                  )}
                </Box>
              </motion.li>
            )
          })}
        </motion.ul>
      </div>
    </section>
  )
}

import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { copy } from '../data/content'
import { useLang } from '../i18n/lang'

const LINKS = [
  { href: '#about', key: 'about' },
  { href: '#stack', key: 'stack' },
  { href: '#projects', key: 'projects' },
  { href: '#timeline', key: 'timeline' },
  { href: '#beyond', key: 'beyond' },
  { href: '#contact', key: 'contact' },
] as const

export default function Nav() {
  const { t, lang, setLang } = useLang()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-edge/60 bg-void/85 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
        aria-label="Main"
      >
        <a href="#top" className="font-mono text-sm tracking-tight text-snow">
          joserraldo<span className="text-gold">_</span>
        </a>

        {/* desktop links */}
        <ul className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <li key={l.key}>
              <a
                href={`#${l.href.slice(1)}`}
                className="font-mono text-xs uppercase tracking-widest text-fog transition-colors hover:text-gold"
              >
                {t(copy.nav[l.key])}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* lang toggle */}
          <div className="flex overflow-hidden rounded-md border border-edge" role="group" aria-label="Language">
            {(['es', 'en'] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
                className={`px-2.5 py-1 font-mono text-xs uppercase transition-colors ${
                  lang === code
                    ? 'bg-gold text-void'
                    : 'text-fog hover:text-snow'
                }`}
              >
                {code}
              </button>
            ))}
          </div>

          {/* mobile toggle */}
          <button
            type="button"
            className="text-fog hover:text-snow md:hidden"
            aria-expanded={open}
            aria-label={t(open ? copy.nav.close : copy.nav.menu)}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-edge/60 md:hidden"
          >
            {LINKS.map((l) => (
              <li key={l.key}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-3 font-mono text-xs uppercase tracking-widest text-fog hover:bg-panel hover:text-gold"
                >
                  {t(copy.nav[l.key])}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}

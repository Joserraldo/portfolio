import { PROFILE, copy } from '../data/content'
import { useLang } from '../i18n/lang'

export default function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-edge/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-10 text-center sm:px-6">
        <p className="font-mono text-sm text-snow">
          joserraldo<span className="text-gold">_</span>
        </p>
        <p className="text-xs text-fog">
          © {year} {PROFILE.name} · {PROFILE.location} ·{' '}
          {t(copy.footer.rights)}
        </p>
        <p className="font-mono text-[11px] text-fog/70">{t(copy.footer.built)}</p>
      </div>
    </footer>
  )
}

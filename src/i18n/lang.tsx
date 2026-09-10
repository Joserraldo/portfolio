import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

export type Lang = 'es' | 'en'

/** A localized string pair. */
export interface L {
  es: string
  en: string
}

interface LangCtx {
  lang: Lang
  setLang: (l: Lang) => void
  /** pick a translation from an L pair */
  t: (pair: L) => string
}

const KEY = '***'
const Ctx = createContext<LangCtx | null>(null)

function readStored(): Lang {
  try {
    const v = localStorage.getItem(KEY)
    if (v === 'es' || v === 'en') return v
  } catch {
    /* private mode */
  }
  return 'es'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(readStored)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem(KEY, lang)
    } catch {
      /* private mode */
    }
  }, [lang])

  const value = useMemo<LangCtx>(
    () => ({ lang, setLang, t: (pair: L) => pair[lang] }),
    [lang],
  )

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useLang(): LangCtx {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useLang must be used inside <LangProvider>')
  return ctx
}

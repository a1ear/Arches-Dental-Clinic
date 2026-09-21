import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { LOCALES, translations } from './translations'

const STORAGE_KEY = 'adc-locale'
const DEFAULT = 'en'

const LocaleContext = createContext(null)

function readStored() {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    return LOCALES.some((l) => l.code === v) ? v : DEFAULT
  } catch {
    return DEFAULT
  }
}

export function LocaleProvider({ children }) {
  // Always start in English. The prerendered HTML is English, and a hydrating
  // client has to render the same tree the server sent — reading localStorage
  // here would hand a returning Tagalog visitor a different one. Their saved
  // choice is applied right after hydration instead.
  const [locale, setLocaleState] = useState(DEFAULT)

  useEffect(() => {
    const stored = readStored()
    if (stored !== DEFAULT) setLocaleState(stored)
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale === 'hil' ? 'hil' : locale
  }, [locale])

  const setLocale = useCallback((code) => {
    if (!LOCALES.some((l) => l.code === code)) return
    setLocaleState(code)
    try {
      localStorage.setItem(STORAGE_KEY, code)
    } catch {
      /* private mode — the choice just won't persist */
    }
  }, [])

  // t('hero.title1') — falls back to English, then to the key itself, so a
  // missing string is never a blank space on the page.
  const t = useCallback(
    (path) => {
      const walk = (obj) => path.split('.').reduce((o, k) => (o == null ? undefined : o[k]), obj)
      return walk(translations[locale]) ?? walk(translations[DEFAULT]) ?? path
    },
    [locale]
  )

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t])
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used inside <LocaleProvider>')
  return ctx
}

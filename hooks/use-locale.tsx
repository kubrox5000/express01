"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { type Locale, defaultLocale, getTranslations, isRTL } from "@/lib/i18n"

interface LocaleContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: ReturnType<typeof getTranslations>
  isRTL: boolean
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(defaultLocale)
  const t = getTranslations(locale)
  const rtl = isRTL(locale)

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t, isRTL: rtl }}>
      <div dir={rtl ? "rtl" : "ltr"} className={rtl ? "font-arabic" : "font-latin"}>
        {children}
      </div>
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider")
  }
  return context
}

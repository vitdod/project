// import { includes, splitAtFirst, valueOf } from '../utils'
import { FALLBACK_LOCALE, LOCALES } from '../../types/locales'
import { includes } from '../check'
import { valueOf } from '../object'
import { splitAtFirst } from '../string'

export const LANGUAGES = ['ua', 'en', 'ru'] as const
export const localeByLanguage = {
    ru: 'ru-RU',
    en: 'en-US',
    ua: 'uk-UA',
} as const

export type Language = typeof LANGUAGES[number]
export type SupportedLocale = typeof LOCALES[number]

export const isLanguage = includes(LANGUAGES)
export const isSupportedLocale = includes(LOCALES)
export const isWordpressLocale = includes(['en-us', 'uk-ua', 'ru-ru'] as const)

const findLocaleByLanguage = valueOf(localeByLanguage)

export const getWPLocaleUnsafe = (locale: string = FALLBACK_LOCALE) => locale.toLowerCase().replace('-', '_')
export const getLanguageUnsafe = (locale: string) => {

  return locale === 'uk-UA' ? splitAtFirst(locale, '-')[1].toLowerCase() : splitAtFirst(locale, '-')[0]
}

export const guessLanguage = (locale?: string): Language => {
  // console.log(locale)
  if (!locale) return 'ru'

  const language = getLanguageUnsafe(locale)
  // console.log(language)

  return isLanguage(language) ? language : 'ru'
}


export const guessLocale = (localeOrLanguage?: string) => {
  if (!localeOrLanguage) return FALLBACK_LOCALE
  if (isSupportedLocale(localeOrLanguage)) return localeOrLanguage

  const language = getLanguageUnsafe(localeOrLanguage)

  return findLocaleByLanguage(language) ?? FALLBACK_LOCALE
}

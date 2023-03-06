import { findKeyByValue, valueOf } from './object'

export const selectLanguage = 'hs_language'
export const languageOptions = {
  ua: 'uk-UA',
  en: 'en-US',
  ru: 'ru-RU',
} as const

export type LanguageCode = keyof typeof languageOptions

export const findLanguageCode = findKeyByValue(languageOptions)
export const getLocaleCode = valueOf(languageOptions)
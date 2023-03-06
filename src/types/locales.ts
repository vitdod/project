export const LOCALES = ['en-US', 'uk-UA', 'ru-RU'] as const

export const LOCALE_NAMES = {
  'ru-RU': 'Russian',
  'en-US': 'English',
  'uk-UA': 'Ukrainian',
} as const
export const LANGUAGES = ['ua', 'en', 'ru'] as const

export const REGIONS = ['RU', 'US', 'UA'] as const
export const FALLBACK_LOCALE = 'ru-RU' as const
export type Locale = typeof LOCALES[number]
export type Language = typeof LANGUAGES[number]
export type Region = typeof REGIONS[number]
export type LocalePair = [Language, Region]
/** Any combination of known languages and regions */
export type LocaleCode = `${LocalePair[0]}-${LocalePair[1]}`
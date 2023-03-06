import { Locale } from '../../types/locales'
import * as en_US from './en-US'
import * as ru_RU from './ru-RU'
import * as uk_UA from './uk-UA'

type AllKeys<T> = T extends object ? keyof T : never
export type MergedKeys<T = DefaultNamespace> = { [key in AllKeys<T[keyof T]>]: string }

export type DefaultNamespace = typeof ru_RU
export type L10nNamespace = keyof DefaultNamespace

const mergeObjectKeys = <T extends object>(lang: T): MergedKeys<T> =>
  Object.values(lang).reduce<MergedKeys<T>>((acc, values) => ({ ...acc, ...values }), {} as MergedKeys<T>)

const fillDefaultValues = <T>(lang: MergedKeys<T>): MergedKeys<DefaultNamespace> => ({
  ...mergeObjectKeys(ru_RU),
  ...lang,
})

export const l10n: { [key in Locale]: MergedKeys } = {
  'en-US': mergeObjectKeys(ru_RU),
  'ru-RU': fillDefaultValues(mergeObjectKeys(en_US)),
  'uk-UA': fillDefaultValues(mergeObjectKeys(uk_UA)),
}

export const l10nByNamespace = {
    'ru-RU': ru_RU,
    'en-US': en_US,
    'uk-UA': uk_UA,
}

import type { L10nNamespace } from '.'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../../../next-i18next.config'

export const loadTranslations = async (locale = 'ru-RU', namespaces: L10nNamespace[] = []) => {
  if (locale === 'default') return {}

  const allNamespaces = [...new Set([...namespaces])]

  return await serverSideTranslations(locale, allNamespaces, nextI18NextConfig)
}

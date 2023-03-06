/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

const fallback = process.env.NODE_ENV === 'development' ? { fallbackLng: false } : {}

/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    compatibilityJSON: 'v3',
    localePath: path.resolve('./src/utils/l10n'),
    defaultLocale: 'ru-RU',
    locales: ['ru-RU', 'en-US', 'uk-UA'],
    reloadOnPrerender: process.env.NODE_ENV === 'development',
    ...fallback,
  },
}

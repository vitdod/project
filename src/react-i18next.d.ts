
import common from './utils/l10n/ru-RU/common.json'
import 'react-i18next'

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'no_default_ns'
    ns: [
      'common',
    ]
    resources: {
      common: typeof common
    }
  }
}

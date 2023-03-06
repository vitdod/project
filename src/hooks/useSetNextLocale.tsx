import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { isSupportedLocale } from '../utils/i18-utils/locale'
import { getLocaleCode, LanguageCode } from '../utils/languages'

export const useSetNextLocale = () => {
  const router = useRouter()

  const setLocale = useCallback(
    (languageCode: LanguageCode) => {
      const locale = getLocaleCode(languageCode)

      if (isSupportedLocale(locale)) {
        Cookies.set('NEXT_LOCALE', locale, {
          expires: 365,
          secure: true,
        })
        Cookies.set('rvv-locale', locale, {
          expires: 365,
          secure: true,
        })

        router.push(router.asPath, router.asPath, { locale })
      } else {
        window.location.pathname = `/${locale}${router.asPath}`
      }
    },
    [router],
  )

  return setLocale
}

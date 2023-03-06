import { getLocaleCode, LanguageCode } from './languages'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { LOCALES } from '../types/locales'
import { includes } from './check'

export const useSetNextLocale = () => {
  const router = useRouter()
  const isSupportedLocale = includes(LOCALES)
  
  const setLocale = useCallback(
    (languageCode: LanguageCode) => {
      // console.log(languageCode)
      const locale = getLocaleCode(languageCode)
      if (isSupportedLocale(locale)) {
        Cookies.set('NEXT_LOCALE', locale, {
          expires: 365,
          secure: true,
        })
        Cookies.set('rvr-locale', locale, {
          expires: 365,
          secure: true,
        })

        router.push(router.asPath, router.asPath, { locale })
      } else {
        router.push(router.asPath, router.asPath, { locale })
      }
    },
    [router],
  )

  return setLocale
}


import * as Select from '@radix-ui/react-select'
import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'
import { LOCALE_NAMES } from '../../../../types/locales'
import { guessLanguage } from '../../../../utils/i18-utils/locale'
import { languageOptions } from '../../../../utils/languages'
import { getEntries } from '../../../../utils/object'
import { capitalizeFirst } from '../../../../utils/string'
import { Check } from '../../Icons/Check'
import { DropdownArrow } from '../../Icons/DropdownArrow'
import { selectContent, selectItem, selectTrigger, triggerIcon } from './SelectLanguage.css'

type SelectLangProps = {
  onValueChange: (languageCode: 'ua' | 'en' | 'ru') => void
}
export const SelectLang = ({ onValueChange }: SelectLangProps) => {
  const { locale } = useRouter()
  const selectValue = guessLanguage(locale)
  const [selectedLang, setSelectedLang] = useState(selectValue)
  const setLocale = useCallback(
    (val: 'ua' | 'en' | 'ru') => {
      setSelectedLang(val)
      onValueChange(val)
    },
    [onValueChange],
  )

  const locales = getEntries(languageOptions).map(([languageCode, localeCode]) => ({
    label: LOCALE_NAMES[localeCode],
    value: languageCode,
  }))

  return (
    <Select.Root onValueChange={setLocale}>
      <Select.Trigger className={selectTrigger}>
        <div style={{ display: 'flex', cursor: 'pointer' }}>
          <p style={{ alignItems: 'end', color: 'rgba(255, 255, 255, 0.7)', paddingRight: '10px' }}>
            {capitalizeFirst(selectValue)}
          </p>
          <div className={triggerIcon}>
            <DropdownArrow />
          </div>
        </div>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className={selectContent} position="popper" sideOffset={5}>
          <Select.Viewport>
            {locales.map((lang, index) => (
              <Select.Item
                key={`${index}-lang`}
                className={selectItem}
                value={lang.value}
                data-state={selectedLang === lang.value ? 'checked' : ''}
              >
                <p style={{ color: 'black', textAlign: 'start' }}>{capitalizeFirst(lang.value)}</p>
                {selectedLang === lang.value && (
                  <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
                    <Check />
                  </div>
                )}
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}

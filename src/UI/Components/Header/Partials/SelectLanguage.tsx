import { useRouter } from 'next/router'
import { LOCALE_NAMES } from '../../../../types/locales'
import { guessLanguage } from '../../../../utils/i18-utils/locale'
import { languageOptions } from '../../../../utils/languages'
import { getEntries } from '../../../../utils/object'
import { useSetNextLocale } from '../../../../utils/setNextLocale'
import { DropdownArrow } from '../../Icons/DropdownArrow'

export type SelectOption = {
  value: string
}

export type SelectOptions = Readonly<SelectOption[]>

export type SelectProps<Options extends SelectOptions, Multiple extends boolean> = {
  children?: React.ReactNode
  label?: string
  secondaryLabel?: string
  tertiaryLabel?: string
  hasInvisibleLabel?: boolean
  disabled?: boolean
  value?: string[] | string
  multiple?: Multiple
  id?: string
  onChange?: (ev: React.ChangeEvent<HTMLSelectElement>) => void // This could probably be typed from the supplied SelectOption. Would be cool!
  onValueChange?: (value: Options[number]['value']) => void // This could probably be typed from the supplied SelectOption. Would be cool!
  placeholder?: string
  options?: Options
  loading?: boolean
  name?: HTMLSelectElement['name']
}

const SelectLanguage = <Options extends SelectOptions, Multiple extends boolean>(
  {
    label,
    secondaryLabel,
    tertiaryLabel,
    placeholder,
    hasInvisibleLabel = false,
    value: controlledValue,
    disabled,
    options,
    onChange,
    onValueChange: setControlledValue,
    loading,
    value,
    ...props
  }: SelectProps<Options, Multiple>,
  ref: React.ForwardedRef<HTMLSelectElement>,
) => {
  const { locale } = useRouter()
  const setLocale = useSetNextLocale()
  const locales = getEntries(languageOptions).map(([languageCode, localeCode]) => ({
    label: LOCALE_NAMES[localeCode],
    value: languageCode,
  }))
  const selectValue = guessLanguage(locale)
  // console.log(value, options)
  return (
    <div style={{ display: 'flex', cursor: 'pointer' }}>
      <p style={{ alignItems: 'end', color: 'rgba(255, 255, 255, 0.7)' }}>Ru</p>
      <div style={{ paddingLeft: '10px' }}>
        <DropdownArrow />
      </div>
    </div>
  )
}

export default SelectLanguage

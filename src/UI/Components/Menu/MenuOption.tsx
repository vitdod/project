import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { activeOptiontext } from '../Sidebar/Sidebar.css'

type MenuOptionsProps = {
  className: string
  text: string
  activeClassName: string
  optionTextClassName?: string
  onChange?: (text: string) => void | undefined
}
export const MenuOption = ({ className, activeClassName, optionTextClassName, text }: MenuOptionsProps) => {
  const [active, setActive] = useState(false)
  const { pathname } = useRouter()
  useEffect(() => {
    if (pathname.slice(1) === text) setActive(true)
    else setActive(false)
  }, [pathname])
  const { t } = useTranslation(['common'], { useSuspense: false })
  const choose = () => {
    setActive(true)
  }
  const wrapperStyle = active ? [className, activeClassName].join(' ') : className
  const textStyle = active ? [optionTextClassName, activeOptiontext].join(' ') : optionTextClassName
  return (
    <Link href={`/${text}`} onClick={choose}>
      <div className={wrapperStyle}>
        <p className={textStyle}>{t(`${text}`)}</p>
      </div>
    </Link>
  )
}

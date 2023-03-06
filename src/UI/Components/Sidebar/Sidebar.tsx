import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import useOutsideClick from '../../../hooks/useClickOutside'
import { useSetNextLocale } from '../../../hooks/useSetNextLocale'
import { useSidebarState } from '../../../hooks/useSidebar'
import { mainLogoTitle } from '../../../styles/typography.css'
import { logoWrapper } from '../Footer/Footer.css'
import { SelectLang } from '../Header/Partials/SelectLang'
import { Close } from '../Icons/Close'
import { InstagramLogo } from '../Icons/InstagramLogo'
import { MainLogo } from '../Icons/MainLogo'
import { TelegramLogo } from '../Icons/TelegramLogo'
import { YoutubeLogo } from '../Icons/YoutubeLogo'
import { MenuOption } from '../Menu/MenuOption'
import { menuOptions } from '../Navbar/Navbar'
import { Icon } from '../Reusable/Icon/Icon'
import {
  activeOption,
  closed,
  iconsWrapper,
  opened,
  optiontext,
  sidebar,
  sidebarMenuOption,
} from './Sidebar.css'

export const Sidebar = () => {
  const { t } = useTranslation(['common'], { useSuspense: false })
  const setLocale = useSetNextLocale()
  const ref = useRef<Element | null>(null)
  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>('#portal')
  }, [])
  const title = t('title')
  const sidbebarRef = useRef<HTMLDivElement>(null)

  const isBlogPost = useRouter().route === '/blog/[slug]'
  const closeWrapperStyles = [sidebar, closed].join(' ')
  const openWrapperStyles = [sidebar, opened].join(' ')

  const { isOpened, setIsOpened } = useSidebarState()
  useOutsideClick(sidbebarRef, setIsOpened)
  const [wrapperStyles, setWrapperStyles] = useState(closeWrapperStyles)
  useEffect(() => {
    isOpened ? setWrapperStyles(openWrapperStyles) : setWrapperStyles(closeWrapperStyles)
  }, [isOpened])

  const close = () => {
    setIsOpened(false)
  }

  // console.log(outsideClick)
  return (
    ref.current &&
    createPortal(
      <div className={wrapperStyles} ref={sidbebarRef}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', cursor: 'pointer' }} onClick={close}>
          <Close />
        </div>

        <div style={{ display: 'flex' }}>
          <div className={logoWrapper}>
            <Icon Icon={MainLogo} fillOpacity={0.7} />
          </div>
          <p className={mainLogoTitle({ type: 'sidebar' })}>{title}</p>
        </div>
        <div>
          {menuOptions.map((option, index) => {
            return (
              <MenuOption
                key={`${index}-sidebar_option`}
                text={option}
                className={sidebarMenuOption}
                activeClassName={activeOption}
                optionTextClassName={optiontext}
              />
            )
          })}
        </div>
        <div className={iconsWrapper}>
          <Icon Icon={YoutubeLogo} />
          <Icon Icon={InstagramLogo} />
          <Icon Icon={TelegramLogo} />
        </div>
        {!isBlogPost && (
          <div style={{ paddingLeft: '45px' }}>
            <SelectLang onValueChange={setLocale} />
          </div>
        )}
      </div>,
      ref.current,
    )
  )
}

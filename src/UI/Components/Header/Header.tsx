import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useBreakpoint } from '../../../hooks/useBreakpoint'
import { useScrollPosition } from '../../../hooks/useScrollPosition'
import { useSidebarState } from '../../../hooks/useSidebar'
import { mainLogoTitle } from '../../../styles/typography.css'
import { useSetNextLocale } from '../../../utils/setNextLocale'
import { blocksWrapper } from '../../Layouts/LayoutRecipes.css'
import { InstagramLogo } from '../Icons/InstagramLogo'
import { MainLogo } from '../Icons/MainLogo'
import { Menu } from '../Icons/Menu'
import { TelegramLogo } from '../Icons/TelegramLogo'
import { YoutubeLogo } from '../Icons/YoutubeLogo'
import Navbar from '../Navbar/Navbar'
import { Icon } from '../Reusable/Icon/Icon'
import { Sidebar } from '../Sidebar/Sidebar'
import { iconsWrapper, logo, logoWrapper, menu, selectLangWrapper, socialLinksWrapper } from './Header.css'
import { SelectLang } from './Partials/SelectLang'

const Header = () => {
  const { t } = useTranslation(['common'], { useSuspense: false })
  const setLocale = useSetNextLocale()
  const isBlogPost = useRouter().route === '/blog/[slug]'
  const breakpoint = useBreakpoint()
  const title = breakpoint !== 'wide' ? t('title_abbr') : t('title')
  const { setIsOpened } = useSidebarState()
  const setSidebar = (val: boolean) => {
    setIsOpened(val)
  }
  const { scrollPosition } = useScrollPosition()
  const style =
    scrollPosition < 160
      ? blocksWrapper({ type: 'headerWrapper' })
      : blocksWrapper({ type: 'headerWrapperSticky' })
  return (
    <>
      <div className={style}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingTop: '10px',
          }}
        >
          <Sidebar />
          <Link href="/">
            <div style={{ display: 'flex' }}>
              <div className={logoWrapper}>
                <Icon Icon={MainLogo} className={logo} />
              </div>
              <p className={mainLogoTitle({ type: 'header' })}>{title}</p>
            </div>
          </Link>
          <div className={socialLinksWrapper}>
            <div className={iconsWrapper}>
              <Icon Icon={YoutubeLogo} />
              <Icon Icon={InstagramLogo} />
              <Icon Icon={TelegramLogo} />
            </div>
            {!isBlogPost && (
              <div className={selectLangWrapper}>
                <SelectLang onValueChange={setLocale} />
              </div>
            )}
            <div className={menu} onClick={() => setSidebar(true)}>
              <Menu />
            </div>
          </div>
        </div>

        <Navbar />
      </div>
    </>
  )
}
export default Header

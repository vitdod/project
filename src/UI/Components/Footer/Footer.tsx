import { useTranslation } from 'next-i18next'
import { useClientSide } from '../../../hooks/useClientSide'
import { menuOptions } from '../../../hooks/useSetActiveOptions'
import { mainLogoTitle } from '../../../styles/typography.css'
import { blocksWrapper } from '../../Layouts/LayoutRecipes.css'
import { MainLogo } from '../Icons/MainLogo'
import { MenuOption } from '../Menu/MenuOption'
import { Icon } from '../Reusable/Icon/Icon'
import { activeOption, optiontext } from '../Sidebar/Sidebar.css'
import { SocialIconsWrapper } from '../SocialconsContainer/SocialIconsContainer'
import {
  footerMenuOption,
  logoAndMenuWrapper,
  logoWrapper,
  optionsColumnWrapper,
  optionsWrapper,
  socialLinksWrapperFooter,
} from './Footer.css'

export const Footer = () => {
  const { t } = useTranslation(['common'], { useSuspense: false })
  const title = t('title')
  const isClientSide = useClientSide()
  return (
    <div className={blocksWrapper({ type: 'footerBlockWrapper' })}>
      <div className={logoAndMenuWrapper}>
        <div style={{ display: 'flex' }}>
          <div className={logoWrapper}>
            <Icon Icon={MainLogo} />
          </div>
          <p className={mainLogoTitle()}>{title}</p>
        </div>
        <div className={optionsWrapper}>
          <div className={optionsColumnWrapper}>
            {menuOptions.slice(0, 2).map((option, index) => (
              <MenuOption
                key={`${index}-footer_option_first`}
                text={option}
                className={footerMenuOption}
                activeClassName={activeOption}
                optionTextClassName={optiontext}
              />
            ))}
          </div>
          <div className={optionsColumnWrapper}>
            {menuOptions.slice(2, 4).map((option, index) => (
              <MenuOption
                key={`${index}-footer_option_sec`}
                text={option}
                className={footerMenuOption}
                activeClassName={activeOption}
                optionTextClassName={optiontext}
              />
            ))}
          </div>
        </div>
      </div>
      <SocialIconsWrapper className={socialLinksWrapperFooter} />
    </div>
  )
}

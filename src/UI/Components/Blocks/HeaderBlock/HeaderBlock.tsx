import { useRouter } from 'next/router'
import { headerBlockIntro, mainTitle } from '../../../../styles/typography.css'
import { WPHeaderBlockInfo } from '../../../../types/wordpress'
import { blocksWrapper } from '../../../Layouts/LayoutRecipes.css'
import { MainLogo } from '../../Icons/MainLogo'
import { ButtonController } from '../../Reusable/Button/ButtonController'
import { headerBlockWrapper, headerInfoBlockWrapper, logoWrapper } from './HeaderBlock.css'

export type HeaderBlockProps = {
  data: WPHeaderBlockInfo
}

export const HeaderBlock = ({ data }: HeaderBlockProps) => {
  const { intro, bgimage, title } = data
  const router = useRouter()
  const path = router.asPath
  return (
    <>
      <div className={blocksWrapper({ type: 'headerBlockWrapper' })}>
        <div className={headerBlockWrapper({})}>
          <div className={logoWrapper}>
            <MainLogo />
          </div>
          <div className={headerInfoBlockWrapper({})}>
            <div>
              <h1 className={mainTitle}>{title}</h1>
            </div>
            {intro && <p className={headerBlockIntro({})}>{intro}</p>}
            <ButtonController />
          </div>
        </div>
      </div>
    </>
  )
}

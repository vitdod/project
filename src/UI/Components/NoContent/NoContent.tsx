import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { headerBlockIntro, mainTitleErrorPage } from '../../../styles/typography.css'
import {
  headerButton,
  headerInfoBlockWrapper,
} from '../../../UI/Components/Blocks/HeaderBlock/HeaderBlock.css'
import Button from '../../../UI/Components/Reusable/Button/Button'
import { errorPageButtonWrapper } from '../../../UI/Components/Reusable/Button/Button.css'
import { blocksWrapper } from '../../../UI/Layouts/LayoutRecipes.css'
const NoContent = () => {
  const { t } = useTranslation(['common'], { useSuspense: false })
  return (
    <div className={blocksWrapper({ type: 'headerBlockWrapper' })}>
      <div className={headerInfoBlockWrapper({ type: 'errorPageWrapper' })}>
        <h1 className={mainTitleErrorPage}>{t('title')}</h1>
        <p className={headerBlockIntro({ type: 'headerBlockIntroErrorPage' })}>
          Вы перешли по ошибочной ссылке — такой страницы не существует, или она была удалена.
        </p>
        <div className={errorPageButtonWrapper}>
          <Link href="/">
            <Button className={headerButton({ type: 'single' })} tone="red" text={t('to_main')} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NoContent

import { GetStaticProps } from 'next'
import { SSRConfig, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from 'next/link'
import { headerBlockIntro, mainTitleErrorPage } from '../styles/typography.css'
import { headerButton, headerInfoBlockWrapper } from '../UI/Components/Blocks/HeaderBlock/HeaderBlock.css'
import Button from '../UI/Components/Reusable/Button/Button'
import { errorPageButtonWrapper } from '../UI/Components/Reusable/Button/Button.css'
import { blocksWrapper } from '../UI/Layouts/LayoutRecipes.css'
const ErrorPage = () => {
  const { t } = useTranslation(['common'], { useSuspense: false })
  return (
    <div className={blocksWrapper({ type: 'headerBlockWrapper' })}>
      <div className={headerInfoBlockWrapper({ type: 'errorPageWrapper' })}>
        <h1 className={mainTitleErrorPage}>{t('error.404')}</h1>
        <p className={headerBlockIntro({ type: 'headerBlockIntroErrorPage' })}>{t('error.404_message')}</p>
        <div className={errorPageButtonWrapper}>
          <Link href="/">
            <Button className={headerButton({ type: 'single' })} tone="red" text={t('to_main')} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage

export const getStaticProps: GetStaticProps<SSRConfig> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

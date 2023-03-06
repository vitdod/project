import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import {
  blockHeading,
  startPageHelpText,
  startPageHelpTextTitle,
  startPageHelpTitleText,
} from '../../../../styles/typography.css'
import { WPStartPageHelpBlock } from '../../../../types/wordpress'
import { blocksWrapper } from '../../../Layouts/LayoutRecipes.css'
import Button from '../../Reusable/Button/Button'
import { buttonWrapper, wrapper } from './StartPageHelpBlock.css'

export type StartPageHelpBlockProps = {
  data: WPStartPageHelpBlock
}

export const StartPageHelpBlock = ({ data }: StartPageHelpBlockProps) => {
  const { startpagehelpblock } = data
  if (!startpagehelpblock) return <div>0</div>
  const titleParagraph = startpagehelpblock.slice(0, 1)[0]
  const otherPosts = startpagehelpblock.slice(1)
  const { t } = useTranslation(['common'], { useSuspense: false })
  return (
    <div className={blocksWrapper({ type: 'startPageHelpBlockWrapper' })}>
      <div style={{ width: '80%' }}>
        <p className={blockHeading({ color: 'red' })} style={{ padding: '10px 0' }}>
          {titleParagraph.title}
        </p>
        <p className={startPageHelpTitleText}>{titleParagraph.text}</p>
      </div>
      <div className={wrapper}>
        {otherPosts.map((post, index) => {
          return (
            <div key={`${index}-helpPosts`}>
              <div className={startPageHelpTextTitle}>{post.title}</div>
              <div className={startPageHelpText}>{post.text}</div>
            </div>
          )
        })}
      </div>

      <div className={buttonWrapper}>
        <Link href="/help">
          <Button tone="dark" text={t('help_rvr')} style={{ width: '100%' }} />
        </Link>
      </div>
    </div>
  )
}

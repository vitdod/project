import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import {
  blockHeading,
  helpPageMoneyTransferReasonBold,
  startPageHelpTextTitle,
  startPageHelpTitleText,
} from '../../../../styles/typography.css'
import { WPHelpPageBlock } from '../../../../types/wordpress'
import { blocksWrapper } from '../../../Layouts/LayoutRecipes.css'
import Button from '../../Reusable/Button/Button'
import { card, helpPageBlockWrapper, otherBlockButton, requisiteBlockWrapper } from './HelpPageBlock.css'
import { RequisiteCard } from './partials/RequisiteCard'

type HelpPageBlockProps = {
  data: WPHelpPageBlock
}

export const HelpPageBlock = ({ data }: HelpPageBlockProps) => {
  const { moneytransferBlock, otherBlock, reasonsBlock, requisitesBlock } = data
  const { t } = useTranslation(['common'], { useSuspense: false })
  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }
  return (
    <div className={blocksWrapper({ type: 'helpPageBlocksWrapper' })}>
      <p className={blockHeading({ color: 'red' })}>{reasonsBlock.title}</p>
      <div className={helpPageBlockWrapper}>
        {reasonsBlock.reasons.map((reason, index) => {
          //   const { reason } = el
          return (
            <div className={card()} key={`reasonsBlock-${index}`}>
              <div>
                <p
                  style={{
                    padding: '15px 0',
                  }}
                  className={startPageHelpTextTitle}
                >
                  {reason.title}
                </p>
                <p className={startPageHelpTitleText}>{reason.explanation}</p>
              </div>
            </div>
          )
        })}
      </div>
      <p style={{ paddingTop: '50px' }} className={blockHeading({ color: 'red' })}>
        {moneytransferBlock.title}
      </p>
      <div className={helpPageBlockWrapper}>
        {moneytransferBlock.reasons.map((reason, index) => {
          //   const { reason } = el
          return (
            <div className={card({ type: 'moneyTransferCard' })} key={`moneytransferBlock-${index}`}>
              <div
                style={{
                  backgroundColor: '#111A22',
                  width: '56px',
                  padding: '10px 0',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <p className={helpPageMoneyTransferReasonBold({})}>{index + 1}</p>
              </div>
              <p
                style={{
                  padding: '15px 0',
                }}
                className={startPageHelpTextTitle}
              >
                {reason.title}
              </p>
              <p className={startPageHelpTitleText}>{reason.text}</p>
            </div>
          )
        })}
      </div>
      <div className={requisiteBlockWrapper} id="requisiteBlock">
        <p className={blockHeading({ color: 'white' })}>{requisitesBlock.title}</p>
        <div className={helpPageBlockWrapper}>
          {requisitesBlock.options.map((option) => {
            return (
              <RequisiteCard
                options={option}
                type="requisiteCard"
                textColor="helpPageTitle"
                fieldType="helpPageField"
              />
            )
          })}
        </div>{' '}
        <Link href="/help/more">
          <Button tone="red" text={t('more_options')} className={otherBlockButton} />
        </Link>
      </div>

      <p style={{ paddingTop: '40px' }} className={blockHeading({ color: 'red' })}>
        {otherBlock.title}
      </p>
      <div className={helpPageBlockWrapper}>
        {otherBlock.options.map((option, index) => {
          return (
            <>
              <div className={card({ type: 'otherCard' })} key={`otherBlock-${index}`}>
                <p className={startPageHelpTextTitle}>{option.title}</p>
                <p className={startPageHelpTitleText}>{option.text}</p>

                <Link href="/contacts">
                  <Button tone="dark" text={t('offer_help')} className={otherBlockButton} />
                </Link>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}

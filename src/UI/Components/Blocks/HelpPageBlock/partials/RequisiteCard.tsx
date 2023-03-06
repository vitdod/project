import Tooltip from '@mui/material/Tooltip'
import { useTranslation } from 'react-i18next'
import {
  helpPageMoneyRequisiteBank,
  helpPageMoneyRequisiteNumber,
  helpPageMoneyTransferReasonBold,
} from '../../../../../styles/typography.css'
import { Copy } from '../../../Icons/Copy'
import { card, requisiteField } from '../HelpPageBlock.css'

type RequisiteCardProps = {
  type: 'moneyTransferCard' | 'requisiteCard' | 'requisiteCardMoreHelpPage' | 'otherCard' | 'requisiteCard'
  fieldType: 'moreHelpPageField' | 'helpPageField'
  textColor: 'moreHelpPageTitle' | 'helpPageTitle'
  options: {
    optionsTitle: String
    options: {
      title: String
      optionContent: string
    }[]
  }
}
export const RequisiteCard = ({ options, type, fieldType, textColor }: RequisiteCardProps) => {
  const { t } = useTranslation(['common'], { useSuspense: false })
  const copyText = t('copy')
  const { optionsTitle } = options
  const margin = optionsTitle ? 'none' : 'auto'
  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }
  return (
    <div className={card({ type: `${type}` })}>
      <div
        style={{ padding: '10px 0', marginBottom: `${margin}` }}
        className={helpPageMoneyTransferReasonBold({ type: `${textColor}` })}
      >
        {optionsTitle}
      </div>
      {options.options.map((option, index) => {
        return (
          <div style={{ padding: '10px 0' }}>
            <div className={requisiteField({ type: `${fieldType}` })} key={`requisitesBlock_card-${index}`}>
              <div className={helpPageMoneyRequisiteBank}>{option.title}</div>
              <div className={helpPageMoneyRequisiteNumber}>{option.optionContent}</div>

              <Tooltip title={copyText}>
                <div
                  style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                  onClick={() => copy(option.optionContent)}
                >
                  <Copy />
                </div>
              </Tooltip>
            </div>
          </div>
        )
      })}
    </div>
  )
}

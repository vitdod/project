import { blockHeading } from '../../../../../styles/typography.css'
import { WPMoreHelpPageBlock } from '../../../../../types/wordpress'
import { blocksWrapper } from '../../../../Layouts/LayoutRecipes.css'
import { RequisiteCard } from '../partials/RequisiteCard'
import { moreHelpPageBlockWrapper } from './MoreHelpPageBlock.css'

type MoreHelpPageBlockProps = {
  data: WPMoreHelpPageBlock
}

export const MoreHelpPageBlock = ({ data }: MoreHelpPageBlockProps) => {
  return (
    <div className={blocksWrapper({ type: 'helpPageBlocksWrapper' })}>
      {data.morehelppageblock.map((block) => {
        return (
          <>
            <p className={blockHeading({ color: 'red' })}>{block.title}</p>
            <div className={moreHelpPageBlockWrapper}>
              {block.options.map((option) => {
                return (
                  <RequisiteCard
                    options={option}
                    type="requisiteCardMoreHelpPage"
                    textColor="moreHelpPageTitle"
                    fieldType="moreHelpPageField"
                  />
                )
              })}
            </div>
          </>
        )
      })}
    </div>
  )
}

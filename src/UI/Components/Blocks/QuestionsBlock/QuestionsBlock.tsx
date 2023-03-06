import { blockHeading } from '../../../../styles/typography.css'
import { WPQuestionsBlockInfo } from '../../../../types/wordpress'
import { blocksWrapper } from '../../../Layouts/LayoutRecipes.css'
import { Collapsible } from '../../Reusable/Collapsible/Collapsible'
import { collapsibleWrapper, headingWrapper } from './QuestionsBlock.css'

export type QuestionsBlockProps = {
  data: WPQuestionsBlockInfo
}

export const QuestionsBlock = ({ data }: QuestionsBlockProps) => {
  const { questionblock } = data
  return (
    <div className={blocksWrapper({ type: 'questionsBlockWrapper' })}>
      <div className={headingWrapper}>
        <p className={blockHeading({ color: 'white' })}>Частые вопросы</p>
      </div>
      {questionblock && (
        <div className={collapsibleWrapper}>
          <Collapsible data={questionblock} />
        </div>
      )}
    </div>
  )
}

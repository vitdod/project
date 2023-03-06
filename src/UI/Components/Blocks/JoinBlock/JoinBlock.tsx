import { blockHeading } from '../../../../styles/typography.css'
import { WPJoinBlock } from '../../../../types/wordpress'
import { blocksWrapper } from '../../../Layouts/LayoutRecipes.css'
import { BlogTextWrapper } from '../../Reusable/BlogTextWrapper/BlogTextWrapper'
import { blogWrapper } from '../../Reusable/BlogTextWrapper/BlogTextWrapper.css'

type JoinBlockProps = {
  data: WPJoinBlock
}
export const JoinBlock = ({ data }: JoinBlockProps) => {
  return (
    <div className={blocksWrapper({ type: 'helpPageBlocksWrapper' })}>
      {data.joinBlock.map((el) => {
        return (
          <div style={{ paddingBottom: '40px' }}>
            <p style={{ paddingBottom: '15px' }} className={blockHeading({ color: 'red' })}>
              {el.title}
            </p>

            <BlogTextWrapper className={blogWrapper.other} html={el.text} />
          </div>
        )
      })}
    </div>
  )
}

import { blockHeading } from '../../../../styles/typography.css'
import { WPAboutBlock } from '../../../../types/wordpress'
import { blocksWrapper } from '../../../Layouts/LayoutRecipes.css'
import { BlogTextWrapper } from '../../Reusable/BlogTextWrapper/BlogTextWrapper'
import { blogWrapper } from '../../Reusable/BlogTextWrapper/BlogTextWrapper.css'
import { aboutParagraphWrapper } from './AboutBlock.css'

type JoinBlockProps = {
  data: WPAboutBlock
}
export const AboutBlock = ({ data }: JoinBlockProps) => {
  return (
    <div className={blocksWrapper({ type: 'helpPageBlocksWrapper' })}>
      {data.aboutBlock.map((el) => {
        return (
          <div className={aboutParagraphWrapper}>
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

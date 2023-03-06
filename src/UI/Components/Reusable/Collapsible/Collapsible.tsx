import * as Accordion from '@radix-ui/react-accordion'
import { AccordionContent, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import { large } from '../../../../styles/typography.css'
import { Question } from '../../../../types/wordpress'
import { stripTags } from '../../../../utils/textAndHtml'
import { BlogTextWrapper } from '../BlogTextWrapper/BlogTextWrapper'
import { blogWrapper } from '../BlogTextWrapper/BlogTextWrapper.css'
import * as styles from './Collapsible.css'

type CollapsibleProps = {
  data: Question[]
}

type AccItemProps = {
  value: string
  title: string
  content: string
}

export const Collapsible = ({ data }: CollapsibleProps) => {
  return (
    <Accordion.Root type="single" collapsible>
      {data &&
        data.map((faqItem, index) => (
          <AccItem
            key={`${faqItem.question}_${index}`}
            value={index.toString()}
            title={faqItem.question}
            content={faqItem.answer}
          />
        ))}
    </Accordion.Root>
  )
}

const AccItem = ({ value, title, content }: AccItemProps) => {
  const text = stripTags(content)
  return (
    <AccordionItem value={value} className={styles.accordionItem}>
      <AccordionTrigger className={styles.accordionTrigger}>
        <ChevronDownIcon color="white" className={styles.StyledChevron} />
        <p style={{ alignSelf: 'center', padding: '10px 0' }} className={large}>
          {title}
        </p>
      </AccordionTrigger>
      <AccordionContent className={styles.accordionContent}>
        <BlogTextWrapper className={blogWrapper.questionsBlockBlogwrapper} html={content} />
      </AccordionContent>
    </AccordionItem>
  )
}

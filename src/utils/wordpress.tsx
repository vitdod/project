import { HomePageProps } from '../pages'
import { WPHeaderBlockInfo, WPInfoBlockInfo, WPQuestionsBlockInfo, WPSeoBlock } from '../types/wordpress'

import {
  BlogPostsBlock,
  HeaderBlock,
  HelpPageBlock,
  InfoBlock,
  QuestionsBlock,
} from '../UI/Components/Blocks'
import { AboutBlock } from '../UI/Components/Blocks/AboutBlock/AboutBlock'
import { MoreHelpPageBlock } from '../UI/Components/Blocks/HelpPageBlock/MoreHelpPageBlock/MoreHelpPageBlock'
import { JoinBlock } from '../UI/Components/Blocks/JoinBlock/JoinBlock'
import SeoBlock from '../UI/Components/Blocks/SeoBlock/SeoBlock'
import { StartPageHelpBlock } from '../UI/Components/Blocks/StartPageHelpBlock/StartPageHelpBlock'

export type RawNodesType = Array<
  | ['HeaderBlock', WPHeaderBlockInfo]
  | ['InfoBlock', WPInfoBlockInfo]
  | ['QuestionsBlock', WPQuestionsBlockInfo]
  | ['seo', WPSeoBlock]
>

export async function getPages() {
  const postsRes = await fetch(process.env.WP_GRAPHQL_URL + '/pages?_embed')
  const posts = await postsRes.json()
  return posts
}

export async function getPagesByLocale(locale: string, slug: string) {
  const lang = locale.split('-')[0]
  const postsRes = await fetch(process.env.WP_GRAPHQL_URL + `/pages`)
  const posts = await postsRes.json()
  return posts
}

export const MakeRawNodes = ({ nodes }: HomePageProps) => {
  return nodes.map((node) =>
    (Object.entries(node) as RawNodesType).filter(([key, value]) => !key.startsWith('_')),
  )[0]
}
export const transformedBlocks = (rawNodes: RawNodesType) => {
  return rawNodes.map(([componentName, props], index) => {
    if (componentName == 'seo') {
      return <SeoBlock data={props} key={`${index}-seo`} />
    }
    if (componentName == 'HeaderBlock') {
      return <HeaderBlock data={props} key={`${index}-header_block`} />
    }

    if (componentName == 'InfoBlock') {
      return <InfoBlock data={props} key={`${index}-info_block`} />
    }
    if (componentName == 'QuestionsBlock') {
      return <QuestionsBlock data={props} key={`${index}-questions_block`} />
    }

    if (componentName == 'StartPageHelpBlock') {
      return <StartPageHelpBlock data={props} key={`${index}-questions_block`} />
    }

    if (componentName == 'BlogPostsBlock') {
      return <BlogPostsBlock data={props} key={`${index}-blog_block`} />
    }

    if (componentName == 'HelpPageContentBlock') {
      return <HelpPageBlock data={props} key={`${index}-help_block`} />
    }
    if (componentName == 'MoreHelpPageBlock') {
      return <MoreHelpPageBlock data={props} key={`${index}-help_block`} />
    }
    if (componentName == 'JoinBlock') {
      return <JoinBlock data={props} key={`${index}-join_block`} />
    }
    if (componentName == 'AboutBlock') {
      return <AboutBlock data={props} key={`${index}-join_block`} />
    } else {
      return null
    }
  })
}

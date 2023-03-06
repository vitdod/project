import { SSRConfig } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticPaths, GetStaticProps } from 'next/types'
import { ParsedUrlQuery } from 'querystring'
import { blogPostTitle, blogWrapper } from '../../../UI/Components/Blocks/BlogPostsBlock/BlogPost.css'
import { blocksWrapper } from '../../../UI/Layouts/LayoutRecipes.css'
import { fetchBlogPost, fetchBlogPostPaths } from '../../../utils/fetchQuery'
interface IParams extends ParsedUrlQuery {
  slug: string
}

type BlogPostProps = {
  post: {
    title: string
    content: string
  }
}

const BlogPost = ({ post }: BlogPostProps) => {
  const content = post.content
  return (
    <>
      <div className={blocksWrapper({ type: 'blogWrapper' })}>
        <p className={blogPostTitle}>{post.title}</p>
        <div className={blogWrapper} dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<SSRConfig> = async ({ params, locale }) => {
  const { slug } = params as IParams
  const { data } = await fetchBlogPost({ params: { slug } })
  const { post } = data
  console.log(post)
  if (!post) {
    return {
      notFound: true,
    }
  }
  return {
    props: { post, ...(await serverSideTranslations(locale, ['common'])) },
    revalidate: 10000,
  }
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  const { data } = await fetchBlogPostPaths()
  const paths: { params: { slug: string } }[] = []

  if (!data || !data.pages)
    return {
      paths: [{ params: { slug: '/404' } }],
      fallback: false,
    }
  const filteredBlogPostBlock = Object.entries(data.pages.nodes).filter(
    (el: any) => el[1].BlogPostsBlock.articles.posts,
  )

  const block = filteredBlogPostBlock.map((el: any) => el[1].BlogPostsBlock)
  const articles = block[0].articles
  articles.posts.map((el: { postid: { id: string } }) => {
    if (!el.postid) return
    else
      return paths.push({
        params: { slug: `${el.postid.id}` },
      })
  })
  paths.push({
    params: { slug: `${articles.titlepost.postid.id}` },
  })
  return {
    paths,
    fallback: false,
  }
}

export default BlogPost

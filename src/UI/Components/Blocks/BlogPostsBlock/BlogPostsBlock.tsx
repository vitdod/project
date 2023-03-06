import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import {
  blockHeading,
  blogParagraph,
  titlePostHeading,
  titlePostText,
} from '../../../../styles/typography.css'
import { Post, WPBlogPostsBlock } from '../../../../types/wordpress'
import { getPlainText } from '../../../../utils/textAndHtml'
import { getHostName } from '../../../../utils/url'
import { blocksWrapper } from '../../../Layouts/LayoutRecipes.css'
import { simplePost, textWrapper, titlePost, wrapper } from './BlogPostsBlock.css'

export type BlogPostsBlockProps = {
  data: WPBlogPostsBlock
}
export type PostsBlockProps = {
  mainPost: Post
  posts?: Post[]
  title: string
}

export type PostProps = {
  post: Post
  className?: string
  textClass?: string
  id?: String
  textStyles?: {
    heading: string
    text: string
  }
  imageProps?: {
    maxHeight: string
    minHeight: string
  }
  postslug?: string
  postid: {
    id: string
  }
}

export const PostsBlock = ({ mainPost, posts, title }: PostsBlockProps) => {
  return (
    <div className={blocksWrapper({ type: 'blogWrapper' })}>
      <p className={blockHeading({ color: 'red' })}>{title}</p>
      <div className={wrapper}>
        <Post
          post={mainPost}
          postid={mainPost.postid}
          className={titlePost}
          imageProps={{ minHeight: '300px', maxHeight: '400px' }}
          textStyles={{
            heading: titlePostHeading,
            text: titlePostText,
          }}
        />
        {posts?.map((post, index: number) => {
          return (
            <Post
              postid={post.postid}
              key={`${index}-post`}
              id={index.toString()}
              post={post}
              className={simplePost}
              textStyles={{
                heading: blogParagraph({ type: 'heading' }),
                text: blogParagraph({ type: 'paragraph' }),
              }}
              imageProps={{ minHeight: '150px', maxHeight: '250px' }}
            />
          )
        })}
      </div>
    </div>
  )
}
const Post = ({ post, className, imageProps, textStyles, postid }: PostProps) => {
  const link = post.link ? getHostName(post.link) : null
  const linktoPost = postid ? `/blog/${postid.id}` : post.link
  const { heading } = post
  const text = getPlainText(post.text)
  return (
    <div className={className}>
      {post.image && (
        <div
          style={{
            borderRadius: '6px',
            position: 'relative',
            minHeight: imageProps?.minHeight,
            maxHeight: imageProps?.maxHeight,
            paddingBottom: '10px',
            border: '1px solid rgba(17, 26, 34, 0.2)',
          }}
        >
          <Image
            alt=""
            style={{ objectFit: 'cover', borderRadius: '5px' }}
            fill
            src={post.image.guid}
          ></Image>
        </div>
      )}
      {post.type === 'video' && (
        <div
          style={{
            borderRadius: '6px',
            position: 'relative',
            minHeight: imageProps?.minHeight,
            maxHeight: imageProps?.maxHeight,
            paddingBottom: '10px',
            border: '1px solid rgba(17, 26, 34, 0.2)',
          }}
        ></div>
      )}
      <div className={textWrapper}>
        <Link
          href={{
            pathname: linktoPost,
          }}
          target="_blank"
        >
          <p className={textStyles?.heading}>{heading}</p>
        </Link>

        <div className={textStyles?.text} dangerouslySetInnerHTML={{ __html: text }}></div>
      </div>
      {link && <p className={blogParagraph({ type: 'link' })}>{link}</p>}
    </div>
  )
}

export const BlogPostsBlock = ({ data }: BlogPostsBlockProps) => {
  const { t } = useTranslation(['common'], { useSuspense: false })
  // const aboutUsPosts = data.aboutUs?.aboutUsPosts
  const posts = data.articles.posts
  const mainPost = data.articles.titlepost
  return (
    <>
      {posts && mainPost ? (
        <PostsBlock mainPost={mainPost} posts={posts} title={t('blog_block.title')} />
      ) : (
        <p>no content yet!</p>
      )}
      {/* {aboutUsPosts && <PostsBlock posts={aboutUsPosts} title="CМИ о нас" />} */}
    </>
  )
}

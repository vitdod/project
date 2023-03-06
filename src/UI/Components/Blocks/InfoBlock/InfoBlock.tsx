import Image from 'next/image'
import { blockHeading, blogParagraph, large } from '../../../../styles/typography.css'
import { Post, WPInfoBlockInfo } from '../../../../types/wordpress'
import { getHostName } from '../../../../utils/url'
import { blocksWrapper } from '../../../Layouts/LayoutRecipes.css'
import { introWrapper, postsWrapper, singlePost } from './InfoBlock.css'

export type InfoBlockProps = {
  data: WPInfoBlockInfo
}

export type PostToRenderBlock = {
  block: Post[]
}

export const Posts = ({ block }: PostToRenderBlock): JSX.Element => {
  return (
    <>
      {block &&
        block.map((post, index) => {
          const link = getHostName(post.link)
          return (
            <a href={post.link} target="_blank" className={singlePost} key={`${index}-info_post`}>
              <div>
                {post.image && (
                  <div
                    style={{
                      borderRadius: '6px',
                      position: 'relative',
                      paddingBottom: '10px',
                      minHeight: '200px',
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
                <p className={blogParagraph({ type: 'paragraphInfoBlock' })}>{post.text}</p>
                <p className={blogParagraph({ type: 'link' })}>{link}</p>
              </div>
            </a>
          )
        })}
    </>
  )
}

export const InfoBlock = ({ data }: InfoBlockProps) => {
  return (
    <div className={blocksWrapper({ type: 'infoBlockWrapper' })}>
      <div className={introWrapper}>
        <p className={blockHeading({ color: 'red' })}>Кто мы?</p>

        {data.aboutText &&
          data.aboutText.map((el, index) => {
            return (
              <div
                key={`${index}-paragraph`}
                style={{
                  wordBreak: 'break-word',
                  padding: '15px 0',
                  color: '#223444',
                }}
                className={large}
                dangerouslySetInnerHTML={{ __html: el.paragraph }}
              ></div>
            )
          })}
      </div>
      <div className={postsWrapper}>
        <Posts block={data.postsToRender} />
      </div>
    </div>
  )
}

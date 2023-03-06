import { SSRConfig } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next/types'
import { useEffect } from 'react'
import { HomePageProps } from '..'
import { useClientSide } from '../../hooks/useClientSide'
import { useSidebarState } from '../../hooks/useSidebar'
import { fetchBlogQuery } from '../../utils/fetchQuery'
import { MakeRawNodes, transformedBlocks } from '../../utils/wordpress'

const Blog = ({ nodes }: HomePageProps) => {
  const { setIsOpened } = useSidebarState()
  const isClientSide = useClientSide()
  useEffect(() => {
    isClientSide && setIsOpened(false)
  }, [setIsOpened])
  const rawNodes = MakeRawNodes({ nodes })
  const transformedNodes = transformedBlocks(rawNodes)
  return (
    <>
      <div>{transformedNodes}</div>
    </>
  )
}

export const getStaticProps: GetStaticProps<SSRConfig> = async ({ locale }) => {
  // console.log(context)
  const { data } = await fetchBlogQuery({ params: { locale } })
  if (!data.pages || !data.pages.nodes.length || !data.pages.nodes[0].seo.metaDesc) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }
  const nodes = data.pages.nodes
  return {
    props: { nodes, ...(await serverSideTranslations(locale, ['common'])) },
    revalidate: 10000,
  }
}

export default Blog

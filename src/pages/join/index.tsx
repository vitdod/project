import { SSRConfig } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next/types'
import { useEffect } from 'react'
import { useClientSide } from '../../hooks/useClientSide'
import { useSidebarState } from '../../hooks/useSidebar'
import { WPStartPageNode } from '../../types/wordpress'
import { fetchJoinQuery } from '../../utils/fetchQuery'
import { MakeRawNodes, transformedBlocks } from '../../utils/wordpress'

export type HomePageProps = {
  nodes: WPStartPageNode[]
}
const HomePage = ({ nodes }: HomePageProps) => {
  const rawNodes = MakeRawNodes({ nodes })
  const transformedNodes = transformedBlocks(rawNodes)
  const { setIsOpened } = useSidebarState()
  const isClientSide = useClientSide()
  useEffect(() => {
    isClientSide && setIsOpened(false)
  }, [setIsOpened])
  return <div>{transformedNodes}</div>
}

export const getStaticProps: GetStaticProps<SSRConfig> = async ({ locale }) => {
  const { data } = await fetchJoinQuery({ params: { locale } })
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

export default HomePage

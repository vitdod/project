import { NextSeo } from 'next-seo'
import { WPSeoBlock } from '../../../../types/wordpress'
import { stripTags } from '../../../../utils/textAndHtml'

type SeoProps = {
  data: WPSeoBlock
}
const SeoBlock = ({ data }: SeoProps) => {
  const description = stripTags(data.metaDesc)
  return (
    <NextSeo title={data.title} description={description} canonical="https://www.rusvolcorps.com/"></NextSeo>
  )
}

export default SeoBlock

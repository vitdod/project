type BlogTextWrapperProps = {
  className: string
  html: string
}

export const BlogTextWrapper = ({ className, html }: BlogTextWrapperProps) => {
  return <div className={className} dangerouslySetInnerHTML={{ __html: html }}></div>
}

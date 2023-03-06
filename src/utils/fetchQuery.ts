import { gql } from "@apollo/client"
import client from "../../client"

type FetchParams = {
    params: {
        locale?: string,
        search?: string,
        slug?: string
    }
}
export const fetchQuery = async ({params}: FetchParams):Promise<{ data: any }> => {
  const lang = `${params.locale?.split('-')[0].toUpperCase()}`
  try {
    return await client.query({
        query: gql`
          query NewQuery($lang: LanguageCodeFilterEnum) {
            pages(where: { language: $lang, search: "start" }) {
              nodes {
                HeaderBlock {
                  fieldGroupName
                  bgimage {
                    guid
                    id
                    uri
                  }
                  intro,
                  title
                }
                InfoBlock {
                  fieldGroupName
                  aboutText {
                    paragraph
                  }
                  postsToRender {
                    text
                    link
                    image {
                      guid
                      id
                      uri
                    }
                  }
                }
    
                QuestionsBlock {
                  bgimage {
                    guid
                    id
                    uri
                  }
                  questionblock {
                    answer
                    fieldGroupName
                    question
                  }
                }
                StartPageHelpBlock {
                  startpagehelpblock {
                    title
                    text
                  }
                }
                seo {
                  title
                  metaDesc
                }
              }
            }
          }
        `,
        variables: { lang },
      })
    } catch (err: unknown) {
      return {data: err}
    }
}

export const fetchBlogQuery = async ({params}: FetchParams): Promise<{ data: any }> => {
  const lang = `${params.locale?.split('-')[0].toUpperCase()}`
  const {search} = params
  try {
    return await client.query({
        query: gql`
          query NewQuery($lang: LanguageCodeFilterEnum) {
            pages(where: {language: $lang, search: "blog"}) {
              nodes {
                HeaderBlock {
                  fieldGroupName
                  bgimage {
                    guid
                    id
                    uri
                  }
                  intro,
                  title
                }
                BlogPostsBlock {
                  articles {
                    fieldGroupName
                    posts {
                      postid {
                        ... on Post {
                          id
                        }
                      }
                      fieldGroupName
                      heading
                      link
                      text
                      image {
                        guid
                        id
                        uri
                      }
                    }
                    titlepost {
                      fieldGroupName
                      heading
                      postid {
                        ... on Post {
                          id
                        }
                      }
                      link
                      text
                      image {
                        guid
                        id
                        uri
                      }
                    }
                  }
                }
                seo {
                  canonical
                  title
                  metaDesc
                }
              }
            }
          }
        `,
        variables: { lang },
      })
    } catch (err: unknown) {
      return {data: err}
    }
}


export const fetchBlogPostPaths = async (): Promise<{ data: any }> => {
  try {
    return await client.query({
        query: gql`
          query NewQuery {
            pages(where: {search: "blog"}) {
              nodes {
                BlogPostsBlock {
                  articles {
                    fieldGroupName
                    posts {
                      fieldGroupName
                      heading
                      postid {
                        ... on Post {
                          id
                        }
                      }
                      link
                      text
                      image {
                        guid
                        id
                        uri
                      }
                    }
                    titlepost {
                      fieldGroupName
                      heading
                      postid {
                        ... on Post {
                          id
                        }
                      }
                      link
                      text
                      image {
                        guid
                        id
                        uri
                      }
                    }
                  }
                }
              }
            }
          }
        `,
      })
    } catch (err: unknown) {
      return {data: err}
    }
}

export const fetchBlogPost = async ({params}: FetchParams): Promise<{ data: any }> => {
  const {slug} = params
  try {
    return await client.query({
        query: gql`
          query NewQuery($slug: ID!) {
            post(id: $slug, idType: ID) {
              content
              title
              PostSlug {
                postslug
              }
            }
          }
        `,
        variables: { slug },
      })
    } catch (err: unknown) {
      return {data: err}
    }
}
export const fetchHelpQuery = async ({params}: FetchParams): Promise<{ data: any }> => {
  const lang = `${params.locale?.split('-')[0].toUpperCase()}`
  const {search} = params
  try {
    return await client.query({
        query: gql`
        query NewQuery($lang: LanguageCodeFilterEnum) {
        pages(where: {language: $lang, search: "help"}) {
          nodes {
            HeaderBlock {
              fieldGroupName
              bgimage {
                guid
                id
                uri
              }
              intro,
              title
            }
            HelpPageContentBlock {
              moneytransferBlock {
                title
                reasons {
                    text
                    title
                  }
              }
              otherBlock {
                title
                fieldGroupName
                options {
                  fieldGroupName
                    text
                    title
                }
              }
              reasonsBlock {
                title
                reasons {
                  title
                  explanation
                }
              }
              requisitesBlock {
                title
                options {
                  optionsTitle
                  options {
                    title
                    optionContent
                  }
                }
              }
            }
            seo {
              title
              metaDesc
            }
          }
        }
          }
        `,
        variables: { lang },
      })
    } catch (err: unknown) {
      return {data: err}
    }
}

export const fetchMoreHelpQuery = async ({params}: FetchParams): Promise<{ data: any }> => {
  const lang = `${params.locale?.split('-')[0].toUpperCase()}`
  const {search} = params
  try {
    return await client.query({
        query: gql`
        query NewQuery($lang: LanguageCodeFilterEnum) {
          pages(where: {language: $lang, search: "more"}) {
            nodes {
                MoreHelpPageBlock {
                  morehelppageblock {
                    title
                    options {
                      optionsTitle
                      options {
                        title
                        optionContent
                      }
                    }
                  }
                }
              seo {
                title
                metaDesc
              }
            }
          }
        }
        `,
        variables: { lang },
      })
    } catch (err: unknown) {
      return {data: err}
    }
}

export const fetchJoinQuery = async ({params}: FetchParams): Promise<{ data: any }> => {
  const lang = `${params.locale?.split('-')[0].toUpperCase()}`
  const {search} = params
  try {
    return await client.query({
        query: gql`
        query NewQuery($lang: LanguageCodeFilterEnum) {
          pages(where: {language: $lang, search: "join"}) {
            nodes {
              HeaderBlock {
                fieldGroupName
                bgimage {
                  guid
                  id
                  uri
                }
                intro,
                title
              }
              JoinBlock {
                joinBlock {
                  fieldGroupName
                  text
                  title
                }
              }
              seo {
                title
                metaDesc
              }
            }
          }
        }
        `,
        variables: { lang },
      })
    } catch (err: unknown) {
      return {data: err}
    }
}

export const fetchAboutQuery = async ({params}: FetchParams): Promise<{ data: any }> => {
  const lang = `${params.locale?.split('-')[0].toUpperCase()}`
  const {search} = params
  try {
    return await client.query({
        query: gql`
        query NewQuery($lang: LanguageCodeFilterEnum) {
          pages(where: {language: $lang, search: "about"}) {
            nodes {
              HeaderBlock {
                fieldGroupName
                bgimage {
                  guid
                  id
                  uri
                }
                intro,
                title
              }
              AboutBlock {
                aboutBlock {
                  fieldGroupName
                  text
                  title
                }
              }
              seo {
                title
                metaDesc
              }
            }
          }
        }
        `,
        variables: { lang },
      })
    } catch (err: unknown) {
      return {data: err}
    }
}
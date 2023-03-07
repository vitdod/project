export type WPStartPageNode = {
    headerBlock: WPHeaderBlockInfo,
    infoBlock: WPInfoBlockInfo,
    questionsBlock: WPQuestionsBlockInfo,
    seo: WPSeoBlock
}

export type WPStartPageBlocks = WPHeaderBlockInfo | WPInfoBlockInfo | WPQuestionsBlockInfo
export type WPSeoBlock = {
  title: string,
  metaDesc: string
}
export type WPHeaderBlockInfo = {
    fieldGroupName: 'HeaderBlock'
    bgimage: Image,
    intro: string,
    title: string
}

export type WPInfoBlockInfo = {
    fieldGroupName: 'InfoBlock',
    aboutText: AboutText[],
    postsToRender: Post[]
}

export type WPQuestionsBlockInfo = {
    fieldGroupName: 'QuestionsBlock'
    bgImage: Image,
    questionblock: Question[]
}

export type WPBlogPostsBlock = {
    articles: {
        fieldGroupName: 'BlogPostsBlock'
        posts: Post[],
        titlepost: Post

    },
    aboutUs? : {
        fieldGroupName: 'about_us',
        aboutUsPosts: Post[],
    }
}


export type WPHelpPageBlock = {
    moneytransferBlock: MoneyTransferBlock
    otherBlock: OtherBlock
    reasonsBlock: ReasonsBlock
    requisitesBlock: RequisitesBlock
  }

  export type WPMoreHelpPageBlock = {
    morehelppageblock: MoreHelpPageBlock[]
  }

  export type MoreHelpPageBlock = {
    title: String,
    options: MoreHelpOptions[]
  }


export type WPJoinBlock = {joinBlock: joinBlock[]}
export type WPAboutBlock = {aboutBlock: joinBlock[]}

export type WPStartPageHelpBlock = {
  startpagehelpblock: {
    text: String,
    title: String
  }[]
}
type joinBlock = {
  title: String,
  text: string
}

 export type AboutText = {
    paragraph: string
 }

 export type aboutUsPost = {
    fieldGroupName: 'about_us_posts',
    heading: string,
    link: string,
    text: string,
    type: 'video' | 'post',
    image: Image
 }

export type Image = {
    guid: string,
    id: string,
    uri: string
}

export type Post = {
    text: string,
    link: string,
    image?: Image,
    heading?: string,
    type: 'video' | 'post',
    postid: {
      id: string
    },
}

export type Question = {
    question: string,
    answer: string
}


type ReasonsBlockReasons = {
    explanation: String
    title: String
  }
  
  type MoneyTransferReasons = {
    title: String
    text: String
  }
  type Option = {
    title: String
    text: String
  }
  
  type ReasonsBlock = {
    reasons: ReasonsBlockReasons[]
    title: String
  }
  
  type MoneyTransferBlock = {
    reasons: MoneyTransferReasons[]
    title: String
  }
  
  type OtherBlock = {
    options: Option[]
    title: String
  }
  
  type RequisitesBlock = {
    title: String,
    options: {
      optionsTitle: String
      options: {
        title: String,
        optionContent: string
      }[]
    }[]
  }

  export type MoreHelpOptions = {
      optionsTitle: String
      options: {
        title: String,
        optionContent: string
      }[]
  }

  type MoreHelpOption = {
    title: String,
    content: string
  }
  
import { globalStyle, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";


export const singlePost = style({})
export const postsWrapper = style({
    display: 'flex',
    flexDirection: 'column',
    width: '40%',
    padding: '10px 0',
    '@media': {
        'screen and (max-width: 959px)': {
            width: '100%',
        },
}
})

export const introWrapper = style({
    width: '55%',
    display: 'flex',
    flexDirection: 'column',
    '@media': {
        'screen and (max-width: 959px)': {
            width: '100%',
            paddingBottom: "30px"
        },
}
})


globalStyle(`${postsWrapper} ${singlePost}:not(:last-child)`, {
    borderBottom: '1px solid #ececec',
  })

  globalStyle(`${singlePost}:not(:first-child)`, {
    paddingTop: '10px',
  })

  globalStyle(`${singlePost}:not(:last-child)`, {
    paddingBottom: '10px',
  })
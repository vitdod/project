import { globalStyle, style } from "@vanilla-extract/css";
import { typeScaleUbuntu } from "../../../../styles/typography.css";

export const blogWrapper = style({
    display: "flex",
    flexDirection: "column",
})
export const blogPostTitle = style({
    color: '#223444',
    fontFamily: "UbuntuBold",
    fontSize: typeScaleUbuntu.xxl.size,
    lineHeight: `${typeScaleUbuntu.xxl.lheight}px`,
})

globalStyle(`${blogWrapper} >  p, em, a`, {
    color: '#223444',
    fontFamily: "Ubuntu",
    fontSize: typeScaleUbuntu.l.size,
    lineHeight: `${typeScaleUbuntu.l.lheight}px`,
    '@media': {
      'screen and (max-width: 959px)': {
        fontSize: typeScaleUbuntu.m.size,
        lineHeight: `${typeScaleUbuntu.m.lheight}px`,
      },
  }
  })

  globalStyle(`${blogWrapper} >  p`, {
    padding: '20px 0'
  })

  globalStyle(`${blogWrapper} >  a, p > a`, {
    textDecoration: "underline"
  })

    globalStyle(`${blogWrapper} > p > strong`, {
    fontFamily: "UbuntuBold",
    color: '#223444',
    fontSize: typeScaleUbuntu.l.size,
    lineHeight: `${typeScaleUbuntu.l.lheight}px`,
    '@media': {
      'screen and (max-width: 959px)': {
        fontSize: typeScaleUbuntu.m.size,
        lineHeight: `${typeScaleUbuntu.m.lheight}px`,
             },
        }
    })


    globalStyle(`${blogWrapper} >  figure`, {
        justifySelf: "center",
        alignSelf: "center"
        })

  globalStyle(`${blogWrapper} >  figure > img`, {
    borderRadius: '6px',
    width: "800px",
    minHeight: 300,
    maxHeight: 400,
    objectFit: "cover",
    border: '1px solid rgba(17, 26, 34, 0.2)',
    '@media': {
      'screen and (max-width: 959px)': {
            width: "500px",
            minHeight: 300,
            maxHeight: 400,
            },
        'screen and (max-width: 639px)': {
            width: "300px",
            minHeight: 300,
            maxHeight: 400,
            },
        }
    })

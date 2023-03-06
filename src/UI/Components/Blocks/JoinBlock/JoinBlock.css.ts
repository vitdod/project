import { globalStyle, style } from "@vanilla-extract/css";
import { typeScaleUbuntu } from "../../../../styles/typography.css";

export const paragraphWrapper = style({
    width: '70%',
    fontSize: typeScaleUbuntu.l.size,
    lineHeight: `${typeScaleUbuntu.l.lheight}px`,
    '@media': {
        'screen and (max-width: 639px)': {
             width: '100%'
        },
    },
})

globalStyle(`${paragraphWrapper}> p, li, span`, {

    fontFamily: "Ubuntu",
    color: "black",
  })

globalStyle(`${paragraphWrapper}> ul, ol`, {
    padding: "15px 25px",
  })


  globalStyle(`${paragraphWrapper} >  a, p > a, div > ol > li > a, li > a`, {
    textDecoration: "underline"
  })

  globalStyle(`${paragraphWrapper} >  p, em, a,`, {
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
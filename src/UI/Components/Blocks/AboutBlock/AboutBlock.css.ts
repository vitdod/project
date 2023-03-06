import { globalStyle, style } from "@vanilla-extract/css";
import { typeScaleUbuntu } from "../../../../styles/typography.css";




export const aboutParagraphWrapper = style({
    width: '70%',
    fontSize: typeScaleUbuntu.l.size,
    lineHeight: `${typeScaleUbuntu.l.lheight}px`,
    '@media': {
        'screen and (max-width: 639px)': {
             width: '100%'
        },
    },
})
export const aboutBlockWrapper = style({
    paddingBottom: '40px',
    selectors: {
        [`${aboutParagraphWrapper}  &`] : {
          textDecoration: "underline",
          color: "black"
        } 
},
})

// globalStyle(`${} >  p`, {
//     padding: '20px 0'
//   })
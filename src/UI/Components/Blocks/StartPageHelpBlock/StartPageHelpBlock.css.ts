import { style } from "@vanilla-extract/css";

export const wrapper  = style({
    paddingTop: "30px",
    width: '100%',
    display: 'grid',
    gridGap: '20px',
    gridTemplateColumns: '31.9% 31.9% 31.9%', 
    justifyContent: 'center',
    '@media': {
      'screen and (max-width: 959px)': {
          gridTemplateColumns: '49% 49%',
      },
      'screen and (max-width: 520px)': {
          gridTemplateColumns: '99%',
      },
  }
  })

//   export const button = style({
//     width: "35%",
//     '@media': {
//         'screen and (max-width: 639px)': {
//             width: "100%",
//         },
//     }
//   })

  export const buttonWrapper= style({
    paddingTop: '30px',
    width: "35%",
    '@media': {
        'screen and (max-width: 639px)': {
            width: "100%",
        },
    }
  })
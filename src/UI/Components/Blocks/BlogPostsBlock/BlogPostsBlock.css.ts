import { globalStyle, style } from "@vanilla-extract/css";

  
  export const wrapper  = style({
      width: '100%',
      display: 'grid',
      gridGap: '20px',
      gridTemplateColumns: '31.9% 31.9% 31.9%', 
      justifyContent: 'center',
      '@media': {
        'screen and (max-width: 959px)': {
            gridTemplateColumns: '50% 50%',
        },
        'screen and (max-width: 520px)': {
            gridTemplateColumns: '100%',
        },
    }
    })



    
    export const textWrapper = style({
      paddingTop: '10px',
    })

    export const titlePost = style({
      padding: '20px 0',
      transition: 'ease-out 0.3s',
          gridRow: '1 / span 2',
          gridColumn: '1 /span 2',
          '@media': {
            'screen and (max-width: 520px)': {
               gridRow: '1',
               gridColumn: '1',
            },
              },
            })


    export const simplePost = style({
      padding: '20px 0',
      transition: 'ease-out 0.3s',
    })
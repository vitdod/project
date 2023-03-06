import { globalStyle, style } from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"
import { typeScaleUbuntu } from "../../../../styles/typography.css"

export const helpPageBlockWrapper = style ({
    display: "flex",
    justifyContent: 'space-between',
    '@media': {
        'screen and (max-width: 639px)': {
            flexDirection: 'column'
        },
}
})


export const card = recipe({
    base: {
    padding: "25px 0px",
    width: '48%',
    borderRadius: '4px',
    transition: 'ease-out 0.3s',
    '@media': {
        'screen and (max-width: 639px)': {
             width: '100%',
        },
    },
},
    variants: {
        type: {
            moneyTransferCard: {
                width: '32%',
                display: 'flex',
                flexDirection: 'column',
                padding: '25px 0',
                minHeight: '280px',
                '@media': {
                    'screen and (max-width: 639px)': {
                         minHeight: '280px'
                    },
                },
            },
            requisiteCard: {
                width: "48%",
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#111A22',
                padding: '25px 0',
            },
            requisiteCardMoreHelpPage: {
                width: "48%",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: "flex-start",
                backgroundColor: '#ffffff',
                padding: '25px 0',
            },
            otherCard: {
                width: "48%",
                display: 'flex',
                justifyContent: 'flex-start',
                flexDirection: 'column',
                backgroundColor: '#ffffff',
                margin: "20px 0 50px",
                padding: '15px',
            },
        }
    }
  })

  export const requisiteField = recipe({
    base: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(255, 255, 255, 0.12)',
        borderRadius: '4px',
        padding: '10px'
    },
    variants: {
        type: {
            moreHelpPageField: {
                backgroundColor: '#111A22',
            },
            helpPageField: {
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
            }
        }
    }
  })


  export const requisiteBlockWrapper = style({
    backgroundColor: '#111A22',
    paddingTop: "40px",
    paddingBottom: "40px",
    '@media': {
        'screen and (min-width: 1280px)': {
            marginLeft: '-100px',
            marginRight: '-100px',
            paddingLeft: '100px',
            paddingRight: '100px',
        },
        'screen and (max-width: 1279px)': {
            marginLeft: '-24px',
            marginRight: '-24px',
            paddingLeft: '24px',
            paddingRight: '24px'
        },

        'screen and (max-width: 639px)': {
            marginLeft: '-12px',
            marginRight: '-12px',
            paddingLeft: '12px',
            paddingRight: '12px'
        }
}
  })

  export const otherBlockButton = style({
    padding: "8px 10px",
    margin: "15px 0",
    cursor: "pointer",
  })


  globalStyle(`${otherBlockButton} >  div`, {
    
  fontSize: typeScaleUbuntu.m.size,
  lineHeight: `${typeScaleUbuntu.m.lheight}px`,
    })
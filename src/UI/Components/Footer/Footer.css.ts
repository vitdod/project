import { globalStyle, style } from "@vanilla-extract/css";

export const logoAndMenuWrapper = style({ 
    width: '80%',
    display: 'flex',
    '@media': {
        'screen and (max-width: 1280px)': {
            display: 'block'
        },
    },
})
export const optionsWrapper = style({ 
    minWidth: '60%',
    padding: '15px 0 0 45px',
    display: 'flex',
    justifyContent: "space-between",
    '@media': {
        'screen and (max-width: 1279px)': {
            width: '80%',
            height: '150px'
        },
        'screen and (max-width: 959px)': {
            width: '90%',
        },
        'screen and (max-width: 520px)': {
            flexDirection: 'column',
            height: '100%',
            width: '100%',
            padding: '15px 0 0 30px',
        },
    },
})

export const optionsColumnWrapper = style({
    paddingLeft: "30px",
    '@media' : {
        'screen and (max-width: 959px)': {
            paddingLeft: '0'
        },
    }
})


export const menuWrapper = style({ 
    width: '50%',
    paddingLeft: '45px',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    maxHeight: '100px',
    '@media': {
        'screen and (max-width: 1280px)': {
            display: 'block',
            width: '70%',
        },
    },
})

export const socialLinksWrapperFooter = style({
    width: '126px',
    paddingTop: '15px',
    display: 'flex',
    justifyContent: 'flex-end',
    '@media': {
        'screen and (max-width: 639px)': {
            padding: '20px 0 0 35px'
        },
    },
})

export const footerMenuOption = style({
    fontFamily: "UbuntuLight",
    borderRadius: '5px',
    padding: '10px 55px 10px 10px',
    cursor: 'pointer',
    '@media': {
        'screen and (max-width: 519px)': {
            padding: '10px 10px'
        },
    },
})

export const logoWrapper = style({ 
    width: "34px",
    height:"58px",
})


globalStyle(`${socialLinksWrapperFooter}> svg`, {
    cursor: "pointer"
  })
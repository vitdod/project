import { globalStyle, style } from "@vanilla-extract/css";
import { typeScaleUbuntu } from "../../../styles/typography.css";


export const socialLinksWrapper = style({
    display: 'flex',
    justifyContent: 'flex-end'
})

export const iconsWrapper = style({
    fontFamily: "UbuntuLight",
    '@media': {
        'screen and (min-width: 960px)': {
            display: 'flex',
        },
        'screen and (max-width: 959px)': {
            display: 'none'
        }
    }
})

export const menuOptionsWrapper = style({
    padding: ' 10px 0 0px 30px',
    fontFamily: "UbuntuLight",
    '@media': {
        'screen and (min-width: 960px)': {
            display: 'flex',
            width: '880px',
        },
        'screen and (max-width: 959px)': {
            display: 'none'
        }
    }
})

export const menu = style({
    display: 'flex', padding: '7px 0px 0px 20px', cursor: 'pointer',
    '@media': {
        'screen and (min-width: 960px)': {
            display: 'none',
        },
        'screen and (max-width: 959px)': {
            display: 'block'
        }
    }
})

export const logoWrapper = style({
    width: "34px",
    height:"58px",
    '@media': {
        'screen and (max-width: 960px)': {
            width: "19px",
            height:"33px",
        },
    }
})

export const selectLangWrapper = style({ 
    padding: '10px 0px 0px 20px',
    '@media': {
        'screen and (min-width: 960px)': {
            display: 'block',
        },
        'screen and (max-width: 959px)': {
            display: 'none'
        }
    }

})

export const logo= style({
    '@media': {
        'screen and (max-width: 960px)': {
            fillOpacity: '0.7'
        },
    }
})

export const headerMenuOption = style ({
    cursor: 'pointer',
    padding: "5px 10px",
})

globalStyle(`${headerMenuOption} > p`, {

    fontSize: typeScaleUbuntu.m.size,
    lineHeight: `${typeScaleUbuntu.m.lheight}px`,
    fontFamily: "UbuntuLight",
  })

globalStyle(`${headerMenuOption}:hover > p`, {
    transition: '0.1s ease-in',
    color: '#B72E2E'
  })

  globalStyle(`${iconsWrapper}> svg`, {
    cursor: "pointer"
  })
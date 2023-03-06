import { style } from "@vanilla-extract/css";


export const headingWrapper = style({
    '@media': {
        'screen and (min-width: 1280px)': {
            width: '30%'
        },
        'screen and (max-width: 1279px)': {
            width: '25%'
        },

        'screen and (max-width: 959px)': {
            width: '100%'
        }
}
})

export const collapsibleWrapper = style({
    width: "60%",
    '@media': {
        'screen and (max-width: 959px)': {
            width: '100%'
        }
}
})
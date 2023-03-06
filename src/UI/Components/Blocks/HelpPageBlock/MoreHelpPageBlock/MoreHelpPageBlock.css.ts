import { style } from "@vanilla-extract/css";

export const moreHelpPageBlockWrapper = style({
    
    display: "flex",
    justifyContent: 'space-between',
    flexWrap: "wrap",
    '@media': {
        'screen and (max-width: 639px)': {
            flexDirection: 'column'
        },
}
})
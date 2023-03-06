import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const mainLayout = recipe({
    base: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        color: 'white',
        position: 'relative',
        backgroundImage: `url(/bg-image.svg)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        
    },
})

export const overlay = style({
    transition:' 0.5s',
    height: '100%',
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    zIndex: '1',
    backgroundColor: 'rgba(0,0,0,0.5)',
})

export const blocksWrapper = recipe({
    
    base: {
        '@media': {
            'screen and (min-width: 1280px)': {
                paddingLeft: '100px',
                paddingRight: '100px'
            },
            'screen and (max-width: 1279px)': {
                paddingLeft: '24px',
                paddingRight: '24px'
            },

            'screen and (max-width: 639px)': {
                paddingLeft: '12px',
                paddingRight: '12px'
            }
    }
    },
    variants: {
        type: {
            headerWrapper: {
                display: 'flex',
                flexDirection: 'column', 
                justifyContent: 'space-between', 
                fontFamily: '-moz-initial',
                width: '100%',
                background: "transparent",
            },
            headerWrapperSticky: {
                display: 'flex',
                flexDirection: 'column', 
                justifyContent: 'space-between', 
                fontFamily: '-moz-initial',
                backgroundColor: 'rgba(0,0,0,0.7)',
                position: 'sticky',
                zIndex: '1',
                width: '100%',
                top: 0,
                transitionProperty: 'all',
                transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
                transitionDuration: '500ms'
            },
            headerBlockWrapper: {
                paddingTop: '20px',
                paddingBottom: '20px',
                display: 'flex',
                flexDirection: 'column', 
                justifyContent: 'space-between', 
                fontFamily: '-moz-initial', 
                background: 'transparent',
                '@media': {
                    'screen and (min-width: 959px)': {
                        paddingBottom: '20px',
                    },
            }
            },
            infoBlockWrapper: {
                display: 'flex', 
                justifyContent: 'space-between', 
                fontFamily: '-moz-initial', 
                paddingTop: '50px',
                paddingBottom: '30px',
                backgroundColor: '#ffffff',
                '@media': {
                    'screen and (max-width: 959px)': {
                        flexDirection: 'column'
                    },
            }
            },
            questionsBlockWrapper: {
                display: 'flex', 
                justifyContent: 'space-between', 
                fontFamily: '-moz-initial', 
                paddingTop: '40px',
                paddingBottom: '20px',
                backgroundImage: `url(/bg_image2.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top',
                backgroundSize: 'cover',
                '@media': {
                    'screen and (max-width: 959px)': {
                        flexDirection: 'column'
                    },
            }
            },
            footerBlockWrapper: {
                display: 'flex',
                backgroundColor: '#111A22',
                justifyContent: 'space-between', 
                fontFamily: '-moz-initial', 
                paddingTop: '40px',
                paddingBottom: '40px',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top',
                backgroundSize: 'cover',
                '@media': {
                    'screen and (max-width: 639px)': {
                        flexDirection: 'column'
                    },
            }
            },
            startPageHelpBlockWrapper: {
                display: 'flex', 
                flexDirection: "column",
                justifyContent: 'space-between', 
                fontFamily: '-moz-initial', 
                paddingTop: '50px',
                paddingBottom: '30px',
                backgroundColor: '#ffffff',
            },
            helpPageBlocksWrapper: {
                display: "flex",
                paddingTop: '70px',
                paddingBottom: '30px',
                backgroundColor: '#ffffff',
                flexDirection: 'column'
            },
            blogWrapper: {
                paddingTop: '40px',
                paddingBottom: '40px',
                backgroundColor: '#ffffff',
            },
        }
    }  
})

globalStyle(`${blocksWrapper({type: "helpPageBlocksWrapper"})} > p`, {
    color: "black"
  })
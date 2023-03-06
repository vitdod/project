import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const button = recipe({
    base: {
        padding: '11px 24px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        gap: '8px',
        borderRadius: '4px',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        textAlign: 'center',
        fontFamily: 'Ubuntu',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '20px',
        lineHeight: '28px',
        transition: '0.1s ease-in-out',
        },
        variants: {
            backgroundColor: {
                red: {
                    background: '#8E2424',
                    selectors: {
                        '&:hover': {
                            background: '#B72E2E',
                        },
                        '&:focus ': {
                            background: '#E4867F',
                          },
                      },
                },
                ordinary: {
                    background: 'rgba(255, 255, 255, 0.12)',
                    selectors: {
                        '&:hover': {
                            background: 'rgba(255, 255, 255, 0.2)',
                        },
                        '&:focus ': {
                            background: 'rgba(255, 255, 255, 0.5)',
                          },
                      },
                },
                dark: {
                    background: '#111A22',
                    selectors: {
                        '&:hover': {
                            background: '#223444',
                        },
                        '&:focus ': {
                            background: '3e5e7a',
                          },
                      },
                },
            }
        }
})

export const errorPageButtonWrapper = style({
     padding: '20px 0',
     width: '80%',
     '@media': {
       'screen and (max-width: 519px)': {   
            width: '100%',
            },
        }
     })
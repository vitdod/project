import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { receiveMessageOnPort } from "worker_threads";

export const headerBlockWrapper = recipe({ 
    base: {
    display: 'flex',
    '@media': {
        'screen and (max-width: 519px)': {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%'
            },
        }
    },
    variants: {
        type: {
            errorPageHeaderBlockWrapper: {
                minHeight: '520px'
            }
        }
    }
})
export const headerButton = recipe({
    base :{
    cursor: 'pointer',
    minWidth: '170px',
    maxWidth: "280px",
    margin: 0,
    '@media': {
        'screen and (max-width: 639px)': {
            width: '100%',

    maxWidth: "none",
        },
    },
},
    variants: {
        type: {
            single: {
                margin: "10px 0 30px",
                '@media': {
                    'screen and (max-width: 639px)': {  
                        margin: "15px 0 10px",
                    },

                    'screen and (max-width: 519px)': {  
                        width: "100%"
                    },
                },
            }
        }
    }
})
export const buttonWrapper = style({
    display: 'flex',
    padding: '30px 0px',
    width: '400px',
    justifyContent: "space-between",
    '@media': {
        'screen and (max-width: 639px)': {
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '185px',
            alignItems: 'center',
            width: '60%'
        },
        'screen and (max-width: 519px)': {
            width: '100%'
        },
    }
})

export const headerInfoBlockWrapper = recipe({
    base: {
        paddingTop: '60px',
        paddingLeft: '30px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '100%',
        '@media': {
            'screen and (max-width: 959px)': {
                paddingTop: '30px', 
            },
            'screen and (max-width: 519px)': {
                width: '100%',
                padding: '0',
                alignItems: 'center', 
            },
        }
    },
    variants: {
        type: {
            errorPageWrapper: {
                marginBottom: "-20px",
                padding: "20px 0 0 100px",
                justifyContent: 'start',
                minHeight: '520px',      
            
        '@media': {
            'screen and (max-width: 519px)': {
                minHeight: '540px',
                justifyContent: 'center',
            },
        }
            }
        }
    }
})

export const logoWrapper = style({
    display: 'flex',
    height: "380px",
    width: "220px",
    '@media': {
        'screen and (max-width: 959px)': {
            height: "228px",
            width: "132px",
        },

        'screen and (max-width: 640px)': {
            height: "149px",
            width: "85px", 
        },
    }
})


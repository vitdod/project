import { globalStyle, keyframes, style } from "@vanilla-extract/css";


const open = keyframes({
    from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      }
  })

  const close = keyframes({
    from: {
        opacity: 1
      },
    to: {
        opacity: 0
      }
  })
  
export const sidebar = style({
    position: 'fixed',
    height: '100vh',
    right: '0',
    top: '0',
    background: '#111A22',
    left: 'calc(100vw - 320px)',
    zIndex: '2',
    overflowX: 'hidden',
    padding: '15px',
    '@media': {
        'screen and (min-width: 640px)': {
            left: 'calc(100vw - 360px)'
        },
    },
})
export const closed = style({
    animation: `${close} .5s ease-in-out`,
    transform:' translateX(+100%)',
    transition: 'transform .5s ease-in-out',
})
export const opened = style({
    animation: `${open} .5s ease-in-out`,
    transition: 'transform .5s ease-in-out',
    transform:' translateX(0)',
    opacity: '1',
    width: '320px',
    '@media': {
        'screen and (min-width: 640px)': {
            width: '360px',
        },
    },
})

export const iconsWrapper = style({
    padding: '10px 0 10px 35px',
})

export const sidebarMenuOption = style({
    fontFamily: "UbuntuLight",
    borderRadius: '5px',
    padding: '10px 45px',
    cursor: 'pointer',
})

export const activeOption = style({
    background: 'rgba(255, 255, 255, 0.12)',
})

export const optiontext = style({
    color: "rgba(255, 255, 255, 0.7)",
})

export const activeOptiontext = style({
    color: "white",
})

globalStyle(`${sidebarMenuOption}:hover > p`, {
    transition: '0.1s ease-in',
    color: 'white'
  })
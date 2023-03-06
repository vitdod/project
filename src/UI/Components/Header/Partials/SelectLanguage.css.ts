import { keyframes, style } from "@vanilla-extract/css";

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

export const selectTrigger = style({
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    selectors: {
        '&:hover': {
            color: 'white',
        }
    }
})

export const selectContent = style({
    width: '86px',
    maxHeight: 'var(--radix-select-content-available-height)',
    borderRadius: "10px",
    padding: '8px 0px',
    height: '136px',
    background: '#FFFFFF',
    zIndex: '2',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.24), 0px 6px 12px rgba(17, 26, 34, 0.12)',
    selectors: { 
        [`${selectTrigger}[data-state=open] &`]: {
        animation: `${open} .5s ease-in-out`,
        transform:' translateY(+100%)',
        transition: 'transform .5s ease-in-out'
    },
        [`${selectTrigger}[data-state=closed] &`]: {
        animation: `${close} .5s ease-in-out`,
        transform:' translateY(+100%)',
        transition: 'transform .5s ease-in-out'
        }},
  })

  export const selectViewport = style({
  })

  export const selectItem = style({
    fontFamily: 'Ubuntu',
    display: 'flex',
    justifyContent: 'space-between',
    color: '#111A22',
    border: 'none',
    outline: 'none',
     padding: '10px 10px',
    selectors: {
        '&[data-state="checked"]': {
            backgroundColor: 'rgba(17, 26, 34, 0.12)',
        }
    }
  })



  export const triggerIcon = style({
    selectors: { [`${selectTrigger}[data-state=open] &`]: { transform: 'rotate(-180deg)'}, },
    transition: 'transform 150ms cubic-bezier(0.87, 0, 0.13, 1)',
  })

import { globalStyle, keyframes, style } from '@vanilla-extract/css'
import { typeScaleUbuntu } from '../../../../styles/typography.css'



const slideDown = keyframes({
    from: {
        maxHeight: 0
      },
      to: {
        maxHeight: 'var(--radix-accordion-content-height)'
      }
  })

  const slideUp = keyframes({
    from: {
        maxHeight: 'var(--radix-accordion-content-height)'
      },
      to: {
        maxHeight: 0
      }
  })

export const accordionItem = style({
  overflow: 'hidden',
  background: 'transparent',
  border: 'none',
  display: 'block',
  width: '100%',
  '@media': {
    'screen and (max-width: 959px)': {
          padding: '10px 0',
    },
}
})

export const accordionTrigger = style({
  alignItems: 'center',
  all: 'unset',
  backgroundColor: 'transparent',
  color: 'black',
  cursor: 'pointer',
  display: 'flex',
  fontFamily: 'inherit',
  height: 35,
  justifyContent: 'left',
  lineHeight: 1,
  padding: '10px 0px',
  width: '100%',
})

export const accordionContent = style({
  background: 'transparent',
  width: '98%',
  selectors: {
    '&[data-state="closed"]': { animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)` },
    '&[data-state="open"]': { animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)` },
  },
})

export const accordionContentItem = style({
  fontFamily: "Ubuntu",
  fontSize:  typeScaleUbuntu.m.size,
  lineHeight: `${typeScaleUbuntu.m.lheight}px`,
  padding: '10px 40px',
})

export const StyledChevron = style({
  alignSelf: 'center',
  width: '20px',
  marginRight: '20px',
  transform: "rotate(-90deg)",
  selectors: { [`${accordionTrigger}[data-state=open] &`]: { transform: 'rotate(0deg)' }, },
  transition: 'transform 150ms cubic-bezier(0.87, 0, 0.13, 1)',
})

globalStyle(`${accordionItem}:not(:last-child)`, {
    borderBottom: '1px solid rgba(255, 255, 255, 0.1);',
  })


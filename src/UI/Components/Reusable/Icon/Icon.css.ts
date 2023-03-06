import { style } from '@vanilla-extract/css'

export const fixedRatio = style({
  display: 'block',
  flexGrow: 1,
  flexShrink: 1,
  height: 'auto',
  maxHeight: '100%',
  maxWidth: '100%',
  width: 'auto',
  cursor: 'pointer'
})

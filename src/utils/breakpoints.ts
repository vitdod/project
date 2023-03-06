/* eslint-disable sort-keys-fix/sort-keys-fix */
export const breakpointNames = ['mobile', 'tablet', 'desktop', 'wide'] as const

export const breakpoints = {
  mobile: 0,
  tablet: 520,
  desktop: 640,
  wide: 960,
} as const

export type Breakpoint = keyof typeof breakpoints

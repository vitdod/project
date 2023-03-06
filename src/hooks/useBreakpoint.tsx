import { useEffect } from 'react'
import { create } from 'zustand'
import { breakpointNames, breakpoints } from '../utils/breakpoints'
import { useClientSide } from './useClientSide'
import { useWindowSize } from './useWindowSIze'

export const DEFAULT_BREAKPOINT = 'wide' as const
export type BreakpointState = {
  breakpoint: (typeof breakpointNames)[number]
  initialized: boolean
  setBreakpoint: (breakpoint: (typeof breakpointNames)[number]) => void
}

const useBreakpointStore = create<BreakpointState>((set) => ({
  breakpoint: DEFAULT_BREAKPOINT,
  initialized: false,
  setBreakpoint: (breakpoint: (typeof breakpointNames)[number]) => set({ breakpoint, initialized: true }),
}))

export const getCurrentBreakpoint = (width: number): (typeof breakpointNames)[number] =>
  breakpointNames.filter((name, index) => {
    const next = breakpointNames[index + 1]

    return width >= breakpoints[name] && (next ? width < breakpoints[next] : true)
  })[0]

export const useBreakpointUpdater = () => {
  const windowSize = useWindowSize()
  const { setBreakpoint } = useBreakpointStore()

  useEffect(() => {
    if (windowSize.width) {
      setBreakpoint(getCurrentBreakpoint(windowSize.width))
    }
  }, [setBreakpoint, windowSize.width])
}

export const useBreakpoint = () => {
  const isClientSide = useClientSide()
  const breakpoint = useBreakpointStore().breakpoint

  return isClientSide ? breakpoint : DEFAULT_BREAKPOINT
}

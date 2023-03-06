import { create } from 'zustand'

export const DEFAULT_STATE = false

export type SidebarState = {
  isOpened: boolean
  setIsOpened: (isOpened: boolean) => void
}

export const useSidebarState = create<SidebarState>((set) => ({
  isOpened: DEFAULT_STATE,
  setIsOpened: (isOpened: boolean) => set({ isOpened }),
}))

import { create } from 'zustand'

export const DEFAULT_STATE = ''
export const menuOptions = ['join', 'help', 'blog', 'about']
export type OptionState = {
  activeOption: (typeof menuOptions)[number] | ''
  setActiveOption: (option: string) => void
}

export const useOptionState = create<OptionState>((set) => ({
  activeOption: DEFAULT_STATE,
  setActiveOption: (activeOption: string) => set({ activeOption }),
}))

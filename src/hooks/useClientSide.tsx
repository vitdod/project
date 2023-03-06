import { useEffect } from 'react'
import { create } from 'zustand'

const useClientSideStore = create<boolean>(() => false)

export const useClientSide = () => {
  useEffect(() => {
    useClientSideStore.setState(true)
  }, [])
  return useClientSideStore()
}

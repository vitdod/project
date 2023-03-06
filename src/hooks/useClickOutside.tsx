import { RefObject, useEffect, useRef } from 'react'

export default function useOutsideClick(ref: RefObject<HTMLDivElement>, callback: (el: boolean) => void) {
  const sidebarRef = useRef<Element | null>(null)
  useEffect(() => {
    sidebarRef.current = document.querySelector<HTMLElement>('#portal')
  }, [])
  useEffect(() => {
    function handleClickOutside(event: Event) {
      const { target } = event
      if (target) {
        if (ref.current && !ref.current.contains(target as Node)) {
          callback(false)
        } else {
          callback(true)
        }
      }
    }
    sidebarRef.current && sidebarRef.current.addEventListener('mousedown', handleClickOutside)
    return () => {
      sidebarRef.current && sidebarRef.current.removeEventListener('mousedown', handleClickOutside)
    }
  }, [callback, ref])
}

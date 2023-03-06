import { useEffect, useMemo, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useSidebarState } from '../../../hooks/useSidebar'
import { sidebar } from './Overlay.css'

export const Overlay = () => {
  const { isOpened } = useSidebarState()
  const ref = useRef<Element | null>(null)
  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>('#portal')
  }, [])
  const styles = useMemo(() => {
    return isOpened ? sidebar({ type: 'active' }) : sidebar({ type: 'inactive' })
  }, [isOpened])
  return ref.current && createPortal(<div className={styles}></div>, ref.current)
}

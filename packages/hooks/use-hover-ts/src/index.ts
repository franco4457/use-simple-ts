import { useEffect, useRef, useState } from 'react'

export function useHoverTS() {
  const [isHovering, setIsHovering] = useState(false)
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMouseOver = () => setIsHovering(true)
    const handleMouseOut = () => setIsHovering(false)
    element.addEventListener('mouseover', handleMouseOver)
    element.addEventListener('mouseout', handleMouseOut)
    return () => {
      element.removeEventListener('mouseover', handleMouseOver)
      element.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  return { ref, isHovering }
}

export type UseHoverTSReturn = ReturnType<typeof useHoverTS>

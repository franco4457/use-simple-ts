import { useEffect, useRef, useState } from 'react'

export interface UseHoverTSProps {
  onHoverStart?: () => void
  onHoverEnd?: () => void
}

export function useHoverTS<T extends Element>({ onHoverEnd, onHoverStart }: UseHoverTSProps = {}) {
  const [isHovering, setIsHovering] = useState(false)
  const ref = useRef<T | null>(null)
  useEffect(() => {
    const element = ref.current
    if (!element) return
    if (element === null) return
    const handleMouseOver = () => {
      setIsHovering(true)
      if (onHoverStart != null) onHoverStart()
    }
    const handleMouseOut = () => {
      setIsHovering(false)
      if (onHoverEnd != null) onHoverEnd()
    }
    element.addEventListener('mouseover', handleMouseOver)
    element.addEventListener('mouseout', handleMouseOut)
    return () => {
      element.removeEventListener('mouseover', handleMouseOver)
      element.removeEventListener('mouseout', handleMouseOut)
    }
  }, [onHoverEnd, onHoverStart])

  return { ref, isHovering }
}

export type UseHoverTsReturn = ReturnType<typeof useHoverTS>

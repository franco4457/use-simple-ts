import { useEffect, useRef, useState } from 'react'

export function useHoverTS<T extends Element>() {
  const [isHovering, setIsHovering] = useState(false)
  const ref = useRef<T | null>(null)
  useEffect(() => {
    const element = ref.current
    if (!element) return
    if (element === null) return
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

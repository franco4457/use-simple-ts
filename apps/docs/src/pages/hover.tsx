import { useHoverTS } from '@use-simple-ts/use-hover-ts'
import { useRef } from 'react'
export function HoverPage() {
  const typedRef = useRef(null)

  const { ref, isHovering } = useHoverTS<HTMLDivElement>()
  return (
    <>
      <div ref={ref}>{isHovering ? 'Oh yeeeeeeeaaaa' : 'NO'}</div>
      <div ref={typedRef}></div>
    </>
  )
}

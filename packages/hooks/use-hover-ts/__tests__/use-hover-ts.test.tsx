import { fireEvent, render, renderHook, screen } from '@testing-library/react'

import { useHoverTS } from '../src'

const IS_HOVERING = 'YEEEEEP'
const NOT_HOVERING = 'LIGTH_WEEEIGHT'

describe('useHoverTS', () => {
  it('should work correctly', () => {
    const { result } = renderHook(() => useHoverTS())
    const { isHovering, ref } = result.current
    expect(isHovering).toBe(false)
    expect(ref).not.toBeUndefined()
  })
  it('should work correctly with initial value', () => {
    const Component = () => {
      const { ref, isHovering } = useHoverTS<HTMLDivElement>()
      return (
        <div data-testid="1" ref={ref}>
          {isHovering ? IS_HOVERING : NOT_HOVERING}
        </div>
      )
    }

    render(<Component />)
    const element = screen.getByTestId('1')
    fireEvent.mouseEnter(element)
    expect(element.textContent).toBe(IS_HOVERING)
  })
})

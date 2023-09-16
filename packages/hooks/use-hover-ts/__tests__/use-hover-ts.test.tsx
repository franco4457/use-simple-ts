import { fireEvent, render, renderHook, screen } from '@testing-library/react'

import { useHoverTS } from '../src'

const IS_HOVERING = 'YEEEEEP'
const NOT_HOVERING = 'LIGTH_WEEEIGHT'

const TestComponent = ({
  id,
  onHoverStart,
  onHoverEnd
}: {
  id: string
  onHoverStart?: () => void
  onHoverEnd?: () => void
}) => {
  const { ref, isHovering } = useHoverTS<HTMLDivElement>({ onHoverEnd, onHoverStart })
  return (
    <div data-testid={id} ref={ref}>
      {isHovering ? IS_HOVERING : NOT_HOVERING}
    </div>
  )
}

describe('useHoverTS', () => {
  it.concurrent('should work correctly', () => {
    const { result } = renderHook(() => useHoverTS())
    const { isHovering, ref } = result.current
    expect(isHovering).toBe(false)
    expect(ref).not.toBeUndefined()
  })
  it.concurrent('should work correctly onHover element', () => {
    render(<TestComponent id="1" />)
    const element = screen.getByTestId('1')
    fireEvent.mouseEnter(element)
    expect(element.textContent).toBe(IS_HOVERING)
    fireEvent.mouseLeave(element)
    expect(element.textContent).toBe(NOT_HOVERING)
  })
  it.concurrent('should work correctly onHover element multiple times', () => {
    render(<TestComponent id="2" />)
    const element = screen.getByTestId('2')
    fireEvent.mouseEnter(element)
    expect(element.textContent).toBe(IS_HOVERING)
    fireEvent.mouseLeave(element)
    expect(element.textContent).toBe(NOT_HOVERING)
    fireEvent.mouseEnter(element)
    expect(element.textContent).toBe(IS_HOVERING)
    fireEvent.mouseLeave(element)
    expect(element.textContent).toBe(NOT_HOVERING)
    fireEvent.mouseEnter(element)
    expect(element.textContent).toBe(IS_HOVERING)
    fireEvent.mouseLeave(element)
    expect(element.textContent).toBe(NOT_HOVERING)
  })
  it.concurrent('should work correctly onHoverStart element', () => {
    let num = 0
    const fn = () => num++
    render(<TestComponent id="3" onHoverStart={fn} />)
    const element = screen.getByTestId('3')
    fireEvent.mouseEnter(element)
    expect(element.textContent).toBe(IS_HOVERING)
    expect(num).toBe(1)
    fireEvent.mouseLeave(element)
    expect(element.textContent).toBe(NOT_HOVERING)
    expect(num).toBe(1)
  })
  it.concurrent('should work correctly onHoverStart element multiple times', () => {
    let num = 0
    const fn = () => num++
    render(<TestComponent id="4" onHoverStart={fn} />)
    const element = screen.getByTestId('4')
    fireEvent.mouseEnter(element)
    expect(element.textContent).toBe(IS_HOVERING)
    expect(num).toBe(1)
    fireEvent.mouseLeave(element)
    expect(num).toBe(1)
    fireEvent.mouseEnter(element)
    expect(num).toBe(2)
    fireEvent.mouseLeave(element)
    expect(num).toBe(2)
    fireEvent.mouseEnter(element)
    expect(num).toBe(3)
  })
  it.concurrent('should work correctly onHover element', () => {
    let num = 0
    const fn = () => num++
    render(<TestComponent id="5" onHoverEnd={fn} />)
    const element = screen.getByTestId('5')
    fireEvent.mouseEnter(element)
    expect(element.textContent).toBe(IS_HOVERING)
    expect(num).toBe(0)
    fireEvent.mouseLeave(element)
    expect(element.textContent).toBe(NOT_HOVERING)
    expect(num).toBe(1)
  })
  it.concurrent('should work correctly onHover element multiple times', () => {
    let num = 0
    const fn = () => num++
    render(<TestComponent id="5" onHoverEnd={fn} />)
    const element = screen.getByTestId('5')
    fireEvent.mouseEnter(element)
    expect(element.textContent).toBe(IS_HOVERING)
    expect(num).toBe(0)
    fireEvent.mouseLeave(element)
    expect(element.textContent).toBe(NOT_HOVERING)
    expect(num).toBe(1)
    fireEvent.mouseEnter(element)
    expect(num).toBe(1)
    fireEvent.mouseLeave(element)
    expect(num).toBe(2)
    fireEvent.mouseEnter(element)
    expect(num).toBe(2)
    fireEvent.mouseLeave(element)
    expect(num).toBe(3)
  })
  it.concurrent('should work correctly onHoverStart & onHoverEnd  ', () => {
    let num = 0
    const fn = () => num++
    render(<TestComponent id="6" onHoverEnd={fn} onHoverStart={fn} />)
    const element = screen.getByTestId('6')
    fireEvent.mouseEnter(element)
    expect(element.textContent).toBe(IS_HOVERING)
    expect(num).toBe(1)
    fireEvent.mouseLeave(element)
    expect(element.textContent).toBe(NOT_HOVERING)
    expect(num).toBe(2)
    fireEvent.mouseEnter(element)
    expect(element.textContent).toBe(IS_HOVERING)
    expect(num).toBe(3)
    fireEvent.mouseLeave(element)
    expect(element.textContent).toBe(NOT_HOVERING)
    expect(num).toBe(4)
    fireEvent.mouseEnter(element)
    expect(element.textContent).toBe(IS_HOVERING)
    expect(num).toBe(5)
    fireEvent.mouseLeave(element)
    expect(element.textContent).toBe(NOT_HOVERING)
    expect(num).toBe(6)
  })
})

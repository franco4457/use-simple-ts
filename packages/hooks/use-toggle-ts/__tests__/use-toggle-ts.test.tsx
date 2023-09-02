import { renderHook } from '@testing-library/react-hooks'

import { useToggleTS } from '../src'

describe('useToggleTS', () => {
  it('should work correctly when initialState is undefined', () => {
    const { result } = renderHook(() => useToggleTS())
    expect(result.current.toggle).toBe(false)
  })
  it('should work correctly when initial state is true', () => {
    const { result } = renderHook(() => useToggleTS(true))
    expect(result.current.toggle).toBe(true)
  })
  it('should work correctly switch', async () => {
    const { result } = renderHook(() => useToggleTS())
    expect(result.current.toggle).toBe(false)
    result.current.handlerToggle()
    expect(result.current.toggle).toBe(true)
    result.current.handlerToggle()
    expect(result.current.toggle).toBe(false)
  })
  it('should work correctly switch with custom value', async () => {
    const initalState = { value: true, value2: false }
    const { result } = renderHook(() => useToggleTS(initalState))
    expect(result.current.toggle).toStrictEqual(initalState)
    result.current.handlerToggle('value')
    expect(result.current.toggle).toStrictEqual({ value: false, value2: false })
    result.current.handlerToggle('value')
    expect(result.current.toggle).toStrictEqual({ value: true, value2: false })
    result.current.handlerToggle('value2')
    expect(result.current.toggle).toStrictEqual({ value: true, value2: true })
    result.current.handlerToggle('value2')
    expect(result.current.toggle).toStrictEqual({ value: true, value2: false })
  })
})

import { renderHook } from '@testing-library/react'

import { useTitleTS } from '../src'

describe('useTitleTS', () => {
  it('should work correctly', () => {
    const { result } = renderHook(() => useTitleTS())
    expect(result.current.updateTitle).toBeInstanceOf(Function)
  })
})

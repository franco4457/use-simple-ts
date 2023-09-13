import { renderHook } from '@testing-library/react'

import { useHoverTS } from '../src'

describe('useHoverTS', () => {
  it('should work correctly', () => {
    const { result } = renderHook(() => useHoverTS())

    // Add your test here
  })
})

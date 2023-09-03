import { renderHook } from '@testing-library/react'

import { useDebounceTS } from '../src'

describe('useDebounceTs', () => {
  it('should work correctly', () => {
    const { result } = renderHook(() => useDebounceTS(() => undefined, 1000))

    // Add your test here
  })
})

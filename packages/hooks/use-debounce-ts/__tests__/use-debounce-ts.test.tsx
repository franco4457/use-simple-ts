import { renderHook } from '@testing-library/react-hooks'

import { useDebounceTS } from '../src'

describe('useDebounceTs', () => {
  it('should work correctly', () => {
    const { result } = renderHook(() => useDebounceTS())

    // Add your test here
  })
})

import { renderHook } from '@testing-library/react'

import { useFaviconTS } from '../src'

describe('useFaviconTS', () => {
  it('should work correctly', () => {
    const { result } = renderHook(() => useFaviconTS())
    expect(result.current.updateFavicon).toBeInstanceOf(Function)
  })
})

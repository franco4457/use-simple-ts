import { renderHook } from '@testing-library/react-hooks'

import { usePaginationTS } from '../src'

describe('usePaginationTS', () => {
  it('should work correctly', () => {
    const { result } = renderHook(() => usePaginationTS([]))
    console.log(result.all)
    // Add your test here
  })
})

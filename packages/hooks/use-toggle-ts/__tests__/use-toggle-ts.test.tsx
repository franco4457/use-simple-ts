import { renderHook } from '@testing-library/react-hooks'

import { useToggleTS } from '../src'

describe('useToggleTS', () => {
  it('should work correctly', () => {
    const { result } = renderHook(() => useToggleTS())
    console.log(result)
  })
})

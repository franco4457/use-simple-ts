import { renderHook } from '@testing-library/react-hooks'

import { useCloudinaryUploadTS } from '../src'

describe('useCloudinaryUploadTS', () => {
  it('should work correctly', () => {
    const { result } = renderHook(() => useCloudinaryUploadTS())

    // Add your test here
  })
})

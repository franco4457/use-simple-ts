import { renderHook } from '@testing-library/react'

import { useCloudinaryUploadTS } from '../src'

describe('useCloudinaryUploadTS', () => {
  it('should work correctly', () => {
    const { result } = renderHook(() =>
      useCloudinaryUploadTS({ uploadPresetName: 'test', cloudName: 'test' })
    )

    // Add your test here
  })
})

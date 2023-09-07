import { act, renderHook, waitFor } from '@testing-library/react'
import testImage from './test-img.png'
// import wrongFile from './wrong-file.txt'
import { useCloudinaryUploadTS } from '../src'

const {
  VITE_CLOUDINARY_UPLOAD_PRESET: uploadPresetName = '',
  VITE_CLOUDINARY_CLOUD_NAME: cloudName = ''
} = process.env

describe('useCloudinaryUploadTS', () => {
  it('should work correctly', () => {
    const { result } = renderHook(() => useCloudinaryUploadTS({ uploadPresetName, cloudName }))
    expect(result.current.handleInputChange).toBeInstanceOf(Function)
    expect(result.current.error).toBeUndefined()
    expect(result.current.isLoading).toBe(false)
    expect(result.current.image).toBeUndefined()
  })

  it('should work correctly with file', async () => {
    const { result } = renderHook(() => useCloudinaryUploadTS({ uploadPresetName, cloudName }))
    const file = new File([testImage], 'chucknorris.png', { type: 'image/png' })
    const event = {
      target: {
        files: [file]
      }
    } as unknown as React.ChangeEvent<HTMLInputElement>
    act(() => {
      result.current.handleInputChange(event)
    })

    expect(result.current.image).toBeUndefined()
    expect(result.current.error).toBeUndefined()
    await waitFor(
      () => {
        expect(result.current.error).toBeUndefined()
        expect(result.current.image).toBeDefined()
        expect(result.current.image).toBeTypeOf('string')
      },
      { timeout: 2000 }
    )
  })
  it.skip('should work correctly with file and error', async () => {
    const { result } = renderHook(() => useCloudinaryUploadTS({ uploadPresetName, cloudName }))
    const file = new File([testImage], 'wrong.txt', { type: 'image/png' })
    const event = {
      target: {
        files: [file]
      }
    } as unknown as React.ChangeEvent<HTMLInputElement>
    const initalResult = result.current
    act(() => {
      result.current.handleInputChange(event)
    })
    await waitFor(() => {
      expect(result.current).not.toBe(initalResult)
    })
    expect(result.current.isLoading).toBe(true)
  })
})

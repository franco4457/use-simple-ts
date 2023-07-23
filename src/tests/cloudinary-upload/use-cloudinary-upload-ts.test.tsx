import { CloudinaryUpload } from '@/components/cloudinary-upload'
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import testImg from '@utils/mocks/assets/test-img.png'

const fakeFile = new File([testImg], 'test.png', { type: 'image/png' })

describe('UseCloudinaryUploadTS', () => {
  afterEach(cleanup)
  test('should be works', () => {
    render(<CloudinaryUpload/>)
    expect(true).toBe(true)
  })
  test('should be render a input file', () => {
    render(<CloudinaryUpload/>)
    const $input = screen.getByPlaceholderText(/upload/i)
    expect($input).toBeDefined()
  })
  test('should not be render a image when no upload', () => {
    render(<CloudinaryUpload/>)
    const $img = screen.queryByRole('image')
    expect($img).toBeNull()
  })
  test.skip('should be render a image when upload a image', async () => {
    render(<CloudinaryUpload/>)
    const $input = screen.getByPlaceholderText(/upload/i) as HTMLInputElement
    userEvent.upload($input, fakeFile)
    fireEvent.change($input)
    await waitFor(async () => {
      const $img = screen.getByRole('image')
      expect($img).toBeDefined()
    }, { timeout: 2000 })
  })
})

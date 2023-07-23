import { CloudinaryUpload } from '@/components/cloudinary-upload'
import { render } from '@testing-library/react'

describe('UseCloudinaryUploadTS', () => {
  test('should be works', () => {
    render(<CloudinaryUpload/>)
    expect(true).toBe(true)
  })
})

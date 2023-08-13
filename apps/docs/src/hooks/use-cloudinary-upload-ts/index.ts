import { fetchCloudinaryApi } from '@/utils/fetch/cloudinary-api'
import { useState } from 'react'

export function useCloudinaryUploadTS ({
  uploadPresetName,
  cloudName
}: UseCloudinaryUploadProps) {
  const [image, setImage] = useState<string>()
  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e
    if (target.files && target.files.length) {
      const file = target.files[0]
      const formData = new FormData()
      formData.append('file', file)
      const reader = new FileReader()
      reader.readAsDataURL(file)

      try {
        reader.onloadend = async () => {
          const base64data = reader.result
          const response = await fetchCloudinaryApi({
            uploadPresetName,
            cloudName,
            base64data
          })
          setImage(response.secure_url)
          console.log(response)
        }
      } catch (error) {
        console.log(error)
      } finally {
        console.log('finally')
      }
    }
  }
  return {
    handleInputChange,
    image
  }
}

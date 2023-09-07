import { useState } from 'react'
import { fetchCloudinaryApi } from './utils'
export type UseCloudinaryUploadTsProps = RequiredCloudnaryProps

export function useCloudinaryUploadTS({ uploadPresetName, cloudName }: UseCloudinaryUploadTsProps) {
  const [image, setImage] = useState<string>()
  const [error, setError] = useState<string>()
  const [isLoading, setIsLoading] = useState(false)
  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e
    if (target.files && target.files.length) {
      const file = target.files[0]
      const formData = new FormData()
      formData.append('file', file)
      const reader = new FileReader()
      reader.readAsDataURL(file)

      setIsLoading(true)
      try {
        reader.onloadend = async () => {
          const base64data = reader.result
          const response = await fetchCloudinaryApi({
            uploadPresetName,
            cloudName,
            base64data
          })
          setImage(response.secure_url)
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message)
        } else {
          setError('Oops... There was an error uploading the file')
        }
      } finally {
        setIsLoading(false)
      }
    }
  }
  return {
    handleInputChange,
    error,
    isLoading,
    image
  }
}

export type UseCloudinaryUploadTsReturn = ReturnType<typeof useCloudinaryUploadTS>

import { useState } from 'react'

interface CloudinaryResponse {
  asset_id: string
  public_id: string
  version: number
  version_id: string
  signature: string
  width: number
  height: number
  format: string
  resource_type: string
  created_at: string
  tags: string[]
  bytes: number
  type: string
  etag: string
  placeholder: boolean
  url: string
  secure_url: string
  folder: string
  access_mode: string
  original_filename: string
}
// const { VITE_CLOUDINARY_UPLOAD_PRESET, VITE_CLOUDINARY_CLOUD_NAME } = import.meta.env
// const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/CLOUD_NAME/upload'

interface UseCloudinaryUploadProps {
  uploadPresetName: string
  cloudName: string
}

interface CloudinaryRetrun {
assetId: string;
publicId: string;

}

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
      formData.append('upload_preset', uploadPresetName)
      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
          {
            method: 'POST',
            body: formData
          }
        )
        const data = (await response.json()) as CloudinaryResponse
        setImage(data.secure_url)
        console.log(data)
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

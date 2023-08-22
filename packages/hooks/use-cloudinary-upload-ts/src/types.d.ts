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

interface RequiredCloudnaryProps {
  uploadPresetName: string
  cloudName: string
}

type UseCloudinaryUploadProps = RequiredCloudnaryProps

interface FetchCloudinaryApiProps extends RequiredCloudnaryProps {
  base64data: FileReader['result']
}

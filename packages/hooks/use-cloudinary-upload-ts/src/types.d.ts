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

interface RequiredCloudnaryProps {
  uploadPresetName: string
  cloudName: string
}

interface FetchCloudinaryApiProps extends RequiredCloudnaryProps {
  base64data: FileReader['result']
}
declare module '*.png' {
  const value: never
  export default value
}
declare module '*.txt' {
  const value: never
  export default value
}

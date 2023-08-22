import { useState } from 'react'
// export interface UseCloudinaryUploadTsProps {}
export const fetchCloudinaryApi = async ({
  uploadPresetName,
  cloudName,
  base64data
}: FetchCloudinaryApiProps) => {
  const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      file: base64data,
      upload_preset: uploadPresetName
    })
  })
  if (res.ok) {
    return res.json() as Promise<CloudinaryResponse>
  } else {
    console.log(res)
    res.json().then((res) => console.log(res))
    throw new Error('Error to upload image')
  }
}

export function useCloudinaryUploadTS({
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

export type UseCloudinaryUploadTsReturn = ReturnType<
  typeof useCloudinaryUploadTS
>

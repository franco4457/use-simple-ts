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
    if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
      res.json().then((res) => console.log(res))
    }
    throw new Error('Error to upload image')
  }
}

import { useCloudinaryUploadTS } from '@/hooks/use-cloudinary-upload-ts'
import { cloudinaryCloudName, cloudinaryUploadPreset } from '@/lib/env'

export function CloudinaryUpload () {
  const { handleInputChange, image } = useCloudinaryUploadTS({ cloudName: cloudinaryCloudName, uploadPresetName: cloudinaryUploadPreset })
  return (
    <section>
      <input
        type="file"
        name="upload"
        placeholder="Upload an image"
        onChange={handleInputChange}
      />
      {image && <img src={image} alt="uploaded image" />}
    </section>
  )
}

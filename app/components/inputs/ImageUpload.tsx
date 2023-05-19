'use client'

import { CldUploadWidget } from 'next-cloudinary'
import Image from 'next/image'
import { useCallback } from 'react'
import { TbPhotoPlus } from 'react-icons/tb'

declare global {
  var cloudinary: any
}

const uploadPreset = 'laq5b9xo'

interface ImageUploadProps {
  onChange: (value: string) => void
  value: string
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {
  const handleUpload = useCallback(
    (result: any) => {
      onChange(result.info.secure_url)
    },
    [onChange]
  )

  return (
    <div className="class">
      <CldUploadWidget
        onUpload={handleUpload}
        uploadPreset={uploadPreset}
        options={{
          maxFiles: 1
        }}>
        {({ open }) => {
          return (
            <div
              onClick={() => open?.()}
              className="relative flex cursor-pointer flex-col items-center justify-center gap-4 border-2 border-dashed border-neutral-300 p-20 text-neutral-600 transition hover:opacity-70">
              <TbPhotoPlus size={50} />
              <div className="text-lg font-semibold">
                Upload a photo
              </div>
              {value && (
                <div className="absolute inset-0 w-full h-full">
                  <Image 
                    alt="Upload"
                    fill
                    style={{ objectFit: 'cover' }}
                    src={value}
                  />
                </div>
              )}
            </div>
          )
        }}
      </CldUploadWidget>
    </div>
  )
}

export default ImageUpload
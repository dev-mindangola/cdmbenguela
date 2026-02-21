'use client'

import { CldImage } from 'next-cloudinary'
import Image from 'next/image'
import { useState } from 'react'
import { LightBox } from './lightbox'

type Image = {
  public_id: string
  width: number
  height: number
  secure_url: string
  url: string
}

interface GaleryGridProps {
  images: Image[]
}
export function GaleryGrid({ images }: GaleryGridProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  function separarArray(arrayUnidimensional: Image[]): Image[][] {
    const tamanhoParte = Math.ceil(arrayUnidimensional.length / 3)

    const array1 = arrayUnidimensional.slice(0, tamanhoParte)

    const array2 = arrayUnidimensional.slice(tamanhoParte, tamanhoParte * 2)

    const array3 = arrayUnidimensional.slice(tamanhoParte * 2, tamanhoParte * 3)

    return [array1, array2, array3]
  }

  const imagesGrid = separarArray(images)

  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false)

  function handleCloseLightBox() {
    setIsLightBoxOpen(false)
  }

  function handleOpenLightBox(imageId: string) {
    setIsLightBoxOpen(true)

    const imageIndex = images.findIndex((image) => image.public_id === imageId)

    setSelectedImage(imageIndex)
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {imagesGrid.map((images, index) => {
        return (
          <div
            className={`grid ${index === 2 ? 'grid-cols-2 md:grid-cols-1 col-span-2 md:col-span-1' : 'grid-cols-1'} md:grid-cols-1 gap-4`}
            key={index}
          >
            {images.map((image) => {
              return (
                <button
                  key={image.public_id}
                  className="h-full group min-h-48 min-w-full bg-slate-200 cursor-pointer overflow-hidden rounded-lg"
                  onClick={() => handleOpenLightBox(image.public_id)}
                >
                  <CldImage
                    src={image.public_id}
                    width={image.width}
                    height={image.height}
                    sizes="50vw"
                    alt="image"
                    crop="fill"
                    className="min-h-full group-hover:scale-110 transition-all h-auto max-w-full w-ful object-cover rounded-lg"
                  />
                </button>
              )
            })}
          </div>
        )
      })}

      <LightBox
        images={images}
        onClose={handleCloseLightBox}
        isOpen={isLightBoxOpen}
        selectedImage={selectedImage}
      />
    </div>
  )
}

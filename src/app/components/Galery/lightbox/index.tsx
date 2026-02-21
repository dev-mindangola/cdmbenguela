'use client'

import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

type Image = {
  public_id: string
  width: number
  height: number
  secure_url: string
  url: string
}

interface LightBoxProps {
  images: Image[]
  isOpen: boolean
  onClose: () => void
  selectedImage: number
}

export function LightBox({
  images,
  isOpen,
  onClose,
  selectedImage,
}: LightBoxProps) {
  const newImages = images.map((image) => {
    return {
      src: image.secure_url,
      with: image.width,
      height: image.height,
    }
  })

  return (
    <>
      <Lightbox
        open={isOpen}
        index={selectedImage}
        close={onClose}
        slides={newImages}
      />
    </>
  )
}

import { Suspense } from 'react'
import { FolderButtons } from './folderButtons'
import { GaleryGrid } from './GaleryGrid'
import { GaleryPlaceholder } from './GaleryPlaceholder'

type Folder = {
  name: string
  external_id: string
  path: string
}

type Image = {
  public_id: string
  width: number
  height: number
  secure_url: string
  url: string
}

interface GaleryProps {
  folders: Folder[]
  images: Image[]
}

export function Galery({ folders, images }: GaleryProps) {
  return (
    <div>
      <FolderButtons folders={folders} />

      <Suspense fallback={<GaleryPlaceholder />}>
        <GaleryGrid images={images} />
      </Suspense>
    </div>
  )
}

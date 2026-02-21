'use client'

import { Button } from '@/components/ui/button'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

type Folder = {
  name: string
  external_id: string
  path: string
}

interface FolderButtonsProps {
  folders: Folder[]
}

export function FolderButtons({ folders }: FolderButtonsProps) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const [activeFolder, setActiveFolder] = useState(folders[0].name)

  function handleFolderChange(value: string) {
    const params = new URLSearchParams(searchParams)

    const folderValue = value

    if (folderValue) {
      params.set('folder', folderValue)
    } else {
      params.delete('folder')
    }

    replace(`${pathname}?${params.toString()}`)

    setActiveFolder(value)
  }

  return (
    <div className="flex mb-8 gap-2">
      {/* {folders.map((folder) => {
        return (
          <Button
            key={folder.external_id}
            variant={folder.name === activeFolder ? 'default' : 'secondary'}
            onClick={() => handleFolderChange(folder.name)}
          >
            {folder.name}
          </Button>
        )
      })} */}
      <Button
        key={folders[0].external_id}
        variant={folders[0].name === activeFolder ? 'default' : 'secondary'}
        onClick={() => handleFolderChange(folders[0].name)}
      >
        {folders[0].name}
      </Button>
    </div>
  )
}

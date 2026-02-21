import { Galery } from '@/app/components/Galery'
import { Header } from '@/app/components/Shared/Header'
import { v2 as cloudinary } from 'cloudinary'
// import { CldImage } from 'next-cloudinary'

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
})

type Image = {
  public_id: string
  width: number
  height: number
  secure_url: string
  url: string
}

type tsearchParams = Promise<{ folder: string }>

export default async function Page(props: { searchParams: tsearchParams }) {
  const folder = (await props.searchParams).folder

  const { folders } = await cloudinary.api.root_folders()

  const assetFolder = folder || folders[0].name

  const { resources } = await cloudinary.api.resources_by_asset_folder(
    assetFolder,
    {
      max_results: 100,
    },
  )

  return (
    <div>
      <Header
        title="Galeria"
        subTitle="Este site está em desenvolvimento pela Mind Creative."
      />
      <main>
        <div className="max-w-6xl px-5 sm:px-8 xl:px-0 mx-auto w-full py-20 md:py-28 flex">
          <div className="flex-1">
            <Galery folders={folders} images={resources as Image[]} />
          </div>
        </div>
      </main>
    </div>
  )
}

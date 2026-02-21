import { createClient } from '@/prismicio'
import { PrismicRichText } from '@prismicio/react'
import Image from 'next/image'

export default async function AboutPage() {
  const client = createClient()

  const quemSomos = (
    await client.getSingle('about', {
      fetchOptions: {
        next: {
          revalidate: 0,
        },
      },
    })
  ).data.quem_somos

  return (
    <div>
      <div className="space-y-4">
        <div className="border-4 border-white shadow-lg">
          <Image
            src={String(quemSomos[0]?.image.url)}
            width={1200}
            height={2000}
            alt={String(quemSomos[0]?.image.alt)}
          />
        </div>
        <div className="space-y-4">
          <PrismicRichText field={quemSomos[0]?.description} />
        </div>
      </div>
    </div>
  )
}

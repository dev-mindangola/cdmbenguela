import { createClient } from '@/prismicio'
import { PrismicRichText } from '@prismicio/react'

export default async function WhatWeDoPage() {
  const client = createClient()

  const nossahistoria = (
    await client.getSingle('about', {
      fetchOptions: {
        next: {
          revalidate: 0,
        },
      },
    })
  ).data.nossa_historia

  return (
    <div className="space-y-4">
      <PrismicRichText field={nossahistoria} />
    </div>
  )
}

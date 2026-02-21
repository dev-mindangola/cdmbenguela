import { createClient } from '@/prismicio'
import Image from 'next/image'

export default async function PartnersPage() {
  const client = createClient()

  const partners = (
    await client.getSingle('parceiros', {
      fetchOptions: {
        next: {
          revalidate: 0,
        },
      },
    })
  ).data

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      {partners.parceiros.map((partner) => {
        return (
          <div key={partner.nome}>
            <div className="h-56 w-auto">
              <Image
                src={String(partner?.logo?.url)}
                width={1200}
                height={2000}
                alt={String(partner?.logo.alt)}
                className="w-auto h-full"
              />
            </div>

            <h2 className="font-bold mt-4 text-lg mb-4"> {partner.nome} </h2>

            <p className="line-clamp-4">{partner?.description}</p>
          </div>
        )
      })}
    </div>
  )
}

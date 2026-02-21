import { createClient } from '@/prismicio'
import Image from 'next/image'

export async function Partners() {
  const client = createClient({
    fetchOptions: {
      next: {
        revalidate: 0,
      },
    },
  })
  const { parceiros: partners } = (await client.getSingle('parceiros')).data

  return (
    <section className="w-full bg-[#DEE5EF]">
      <div className="max-w-6xl px-8 xl:px-0 mx-auto flex items-center justify-center gap-8 py-8">
        {partners.map((partner) => {
          return (
            <div className="w-32" key={partner.nome}>
              <Image
                src={String(partner.logo.url)}
                alt={String(partner.logo.alt)}
                width={partner.logo.dimensions?.width}
                height={partner.logo.dimensions?.height}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}

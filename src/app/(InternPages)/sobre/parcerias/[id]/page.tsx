import { slugify } from '@/lib/utils'
import { createClient } from '@/prismicio'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export default async function PartnerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const client = createClient()
  const { data } = await client.getSingle('parceiros', {
    fetchOptions: { next: { revalidate: 0 } },
  })
  const partner = data.parceiros.find((item) => slugify(item.nome ?? '') === id)

  if (!partner) notFound()

  return (
    <div className="flex">
      <div className="max-w-2xl w-full mx-auto">
        <div className="border-4 border-white rounded-sm">
          {partner.logo.url && (
            <div className="rounded-sm p-1 overflow-hidden">
              <Image
                src={partner.logo.url}
                width={1200}
                height={2000}
                alt={partner.logo.alt ?? partner.nome ?? ''}
                className="w-full object-contain min-h-96"
              />
            </div>
          )}
          <div className="p-4 flex flex-col items-center">
            <h3 className="font-bold text-center text-xl mb-4">
              {partner.nome}
            </h3>
            <div className="space-y-4">
              {partner.description?.split('\n').map((paragraph, index) => (
                <p key={index} className="text-muted-foreground text-justify">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

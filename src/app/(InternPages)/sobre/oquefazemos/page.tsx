import { createClient } from '@/prismicio'
import Image from 'next/image'

export default async function WhatWeDoPage() {
  const client = createClient()

  const oQueFazemos = (
    await client.getSingle('about', {
      fetchOptions: {
        next: {
          revalidate: 0,
        },
      },
    })
  ).data.o_que_fazemos

  return (
    <div className="space-y-16">
      {oQueFazemos.map((service, index) => {
        return (
          <div className="lg:flex gap-8 items-center" key={service.title}>
            <div className={`${index % 2 !== 0 && 'order-2'} lg:w-1/3`}>
              <div className="border-4 rounded-md border-white shadow-lg">
                <Image
                  src={String(service?.image?.url)}
                  width={1200}
                  height={2000}
                  alt={String(service?.image.alt)}
                  className="w-full rounded-md"
                />
              </div>
            </div>

            <div className="mt-8 lg:mt-0 lg:w-2/3">
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="space-y-4 text-muted-foreground">
                {service.description}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

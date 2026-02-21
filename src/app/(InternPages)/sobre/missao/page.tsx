import { createClient } from '@/prismicio'

export default async function WhatWeDoPage() {
  const client = createClient()

  const data = (
    await client.getSingle('about', {
      fetchOptions: {
        next: {
          revalidate: 0,
        },
      },
    })
  ).data.missao_valores_visao

  return (
    <div className="space-y-8 ">
      {data.map((value) => {
        return (
          <div className="space-y-4" key={value.title}>
            <h2 className="font-bold"> {value.title} </h2>

            <p className="text-muted-foreground">{value.description}</p>
          </div>
        )
      })}
    </div>
  )
}

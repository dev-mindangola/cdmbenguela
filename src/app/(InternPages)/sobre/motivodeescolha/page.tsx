import { createClient } from '@/prismicio'
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'

const components: JSXMapSerializer = {
  list: ({ children }) => (
    <ul className="list-disc pl-8 space-y-4 text-muted-foreground">
      {children}
    </ul>
  ),
  listItem: ({ children }) => <li>{children}</li>,
}

export default async function WhyChoosePage() {
  const client = createClient()

  const motivodeescolha = (
    await client.getSingle('about', {
      fetchOptions: {
        next: {
          revalidate: 0,
        },
      },
    })
  ).data.porque_estudar_na_cdm

  return (
    <div className="space-y-4 text-muted-foreground">
      <PrismicRichText field={motivodeescolha} components={components} />
    </div>
  )
}

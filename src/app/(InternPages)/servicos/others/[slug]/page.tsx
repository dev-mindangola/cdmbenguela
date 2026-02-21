import { Header } from '@/app/components/Shared/Header'
import { createClient } from '@/prismicio'
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'
import Image from 'next/image'
type tParams = Promise<{ slug: string }>

const components: JSXMapSerializer = {
  heading1: ({ children }) => <h1 className="mb-8">{children}</h1>,
  heading2: ({ children }) => <h2 className="mb-8">{children}</h2>,
  heading3: ({ children }) => <h3 className="mb-8">{children}</h3>,
  heading4: ({ children }) => <h4 className="mb-8">{children}</h4>,
  heading5: ({ children }) => <h5 className="mb-8">{children}</h5>,
  heading6: ({ children }) => <h6 className="mb-8">{children}</h6>,
  list: ({ children }) => (
    <ul className="list-disc pl-8 space-y-4">{children}</ul>
  ),
  listItem: ({ children }) => <li>{children}</li>,
  hyperlink: ({ children }) => (
    <a className="underline text-primary">{children}</a>
  ),
  paragraph: ({ children }) => <p className="leading-normal">{children}</p>,
}

export default async function Page(props: { params: tParams }) {
  const slug = (await props.params).slug

  console.log(slug, slug[0])

  const client = createClient()

  const service = await client.getByUID('services', slug, {
    fetchOptions: {
      next: {
        revalidate: 0,
      },
    },
  })

  return (
    <div>
      <Header
        title={String(service.data.name)}
        image={service.data.image.url}
        subTitle="Este site está em desenvolvimento pela Mind Creative."
      />
      <main>
        <div className="max-w-4xl px-5 sm:px-8 xl:px-0 mx-auto w-full py-20 md:py-28">
          <div>
            <div className="w-full h-auto mb-10 rounded-xl overflow-hidden">
              <Image
                src={String(service.data.image.url)}
                width={200}
                height={200}
                alt={String(service.data.image.alt)}
              />
            </div>
            <div className="space-y-4 px-8">
              <PrismicRichText
                field={service.data.description}
                components={components}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

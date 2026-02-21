import { Header } from '@/app/components/Shared/Header'
import { createClient } from '@/prismicio'
import * as prismic from '@prismicio/client'
import { Suspense } from 'react'
import LayoutListTwo from '../../components/News/LayoutListTwo'

type tsearchParams = Promise<{ page: number }>

export default async function BlogListStyleTwo(props: {
  searchParams: tsearchParams
}) {
  const client = createClient()

  const currentPage = (await props.searchParams).page

  const { results, ...rest } = await client.getByType('news', {
    filters: [prismic.filter.at('document.type', 'news')],
    pageSize: 10,
    page: currentPage,
  })

  return (
    <>
      <div className="overflow-x-hidden">
        <Header title="Notícias" subTitle="Site em desenvolvimento" />
        <main className="content">
          <div className="max-w-6xl px-5 sm:px-8 xl:px-0 mx-auto w-full">
            <Suspense>
              <LayoutListTwo news={results} meta={rest} />
            </Suspense>
          </div>
        </main>
      </div>
    </>
  )
}

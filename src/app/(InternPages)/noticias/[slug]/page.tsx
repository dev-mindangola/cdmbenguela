import LayoutDetailTwo from '@/app/components/News/LayoutDetailTwo'
import { Header } from '@/app/components/Shared/Header'
import { createClient } from '@/prismicio'

type tParams = Promise<{ slug: string }>

export default async function CaseStudyDetail(props: { params: tParams }) {
  const slug = (await props.params).slug

  console.log(slug, slug[0])

  const client = createClient()

  const news = await client.getByUID('news', slug)

  return (
    <>
      <div className="overflow-x-hidden">
        <Header
          title={String(news.data.title)}
          subTitle="Site em desenvolvimento"
        />
        <main className="content">
          <LayoutDetailTwo data={news} />
        </main>
      </div>
    </>
  )
}

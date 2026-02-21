import { createClient } from '@/prismicio'
import { LucideClock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export async function LastNews() {
  const client = createClient()

  const lastNews = await client.getAllByType('news', {
    orderings: {
      field: 'news.first_publication_date',
      direction: 'desc',
    },
    limit: 3,
    fetchOptions: {
      next: {
        revalidate: 0,
      },
    },
  })
  return (
    <div className="recent-post-block md:mt-10 mt-6">
      <div className="recent-post-heading heading7">Noticias Recentes</div>
      <div className="list-recent-post flex flex-col gap-6 mt-4">
        {lastNews.map((item) => (
          <Link
            key={item.id}
            href={'/noticias/[slug]'}
            as={'/noticias/' + String(item.uid)}
            className="recent-post-item flex items-start gap-4 cursor-pointer"
          >
            <div className="item-img flex-shrink-0 w-20 h-20 rounded">
              <Image
                width={5000}
                height={5000}
                src={String(item.data.cover.url)}
                alt={String(item.data.title)}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="item-infor w-full">
              <div className="item-date flex items-center">
                <LucideClock size={16} />
                <span className="ml-1 caption2">
                  {new Date(item.first_publication_date).toLocaleDateString()}
                </span>
              </div>
              <div className="font-bold mt-1">{item.data.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

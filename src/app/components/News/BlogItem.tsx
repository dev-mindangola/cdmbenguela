import { LucideClock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { NewsDocument } from '../../../../prismicio-types'

interface BlogProps {
  news: NewsDocument
  type: string
}

const BlogItem: React.FC<BlogProps> = ({ news, type }) => {
  return (
    <>
      {type === 'list-one' && (
        <Link
          className="blog-item flex max-md:flex-col md:items-center gap-7 gap-y-5"
          href={'/noticias/[slug]'}
          as={'/noticias/' + String(news.uid)}
        >
          <div className="w-full md:w-1/2">
            <div className="h-60 w-full overflow-hidden rounded-2xl">
              <Image
                width={5000}
                height={5000}
                className="object-cover h-full block"
                src={String(news.data.cover.url)}
                alt={String(news.data.title)}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="bg-gray-200 py-1 px-3 text-muted-foreground  text-xs rounded-full inline-block capitalize">
              {news.data.categoria}
            </div>
            <h3 className="text-xl font-bold hover:text-primary mt-2 line-clamp-2">
              {news.data.title}
            </h3>
            <div className="date flex items-center gap-4 mt-2">
              {/* <div className="text-muted-foreground">
                por <span className="text-on-surface">{news.data.author} </span>
              </div> */}
              <div className="item-date flex items-center">
                <LucideClock size={16} />
                <span className="ml-1 caption2">
                  {new Date(news.first_publication_date).toLocaleDateString()}
                </span>
              </div>
            </div>
            <div className="text-muted-foreground mt-4 line-clamp-2">
              {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
              {/* @ts-ignore */}
              {news.data.content[0]?.text}
            </div>
            <div className="read font-bold underline mt-4 text-primary">
              Saiba mais
            </div>
          </div>
        </Link>
      )}
    </>
  )
}
export default BlogItem

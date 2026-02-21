import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { NewsDocument } from '../../../../prismicio-types'
import BlogItem from './BlogItem'
import { LastNews } from './LastNews'

type Meta = {
  page: number
  results_per_page: number
  results_size: number
  total_results_size: number
  total_pages: number
  next_page: string | null
  prev_page: string | null
}

interface LayoutListTwoProps {
  news: NewsDocument[]
  meta: Meta
}

const LayoutListTwo = ({ news, meta }: LayoutListTwoProps) => {
  const paginationItens = Array.from({ length: meta.total_pages })

  return (
    <div className="list-blog lg:py-[100px] sm:py-16 py-10">
      <div className="container">
        <div className="flex max-lg:flex-col gap-y-10">
          <div className="w-full lg:w-2/3">
            <div className="list flex flex-col gap-y-10">
              {news.map((item) =>
                !item.uid ? (
                  <div key={item.id} className="no-data-blog">
                    No blogs match the selected criteria.
                  </div>
                ) : (
                  <BlogItem key={item.id} news={item} type="list-one" />
                ),
              )}
            </div>
            {2 > 1 && (
              <div className="list-pagination w-full flex items-center md:mt-10 mt-6">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem
                      disabled={meta.page === 1}
                      className="disabled:cursor-not-allowed"
                    >
                      <PaginationPrevious
                        href={String(
                          meta?.prev_page
                            ? meta?.prev_page
                            : '?page=' + meta.page,
                        )}
                      />
                    </PaginationItem>

                    {paginationItens.map((value, index) => {
                      return (
                        <PaginationItem key={index}>
                          <PaginationLink
                            isActive={meta.page === index + 1}
                            href={`?page=${index + 1}`}
                          >
                            {index + 1}
                          </PaginationLink>
                        </PaginationItem>
                      )
                    })}

                    {meta.total_pages > 6 && (
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                    )}
                    <PaginationItem
                      disabled={meta.total_pages === meta.page}
                      className="disabled:cursor-not-allowed"
                    >
                      <PaginationNext
                        href={String(
                          meta?.next_page
                            ? meta.next_page
                            : '?page=' + meta.page,
                        )}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </div>
          <div className="w-full lg:w-1/3 lg:pl-[55px]">
            <LastNews />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LayoutListTwo

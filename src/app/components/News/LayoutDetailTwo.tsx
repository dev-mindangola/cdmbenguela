'use client'

import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'
import Image from 'next/image'
import React from 'react'
import { NewsDocument } from '../../../../prismicio-types'

interface Props {
  data: NewsDocument
}

const components: JSXMapSerializer = {
  list: ({ children }) => (
    <ul className="list-disc pl-8 space-y-4 text-muted-foreground">
      {children}
    </ul>
  ),
  listItem: ({ children }) => <li>{children}</li>,
  hyperlink: ({ children }) => (
    <a className="underline text-primary">{children}</a>
  ),
  paragraph: ({ children }) => (
    <p className="leading-normal text-sm sm:text-base">{children}</p>
  ),
}

const LayoutDetailTwo: React.FC<Props> = ({ data }) => {
  return (
    <div className="lg:py-[100px] sm:py-16 py-10">
      <div className="max-w-6xl px-5 sm:px-8 xl:px-0 mx-auto w-full">
        <div className="flex items-center justify-center">
          <div className="w-full lg:w-2/3">
            <div className="blog-paragraph">
              <div className="paragraph-heading">
                <div className="bg-img">
                  <Image
                    width={4000}
                    height={4000}
                    className="w-full rounded-2xl"
                    src={
                      String(data?.data.cover.url) || '/images/blog/930x593.png'
                    }
                    alt="img"
                  />
                </div>
              </div>
              <div className="paragraph-content mt-8 space-y-4">
                <PrismicRichText
                  field={data.data.content}
                  components={components}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LayoutDetailTwo

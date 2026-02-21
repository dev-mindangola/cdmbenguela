'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { TestemonialsDocumentDataTestemonialItem } from '../../../../../prismicio-types'

interface TestemonialCardProps {
  testemonial: TestemonialsDocumentDataTestemonialItem
}

export function TestemonialCard({ testemonial }: TestemonialCardProps) {
  return (
    <div
      className={clsx(
        'w-full max-w-[982px] gap-8 sm:gap-16 py-8 sm:py-10 group bg-white border sm:border-0 shadow-lg rounded-2xl px-8  md:px-14 lg:px-24 flex flex-col md:flex-row items-center justify-center',
      )}
    >
      <div>
        <Image src="/icons/virgula.svg" alt="virgulas" width={55} height={54} />
        <div className="w-[286px] hidden  md:block -mb-16 overflow-hidden h-[404px] rounded-full">
          <Image
            src={String(testemonial.avatar.url)}
            alt="Icon"
            className="w-full object-cover h-full"
            width={1100}
            height={1100}
          />
        </div>
      </div>

      <div>
        <h4 className={clsx('font-bold text-lg sm:text-xl lg:text-3xl mb-4')}>
          Nosso(a) aluno(a) {String(testemonial.name).split(' ')[0]}
        </h4>
        <p
          className={clsx(
            'line-clamp-5  sm:text-lg lg:text-xl text-muted mb-10',
          )}
        >
          {testemonial.description}
        </p>

        <div>
          <div className="flex mb-2 ">
            {[1, 2, 3, 4, 5].map((value) => {
              return (
                <Image
                  key={value}
                  src="/icons/star.svg"
                  alt="star icon"
                  width={23}
                  height={20}
                />
              )
            })}
          </div>
          <h4 className={clsx('font-bold text-lg md:text-2xl')}>
            {testemonial.name}
          </h4>
          <p className="text-sm sm:text-base text-muted">
            {' '}
            {testemonial.role}{' '}
          </p>
        </div>
      </div>
    </div>
  )
}

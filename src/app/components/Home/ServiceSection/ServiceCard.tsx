'use client'

import { Button } from '@/components/ui/button'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { ServicesDocument } from '../../../../../prismicio-types'

interface ServiceCardProps {
  service: ServicesDocument
  active?: boolean
}

export function ServiceCards({ service, active }: ServiceCardProps) {
  return (
    <div
      className={clsx(
        'w-full gap-4 group hover:bg-primary shadow-lg rounded-lg p-8 flex flex-col items-center justify-center',
        {
          'bg-primary': active,
        },
      )}
    >
      <div>
        <Image
          src={String(service.data.image.url)}
          alt={String(service.data.image.alt)}
          className="fill-white"
          width={80}
          height={80}
        />
      </div>

      <h4
        className={clsx(
          'font-bold text-xl text-center group-hover:text-white',
          {
            'text-white': active,
          },
        )}
      >
        {service.data.name}
      </h4>
      <p
        className={clsx(
          'line-clamp-3 text-center text-sm md:text-base text-muted group-hover:text-white',
          {
            'text-white': active,
          },
        )}
      >
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        {service.data.description[0].text}
      </p>

      <Button
        asChild
        variant="ghost"
        className="text-base bg-transparent hover:bg-transparent text-primary underline group-hover:text-white"
      >
        <Link href={`servicos/others/${service.uid}`}>Saber mais</Link>
      </Button>
    </div>
  )
}

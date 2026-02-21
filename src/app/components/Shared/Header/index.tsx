'use client'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  LucideFacebook,
  LucideInstagram,
  LucideYoutube,
  MenuIcon,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Header {
  title: string
  subTitle?: string
  image?: string | null
}

export function Header({ title }: Header) {
  const pathname = usePathname()

  const links = [
    { href: '/', name: 'Home' },
    { href: '/sobre', name: 'Sobre' },
    {
      href: '/servicos',
      name: 'Serviços',
    },
    { href: '/secretaria', name: 'Secretaria' },
    { href: '/galeria', name: 'Galeria' },
    { href: '/noticias', name: 'Notícias' },
    { href: '/contactos', name: 'Contactos' },
  ]

  return (
    <div
      className={`h-[375px] overflow-hidden flex flex-col bg-cover relative`}
    >
      <div className="w-full h-full bg-primary/20 absolute z-10"></div>
      <div className="w-full h-full absolute z-0">
        <Image
          src={'/bg.jpg'}
          width={2200}
          height={2200}
          alt="cover image"
          className="w-full object-cover h-full"
        />
      </div>
      <header className="w-full py-4 z-30 sticky">
        <div className="max-w-6xl px-8 xl:px-0 mx-auto flex items-center justify-between">
          <div className="w-20">
            <img src="/logo.png" alt="logo" />
          </div>

          <nav className=" items-center hidden lg:flex">
            <ul className="flex gap-8">
              {links.map((link) => {
                return (
                  <>
                    <li
                      key={link.href}
                      className={`text-base ${pathname.includes(link.href) ? 'text-[#3366cc]' : 'text-white'} font-bold hover:text-primary`}
                    >
                      <Link href={link.href}>{link.name}</Link>
                    </li>
                  </>
                )
              })}
            </ul>

            <div className="ml-8 flex gap-2">
              <div className="w-8 h-8 rounded-full bg-white">
                <Link
                  href="https://www.facebook.com/cdm.benguela/"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white"
                  target="_blank"
                >
                  <LucideFacebook size={16} />
                </Link>
              </div>
              <div className="w-8 h-8 rounded-full bg-white">
                <Link
                  href="https://www.instagram.com/cdmbenguela/"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white"
                  target="_blank"
                >
                  <LucideInstagram size={16} />
                </Link>
              </div>
              <div className="w-8 h-8 rounded-full bg-white">
                <Link
                  href="https://www.youtube.com/@casadamusicadebenguelacdm7791"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white"
                  target="_blank"
                >
                  <LucideYoutube size={16} />
                </Link>
              </div>
            </div>
          </nav>

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger className="w-10 h-10 bg-white hover:bg-gray-200/90 flex items-center justify-center rounded-md">
                <MenuIcon className="text-primary" />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="mt-10">
                  <ul className="flex flex-col gap-4 text-gray-700">
                    {links.map((link) => {
                      return (
                        <>
                          <li key={link.href} className="hover:text-primary">
                            <Link href={link.href}>{link.name}</Link>
                          </li>
                        </>
                      )
                    })}
                  </ul>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <div className="w-full flex-1 z-20">
        <div className="max-w-6xl px-5 sm:px-8 xl:px-0 mx-auto h-full flex items-center">
          <div className="max-w-[565px] mx-auto w-full items-center flex flex-col">
            <h2 className="text-4xl md:text-[54px] text-white font-bold text-center  leading-snug mb-4">
              {title}
            </h2>
            {/*             <p className="text-white max-w-[449px] text-center">{subTitle}</p>
             */}{' '}
          </div>
        </div>
      </div>
    </div>
  )
}

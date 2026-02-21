'use client'

import { Button } from '@/components/ui/button'
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
  LucideMusic,
  LucideYoutube,
  MenuIcon,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()

  const links = [
    { href: '/', name: 'Home' },
    { href: '/sobre', name: 'Sobre' },
    { href: '/servicos', name: 'Serviços' },
    { href: '/secretaria', name: 'Secretaria' },
    { href: '/galeria', name: 'Galeria' },
    { href: '/noticias', name: 'Notícias' },
    { href: '/contactos', name: 'Contactos' },
  ]

  return (
    <div className='bg-[url("/bg.jpg")] h-[550px] md:h-[675px] flex flex-col bg-cover relative'>
      <div className="w-full h-full bg-primary/20 absolute z-0"></div>
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
                >
                  <LucideFacebook size={16} />
                </Link>
              </div>
              <div className="w-8 h-8 rounded-full bg-white">
                <Link
                  href="https://www.instagram.com/cdmbenguela/"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white"
                >
                  <LucideInstagram size={16} />
                </Link>
              </div>
              <div className="w-8 h-8 rounded-full bg-white">
                <Link
                  href="https://www.youtube.com/@casadamusicadebenguelacdm7791"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white"
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
        <div className="max-w-6xl px-8 xl:px-0 mx-auto h-full flex items-center">
          <div className="max-w-[635px] w-full flex flex-col">
            <h3 className="text-white mb-5 leading-tight md:text-xl">
              <LucideMusic size={24} className="inline-block md:w-10 mr-2" />{' '}
              BEM-VINDO À
            </h3>
            <h1 className="text-4xl md:text-6xl text-white font-bold leading-snug mb-4">
              CASA DA MÚSICA <br />
              DE BENGUELA
            </h1>
            <p className="text-white text-xl max-w-[449px]">
              Compromisso com o talento e a arte.
            </p>
            {/* <p className="text-white max-w-[449px]">
              A Casa da Música de Benguela é uma instituição de ensino de música
              que oferece cursos de canto, piano, violino, guitarra, baixo,
              bateria, percussão, flauta, saxofone, produção musical,
              sonoplastia e violão.
            </p> */}

            <div className="flex gap-10 mt-8">
              <Link href="/contactos">
                <Button className="h-12">COMEÇAR HOJE</Button>
              </Link>
            </div>
          </div>

          <div className="z-20 flex-1">
            {/*  <DotLottieReact
              src="/soud-wave-animation.json"
              width={600}
              height={400}
              color="#fff"
              loop
              autoplay
            /> */}

            {/* <button>
              <LucideAudioLines />
              <LucideAudioWaveform />
            </button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

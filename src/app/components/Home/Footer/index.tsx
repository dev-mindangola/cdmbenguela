'use client'

import { LucideFacebook, LucideInstagram, LucideYoutube } from 'lucide-react'
import Link from 'next/link'
import Script from 'next/script'
import { useEffect } from 'react'

/* eslint-disable @next/next/no-img-element */
export function Footer() {
  const links = [
    { href: '/', name: 'Home' },
    { href: '/sobre', name: 'Sobre' },
    { href: '/servicos', name: 'Serviços' },
    { href: '/didatica', name: 'Didática' },
    { href: '/secretaria', name: 'Secretaria' },
    { href: '/galeria', name: 'Galeria' },
    { href: '/contactos', name: 'Contactos' },
  ]

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    /* @ts-ignore */
    window.gtranslateSettings = {
      default_language: 'pt',
      detect_browser_language: true,
      languages: ['pt', 'fr', 'it', 'es', 'de', 'en'],
      wrapper_selector: '.gtranslate_wrapper',
      switcher_horizontal_position: 'right',
      float_switcher_open_direction: 'bottom',
    }
  }, [])

  return (
    <footer className="bg-[#000] py-20 -z-[1]">
      <div className="mx-auto w-full max-w-[1170px] px-8 xl:px-0 py-6 lg:py-8">
        <div className="md:flex">
          <div className="mb-6 md:mb-0 md:mr-40 flex-none">
            <Link href="/" className="flex items-center mb-8">
              <div className="w-24">
                <img src="/logo_white.png" alt="logo" />
              </div>
            </Link>
            <p className="text-white text-base max-w-[350px]">
              Mergulhe nas batidas e ritmos que definem a boa música, guiados
              por profissionais experientes.
            </p>

            <div className="flex mt-16 gap-4">
              <Link
                href="https://www.youtube.com/@casadamusicadebenguelacdm7791"
                target="_blank"
              >
                <LucideYoutube color="#fff" />
              </Link>
              <Link
                href="https://www.facebook.com/cdm.benguela/"
                target="_blank"
              >
                <LucideFacebook color="#fff" />
              </Link>
              <Link
                href="https://www.instagram.com/cdmbenguela/"
                target="_blank"
              >
                <LucideInstagram color="#fff" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-8 sm:gap-24 sm:flex-row">
            <div className="flex-col flex">
              <h4 className="font-bold text-white text-2xl mb-8">Menu</h4>
              {links.map((link) => {
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-white mb-4 hover:underline"
                  >
                    {link.name}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
        <div className="flex-col flex mt-8">
          <h4 className="font-bold text-white text-2xl mb-8">Play Lists</h4>

          <div>
            <div className="md:flex gap-4 space-y-4 md:space-y-0 items-center text-white">
              <div>
                <p>Afro lazaro - projeto</p>
                <audio controls>
                  <source src="/AFRO LAZARO - Projeto.mp3" />
                </audio>
              </div>

              <div>
                <p>Deus Santo - Ir Solange Oficial V 14</p>
                <audio controls>
                  <source src="/Deus Santo - Ir Solange Oficial V 14.mp3" />
                </audio>
              </div>

              <div className="hidden lg:block">
                <p>Omunga - Casa da Música de Benguela 4</p>
                <audio controls>
                  <source src="/Omunga - Casa da Musica de Benguela 4.mp3" />
                </audio>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-2 py-4 flex items-center justify-center mt-8">
          <p className="text-white">Feito com apoio da União Europeia</p>
        </div>
      </div>

      <div className="gtranslate_wrapper" />

      <Script src="https://cdn.gtranslate.net/widgets/latest/float.js" />
    </footer>
  )
}

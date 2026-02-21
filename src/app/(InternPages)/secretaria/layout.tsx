import { Partners } from '@/app/components/Home/Partners'
import { NavBar } from '@/app/components/Secretaria/navbar'
import { Header } from '@/app/components/Shared/Header'
import React from 'react'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Header
        title="Sobre"
        subTitle="Este site está em desenvolvimento pela Mind Creative."
      />
      <main className="w-full">
        <div className="max-w-6xl px-5 sm:px-8 xl:px-0 mx-auto md:flex py-20 md:py-28 gap-16">
          <div className="flex-none mb-16 md:mb-0">
            <NavBar />
          </div>

          <div className="w-full">{children}</div>
        </div>
        <Partners />
      </main>
    </div>
  )
}

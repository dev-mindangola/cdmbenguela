import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Footer } from './components/Home/Footer'
import './globals.css'

const archivo = localFont({
  src: './fonts/Archivo-VariableFont_wdth,wght.ttf',
  variable: '--font-archivo',
  weight: '400 500 600 700',
})

export const metadata: Metadata = {
  title: 'Casa da música de benguela',
  description: 'Site em desenvolvimento pela Mind Creative',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={`${archivo.variable} antialiased`}>
        {children}

        <Footer />
      </body>
    </html>
  )
}

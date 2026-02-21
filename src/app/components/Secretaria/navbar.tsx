'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function NavBar() {
  const pathname = usePathname()

  const links = [
    { href: '/secretaria/inscricoes', name: 'Inscrições' },
    { href: '/secretaria/horarios', name: 'Horários de abertura' },
    { href: '/secretaria/calendario', name: 'Calendário' },
  ]

  return (
    <aside>
      <nav className="bg-[#DEE5EF] flex-none">
        <ul className="md:max-w-60 w-full">
          {links.map((link) => {
            return (
              <Link
                key={link.href}
                className="h-full  w-full hover:text-white"
                href={link.href}
              >
                <li
                  className={`${pathname === link.href && 'bg-primary text-white'} w-full py-4 px-4 group border-b-2 hover:bg-primary border-white`}
                >
                  {link.name}
                </li>
              </Link>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}

import Link from 'next/link'

import React from 'react'

export default function Header() {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Posts', href: '/posts' }
  ]
  return (
    <header className="w-full h-6 p-6 mb-10 sticky top-0 flex items-center justify-center bg-transparent">
      <nav className="flex space-x-4">
        {links.map(link => (
          <Link key={link.name} href={link.href}>
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  )
}

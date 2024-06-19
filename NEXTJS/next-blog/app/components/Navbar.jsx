import React from 'react'
import Link from 'next/link'
import Logo from './dojo-logo.png'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav>

    <Image
    src={Logo}
    alt='logo'
     />
    <Link href="/">Dashboard</Link>
    <Link href="/tickets">tickets</Link>
  </nav>
  )
}

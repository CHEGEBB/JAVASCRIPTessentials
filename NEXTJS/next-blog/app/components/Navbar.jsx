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
    width={70}
    quality={100}
    placeholder='blur'
     />
    <Link href="/">Dashboard</Link>
    <Link href="/tickets">tickets</Link>
  </nav>
  )
}

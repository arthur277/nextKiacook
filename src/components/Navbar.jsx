"use client";
import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import styles2 from './navbarheader.module.css'
import { usePathname } from 'next/navigation'
function Navbar() {
  const pathname = usePathname()
  return (
    <nav className={styles.frontcss2}>
      <ul className={styles2.menuList}>
        <li> <Link className='position'href="/home">Acceuil</Link></li>
        <li><Link className='position'href="/quisommenous">Qui sommes-nous?</Link></li>
        <li><Link className='position'href="/guideducookeur">Guide du cookeur</Link></li>
        <li><Link className='position'href="/faq">Faq</Link></li>
        <li><Link className='position'href="/blog">Blog</Link></li>
        <li><Link className='position'  href="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
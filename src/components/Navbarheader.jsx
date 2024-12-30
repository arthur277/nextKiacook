"use client";
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './navbarheader.module.css'

function Navbarheader() {
    const pathname = usePathname()
  return (
    <section className='container'>
      <nav className={styles.frontcss1}>
        <ul>
          <li><Link className='position'href="/devenirCooker">Devenir cooker</Link></li>
          <li><Link className='position'href="/trouvercooker">Trouver cooker</Link></li>
        </ul>
        <Link className='positionG'href="/moncompte">Mon compte</Link>
      </nav>
    </section>

  )
}

export default Navbarheader
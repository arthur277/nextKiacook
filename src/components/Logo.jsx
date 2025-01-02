import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logokiacook from '../Assets/logokiacook.png'
import styles from './logo.module.css'

function Logo() {
  return (
    <div className={styles.logo}>
        <div className='row'>
        <div className='col-md-12 text-center'>
           {/* <Link><img src="../Assets/logokiacook.png" alt="" /></Link> */}
           {/* <a href=""><Image src={logokiacook} alt="Picture of Kiacook" /></a> */}
           <Link href="/home"><Image src={logokiacook} alt="Picture of Kiacook" /></Link>
        </div>
        </div>
    </div>
  )
}

export default Logo
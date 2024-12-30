import React from 'react'
import Image from 'next/image'
import logoHome from '../../assets/pexels-photo-6937448.jpeg'
import logoHome2 from '../../assets/pexels-rachel-claire-6126975.jpg'
import styles from './home.module.css'

function page() {
  return (
    <div className='container'>
      <div className={styles.homeimage}>
      <Image  src={logoHome}  alt="logo" />
      <h1 className={styles.homeimage}>Kiacook, LA PLATEFORME DES CHEFS AFRO</h1>
      </div>
      <div className= "row">
        <div className='col-md-6'>
        <Image  src={logoHome2}  alt="logo" />
        <h1 className="">Kiacook, LA PLATEFORME DES CHEFS AFRO</h1>
        </div>
        <div className='col-md-6'>
        <Image  src={logoHome2}  alt="logo" />
        <h1 className="">Kiacook, LA PLATEFORME DES CHEFS AFRO</h1>
        </div>
      </div>
    </div>
    
    
  )
}

export default page
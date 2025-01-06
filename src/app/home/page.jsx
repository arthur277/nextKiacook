import React from 'react';
import Image from 'next/image';
import logoHome from '../../assets/pexels-photo-6937448.jpeg';
import logoHome2 from '../../assets/pexels-rachel-claire-6126975.jpg';
import logoHome3 from '../../assets/pexels-august.jpg';
import styles from './home.module.css';

function page() {
  return (
    <div className={styles.container}>
      <div className={styles.homeimage}>
        <Image src={logoHome} alt="logo" />
        <h1 className={styles.homeimage}>Kiacook, LA PLATEFORME DES CHEFS AFRO</h1>
      </div>
      <div className="row">
         <div className={styles.container2}>
            <ul>
              <li className="col-md-6">
                <div className={styles.milieucontenu}>
                  <Image className={styles.logoImage} src={logoHome2} alt="logo" />
                  <div className={styles.endroit}>
                    <h2>Chef afro</h2>
                    <p>Faites découvrir la cuisine africaine à coté de chez vous.</p>
                    <a className={styles.suivre} href=''>EN SAVOIR PLUS</a>
                  </div>
                </div>
              </li>
              <li className="col-md-6">
                <div className={styles.milieucontenu}>
                  <Image className={styles.logoImage} src={logoHome3} alt="logo" />
                  <div className={styles.endroit}>
                    <h2>Business</h2>
                    <p>Developpez une nouvelle clientèle et diversifiez vos sources de revenus.</p>
                    <a className={styles.suivre} href=''>EN SAVOIR PLUS</a>
                    </div>
                </div>
              </li>
            </ul>
            
          </div>
        </div>
      </div>
  );
}

export default page;

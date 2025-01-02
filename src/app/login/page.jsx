 'use client';
import styles2 from "../../app/devenirCooker/devenircooker.module.css"
import styles from "./login.module.css"
import Link from 'next/link'

function page() {
 

    return(
    <div>
      <p className={styles.moncompte}>créer un compte <Link className='position'href="/devenirCooker">ici</Link></p>
      <form className={styles2.cadre}>
        <h1 >Connectez-vous</h1>
          <div className={styles.group}>
            <label className={styles2.label}  htmlFor="email">Email</label>
            <input className={styles2.input}
              type="email"
              id="email"
            />
          </div>
          <div className={styles2.group}>
            <label className={styles2.label}  htmlFor="password">Mot de passe</label>
            <input className={styles2.input}
              type="password"
              id="password"
            />
          </div>
          <button className={styles2.soumettre} type="submit">S'inscrire</button>
      </form>

    </div>
    )
  }



export default page
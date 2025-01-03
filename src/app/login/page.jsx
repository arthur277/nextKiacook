'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';  

import styles2 from "../../app/devenirCooker/devenircooker.module.css"
import styles from "./login.module.css"
import Link from 'next/link'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      router.push(`/moncompte?email=${email}`);
    } else {
      alert('Échec de la connexion');
    }
  };

  return (
    <div>
      <p className={styles.moncompte}>créer un compte <Link className='position'href="/devenirCooker">ici</Link></p>
      <form className={styles2.cadre} onSubmit={handleSubmit}>
        <div className={styles.group}>
        <label className={styles2.label}  htmlFor="email">Email</label>
        <input className={styles2.input}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        </div>
        <div className={styles2.group}>
        <label className={styles2.label}  htmlFor="password">Mot de passe</label>
        <input className={styles2.input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mot de passe"
          required
        />
        </div>
        <button className={styles2.soumettre} type="submit">Se connecter</button>
      </form>
    </div>
  );
}

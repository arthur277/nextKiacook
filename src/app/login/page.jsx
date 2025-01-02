
"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';  

import styles2 from "../../app/devenirCooker/devenircooker.module.css"
import styles from "./login.module.css"
import Link from 'next/link'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.status === 200) {
  
        localStorage.setItem('token', data.token);
        router.push('/devenirCooker');  
      } else {
        setError(data.error || 'Une erreur s\'est produite');
      }
    } catch (err) {
      setError('Erreur lors de la connexion');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <p className={styles.moncompte}>créer un compte <Link className='position'href="/devenirCooker">ici</Link></p>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form className={styles2.cadre} onSubmit={handleSubmit}>
          <div className={styles.group}>
            <label className={styles2.label}  htmlFor="email">Email</label>
            <input className={styles2.input}
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        <div className={styles2.group}>
            <label className={styles2.label}  htmlFor="password">Mot de passe</label>
            <input className={styles2.input}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className={styles2.soumettre} type="submit" disabled={loading}>
          {loading ? 'Chargement...' : 'Se connecter'}
        </button>
      </form>
    </div>
  );
}

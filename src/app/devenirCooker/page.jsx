
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './devenircooker.module.css'

function FormPage() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [specialite, setSpecialite] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/saveUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nom, prenom,specialite, email, password }),
    });

    if (response.ok) {
      router.push(`/moncompte?email=${email}`);
    } else {
      alert('Erreur lors de l\'inscription');
    }
  };

  return (
    <div className={styles.cadre}>
      <h1>Formulaire d'inscription</h1>
      <h4>devenez un des nôtres</h4>
      <form onSubmit={handleSubmit}>
        <div className={styles.group}>
          <label  className={styles.label} htmlFor="nom">Nom</label>
          <input className={styles.input}
            type="text"
            id="nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
        </div>
        <div className={styles.group}>
          <label  className={styles.label} htmlFor="prenom">Prénom</label>
          <input className={styles.input}
            type="text"
            id="prenom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
          />
        </div>
        <div className={styles.group}>
          <label className={styles.label}  htmlFor="specialite">Spécialité</label>
          <input className={styles.input}
            type="text"
            id="specialite"
            value={specialite}
            onChange={(e) => setSpecialite(e.target.value)}
          />
        </div>
        <div className={styles.group}>
          <label className={styles.label}  htmlFor="email">Email</label>
          <input className={styles.input}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.group}>
          <label className={styles.label}  htmlFor="password">Mot de passe</label>
          <input className={styles.input}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className={styles.soumettre} type="submit">S'inscrire</button>
      </form>
    </div>
  );
}

export default FormPage;

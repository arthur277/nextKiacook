'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../devenirCooker/devenircooker.module.css'

function contact() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/contactSave', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nom, prenom,email,message }),
    });

    if (response.ok) {
      router.push(`/contact/result`);
    } else {
      alert('Erreur lors de l\'inscription');
    }
  };

  return (
    <div className={styles.cadre}>
      <h1>Contactez nous !</h1>
      <h4>decouvrez une experience sans pareil</h4>
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
          <label className={styles.label}  htmlFor="email">Email</label>
          <input className={styles.input}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.group}>
          <label  className={styles.label} htmlFor="message">Demande</label>
          <textarea  className={styles.input}
            type="text"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}></textarea>
        </div>
        <button className={styles.soumettre} type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default contact

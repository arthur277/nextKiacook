
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

function FormPage() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Envoi des données à l'API pour les enregistrer dans MySQL
    const response = await fetch('/api/saveUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nom, prenom, email, password }),
    });

    if (response.ok) {
      // Redirection vers la page de résultats avec l'email comme paramètre
      router.push(`/moncompte?email=${email}`);
    } else {
      alert('Erreur lors de l\'inscription');
    }
  };

  return (
    <div>
      <h1>Formulaire d'inscription</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nom">Nom</label>
          <input
            type="text"
            id="nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="prenom">Prénom</label>
          <input
            type="text"
            id="prenom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Soumettre</button>
      </form>
    </div>
  );
}

export default FormPage;

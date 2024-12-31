"use client"
import { useEffect, useState } from 'react';

function page() {
  const [fields, setFields] = useState([]);

  useEffect(() => {
    async function fetchFields() {
      try {
        const response = await fetch('/api/getAllUser');
        if (!response.ok) {
          throw new Error('Erreur réseau');
        }
        const data = await response.json();
        setFields(data);
      } catch (error) {
        console.error('Erreur:', error);
      }
    }
    fetchFields();
  }, []);

  return (
    <div>
      <h1>Champs de la table users</h1>
      <ul>
        {fields.map((field, index) => (
          <li key={index}>{field}</li>
        ))}
      </ul>
    </div>
  );
}

export default page;

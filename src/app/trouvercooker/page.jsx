import { use } from 'react';

async function getUsers() {
  const res = await fetch('http://localhost:3000/api/getAllUser', { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default function Users() {
  const users = use(getUsers());

  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.prenom} {user.nom} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

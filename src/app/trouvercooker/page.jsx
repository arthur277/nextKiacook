"use client"
import { use, useState } from 'react';
import styles from './trouvercooker.module.css'

async function getUsers() {
  const res = await fetch('http://localhost:3000/api/getAllUser', { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default function Users() {
  const users = use(getUsers());
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(users.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1 className={styles.titre}>Liste des cookers</h1>
      <table className={styles.tableau}>
        <thead>
          <tr>
            <th scope="col">Numéro</th>
            <th scope="col">Nom</th>
            <th scope="col">Specialité</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.nom}</td>
              <td>{user.specialite}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i} onClick={() => paginate(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

"use client"
import { useEffect, useState } from 'react';
import styles from './trouvercooker.module.css'
import Link from 'next/link';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  
  async function getUsers() {
    const res = await fetch('http://localhost:3000/api/getAllUser', { cache: 'no-store' });
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await res.json();
    setUsers(data?.slice(indexOfFirstItem, indexOfLastItem));
  }

  useEffect(() => {
    getUsers();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
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
            <th scope="col">Contact</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.nom}</td>
              <td>{user.specialite}</td>
              <td><Link className=''href="/contact">Contact</Link></td>
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

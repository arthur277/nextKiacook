'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
function page() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (email) {
      const fetchUserData = async () => {
        const response = await fetch(`/api/getUser?email=${email}`);
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          alert('Utilisateur non trouvé');
        }
      };

      fetchUserData();
    }
  }, [email]);

  if (!userData) {

    return(
    <div>
      <p>Connectez vous ou créer un compte</p>
    </div>
    )
  }

  return (
    <div>
      <h1>Bienvenue, {userData.nom} {userData.prenom}!</h1>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default page
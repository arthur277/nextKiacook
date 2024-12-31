// 'use client';
// import { useSearchParams } from 'next/navigation';

// function Page() {
//   const searchParams = useSearchParams(); // Utilisation du hook pour accéder aux query parameters
  
//   const nom = searchParams.get('nom');
//   const prenom = searchParams.get('prenom');
//   const email = searchParams.get('email');

//   return (
//     <div>
//       <h1>Bienvenue, {nom} {prenom}!</h1>
//       <p>Email: {email}</p>
//     </div>
//   );
// }

// export default Page;

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
    return <p>Chargement des données...</p>;
  }

  return (
    <div>
      <h1>Bienvenue, {userData.nom} {userData.prenom}!</h1>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default page;



'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import styles from "./moncompte.module.css"
import Link from 'next/link'
import Image from 'next/image';
import logomoncompte from '../../Assets/chef.png'
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
      <p className={styles.moncompte}>Connectez vous <Link className='position'href="/login">ici</Link> ou créer un compte <Link className='position'href="/devenirCooker">ici</Link></p>
      <Image className={styles.image} src={logomoncompte} alt="Picture of Kiacook" />
    </div>
    )
  }

  return (
    <div>
      <h1 className={styles.moncompte}>Bienvenue, {userData.nom} {userData.prenom}!</h1>
      <p>Nous sommes heureux de vous compter parmi nous <br /> De belles aventures vous attendent</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, mollitia, odio distinctio debitis quos labore a in laborum praesentium provident reprehenderit impedit reiciendis aliquid autem nesciunt, modi natus vitae beatae!</p>
    </div>
  );
}

export default page
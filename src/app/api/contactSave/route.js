import connection from '../../../lib/db';

export async function POST(req) {
  const { nom, prenom, email,message } = await req.json();

  if (!nom || !prenom|| !email || !message) {
    return new Response('Données manquantes', { status: 400 });
  }

  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO userscontact (nom, prenom, email, message) VALUES (?, ?, ?,?)';
    connection.execute(query, [nom, prenom, email,message], (err, result) => {
      if (err) {
        console.error(err);
        reject(new Response('Erreur du serveur', { status: 500 }));
      } else {
        resolve(new Response(JSON.stringify({ message: 'Utilisateur enregistré', id: result.insertId }), { status: 200 }));
      }
    });
  });
}

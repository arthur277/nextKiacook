import connection from '../../../lib/db';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get('email');

  if (!email) {
    return new Response('Email requis', { status: 400 });
  }

  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM users WHERE email = ?';
    connection.execute(query, [email], (err, results) => {
      if (err) {
        console.error(err);
        reject(new Response('Erreur du serveur', { status: 500 }));
      } else if (results.length === 0) {
        resolve(new Response('Utilisateur non trouvé', { status: 404 }));
      } else {
        resolve(new Response(JSON.stringify(results[0]), { status: 200 }));
      }
    });
  });
}

import db from '../../../lib/db'; 

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    db.execute('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'Erreur de base de données' });
      }

      if (results.length === 0) {
        return res.status(401).json({ error: 'Identifiants invalides' });
      }

      const user = results[0];

      if (user.password !== password) {
        return res.status(401).json({ error: 'Identifiants invalides' });
      }

      const token = 'votre_token_ici'; 

      return res.status(200).json({ token });
    });
  } else {
    res.status(405).json({ error: 'Méthode non autorisée' });
  }
}

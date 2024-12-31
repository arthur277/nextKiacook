import connection from '../../../lib/db';

export default function handler(req, res) {
  if (req.method === 'GET') {
    
    connection.query('SELECT * FROM users', (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Database query failed' });
      }

    
      return res.status(200).json(results);
    });
  } else {
   
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

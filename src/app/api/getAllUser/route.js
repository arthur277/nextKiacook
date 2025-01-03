import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function GET() {
  const connection = await mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    password: '', 
    database: 'kiacook', 
  });

  try {
    const [rows] = await connection.execute('SELECT * FROM users');
    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json({ error: 'Erreur lors de la récupération des utilisateurs' }, { status: 500 });
  } finally {
    await connection.end();
  }
}

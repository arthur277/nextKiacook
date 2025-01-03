import { NextResponse } from 'next/server';

export async function POST(request) {
  const { email, password } = await request.json();

  const response = await fetch('http://localhost:3000/api/getAllUser');
  const users = await response.json();

  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    return NextResponse.json({ message: 'Connexion réussie', user });
  } else {
    return NextResponse.json({ message: 'Email ou mot de passe incorrect' }, { status: 401 });
  }
}

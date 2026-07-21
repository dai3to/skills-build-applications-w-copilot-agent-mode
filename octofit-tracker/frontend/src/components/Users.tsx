import { useEffect, useState } from 'react';
import { fetchResourceList } from '../api';

interface User {
  _id?: string;
  name: string;
  email: string;
  role: string;
}

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchResourceList<User>('users').then(setUsers).catch(console.error);
  }, []);

  return (
    <section>
      <h2>Users</h2>
      <p>Displays the registered OctoFit members.</p>
      <ul>
        {users.map((user) => (
          <li key={user._id ?? `${user.email}-${user.name}`}>
            <strong>{user.name}</strong> ({user.email}) — {user.role}
          </li>
        ))}
      </ul>
    </section>
  );
}

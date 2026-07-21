import { useEffect, useState } from 'react';
import { fetchResourceList } from '../api';

interface TeamMember {
  _id?: string;
  name: string;
  email?: string;
}

interface Team {
  _id?: string;
  name: string;
  description?: string;
  members?: TeamMember[];
}

export default function Teams() {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    fetchResourceList<Team>('teams').then(setTeams).catch(console.error);
  }, []);

  return (
    <section>
      <h2>Teams</h2>
      <p>Team pages show group membership and descriptions.</p>
      <ul>
        {teams.map((team) => (
          <li key={team._id ?? team.name}>
            <strong>{team.name}</strong>: {team.description}
            <div>
              Members: {team.members?.map((member) => member.name).join(', ') || 'None'}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

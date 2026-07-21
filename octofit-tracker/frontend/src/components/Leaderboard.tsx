import { useEffect, useState } from 'react';
import { fetchResourceList } from '../api';

interface LeaderboardEntry {
  _id?: string;
  points: number;
  rank: number;
  period: string;
  user?: { name: string };
  team?: { name: string };
}

export default function Leaderboard() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    fetchResourceList<LeaderboardEntry>('leaderboard').then(setEntries).catch(console.error);
  }, []);

  return (
    <section>
      <h2>Leaderboard</h2>
      <p>See top performers for the current leaderboard period.</p>
      <ol>
        {entries.map((entry) => (
          <li key={entry._id ?? `${entry.rank}-${entry.points}`}>
            {entry.rank}. {entry.user?.name ?? 'Unknown'} — {entry.points} points
            {entry.team ? ` (${entry.team.name})` : ''} [{entry.period}]
          </li>
        ))}
      </ol>
    </section>
  );
}

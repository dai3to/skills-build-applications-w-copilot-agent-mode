import { useEffect, useState } from 'react';
import { fetchResourceList } from '../api';

interface Activity {
  _id?: string;
  type: string;
  durationMinutes: number;
  distanceKm?: number;
  calories: number;
  performedAt: string;
  user?: { name: string };
  team?: { name: string };
}

export default function Activities() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    fetchResourceList<Activity>('activities').then(setActivities).catch(console.error);
  }, []);

  return (
    <section>
      <h2>Activities</h2>
      <p>Track recent workouts logged by OctoFit members.</p>
      <ul>
        {activities.map((activity) => (
          <li key={activity._id ?? `${activity.type}-${activity.performedAt}`}>
            <strong>{activity.type}</strong> — {activity.durationMinutes} min
            {activity.distanceKm ? `, ${activity.distanceKm.toFixed(1)} km` : ''}
            , {activity.calories} cal
            <div>
              By {activity.user?.name ?? 'Unknown'} in {activity.team?.name ?? 'No team'}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

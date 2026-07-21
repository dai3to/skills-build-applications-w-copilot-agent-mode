import { useEffect, useState } from 'react';
import { fetchResourceList } from '../api';

interface Workout {
  _id?: string;
  title: string;
  description: string;
  difficulty: string;
  durationMinutes: number;
  focusAreas: string[];
}

export default function Workouts() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  useEffect(() => {
    fetchResourceList<Workout>('workouts').then(setWorkouts).catch(console.error);
  }, []);

  return (
    <section>
      <h2>Workouts</h2>
      <p>Browse recommended OctoFit workout plans and training sessions.</p>
      <ul>
        {workouts.map((workout) => (
          <li key={workout._id ?? workout.title}>
            <strong>{workout.title}</strong> — {workout.durationMinutes} min
            <div>{workout.description}</div>
            <div>Difficulty: {workout.difficulty}</div>
            <div>Focus: {workout.focusAreas.join(', ')}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}

import { Router, Request, Response } from 'express';
import Workout from '../models/workout';

const router = Router();

router.get('/', async (_req: Request, res: Response) => {
  const workouts = await Workout.find().lean();
  res.json(workouts);
});

router.post('/', async (req: Request, res: Response) => {
  const workout = new Workout(req.body);
  await workout.save();
  res.status(201).json(workout);
});

export default router;

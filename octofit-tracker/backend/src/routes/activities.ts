import { Router, Request, Response } from 'express';
import Activity from '../models/activity';

const router = Router();

router.get('/', async (_req: Request, res: Response) => {
  const activities = await Activity.find().populate('user', 'name email').populate('team', 'name').lean();
  res.json(activities);
});

router.post('/', async (req: Request, res: Response) => {
  const activity = new Activity(req.body);
  await activity.save();
  res.status(201).json(activity);
});

export default router;

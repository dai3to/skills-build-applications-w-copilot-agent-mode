import { Router, Request, Response } from 'express';
import Leaderboard from '../models/leaderboard';

const router = Router();

router.get('/', async (_req: Request, res: Response) => {
  const data = await Leaderboard.find().populate('user', 'name email').populate('team', 'name').lean();
  res.json(data);
});

export default router;

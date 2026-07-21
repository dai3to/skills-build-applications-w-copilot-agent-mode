import express from 'express';
import db from './config/database';

const app = express();
const port = Number(process.env.PORT) || 8000;

app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'octofit-backend' });
});

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});

db.once('open', () => {
  console.log('MongoDB connected and backend ready');
});

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

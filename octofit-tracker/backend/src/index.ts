import db from './config/database';
import app, { apiBaseUrl } from './server';

const port = Number(process.env.PORT) || 8000;

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
  console.log(`API base URL: ${apiBaseUrl}`);
});

db.once('open', () => {
  console.log('MongoDB connected and backend ready');
});

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

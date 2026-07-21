import mongoose from 'mongoose';
import User from '../models/user';
import Team from '../models/team';
import Activity from '../models/activity';
import Leaderboard from '../models/leaderboard';
import Workout from '../models/workout';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.insertMany([
      { name: 'Aki Tanaka', email: 'aki.tanaka@example.com', role: 'member' },
      { name: 'Mai Sato', email: 'mai.sato@example.com', role: 'coach' },
      { name: 'Ryo Nakamura', email: 'ryo.nakamura@example.com', role: 'member' },
    ]);

    const teams = await Team.insertMany([
      { name: 'Seaside Sprinters', description: 'Beach run and HIIT team', members: [users[0]._id, users[2]._id] },
      { name: 'Mountain Movers', description: 'Trail running and strength team', members: [users[1]._id] },
    ]);

    const workouts = await Workout.insertMany([
      {
        title: 'Sunrise Cardio Circuit',
        description: 'A fast-paced cardio workout with intervals and bodyweight moves.',
        difficulty: 'beginner',
        durationMinutes: 30,
        focusAreas: ['cardio', 'endurance'],
      },
      {
        title: 'Strength Builder',
        description: 'A full-body strength routine with core and mobility exercises.',
        difficulty: 'intermediate',
        durationMinutes: 45,
        focusAreas: ['strength', 'core'],
      },
      {
        title: 'Recovery Stretch Flow',
        description: 'A gentle mobility session to recover and loosen tight muscles.',
        difficulty: 'beginner',
        durationMinutes: 20,
        focusAreas: ['mobility', 'recovery'],
      },
    ]);

    const activities = await Activity.insertMany([
      {
        user: users[0]._id,
        team: teams[0]._id,
        type: 'Run',
        durationMinutes: 40,
        distanceKm: 8,
        calories: 520,
        performedAt: new Date(Date.now() - 1000 * 60 * 60 * 24),
      },
      {
        user: users[2]._id,
        team: teams[0]._id,
        type: 'HIIT',
        durationMinutes: 25,
        calories: 380,
        performedAt: new Date(Date.now() - 1000 * 60 * 60 * 48),
      },
      {
        user: users[1]._id,
        team: teams[1]._id,
        type: 'Trail Run',
        durationMinutes: 55,
        distanceKm: 10,
        calories: 700,
        performedAt: new Date(Date.now() - 1000 * 60 * 60 * 72),
      },
    ]);

    await Leaderboard.insertMany([
      { user: users[1]._id, team: teams[1]._id, points: 1120, rank: 1, period: 'weekly' },
      { user: users[0]._id, team: teams[0]._id, points: 980, rank: 2, period: 'weekly' },
      { user: users[2]._id, team: teams[0]._id, points: 870, rank: 3, period: 'weekly' },
    ]);

    console.log('Seed the octofit_db database with test data');
    console.log(`Created ${users.length} users, ${teams.length} teams, ${workouts.length} workouts, ${activities.length} activities.`);

    await mongoose.disconnect();
    console.log('Database seeding complete');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();

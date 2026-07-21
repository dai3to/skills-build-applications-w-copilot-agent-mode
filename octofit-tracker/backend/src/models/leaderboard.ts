import { Schema, model, Document, Types } from 'mongoose';

export interface ILeaderboard extends Document {
  user: Types.ObjectId;
  team?: Types.ObjectId;
  points: number;
  rank: number;
  period: 'weekly' | 'monthly' | 'all-time';
  updatedAt: Date;
}

const leaderboardSchema = new Schema<ILeaderboard>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  team: { type: Schema.Types.ObjectId, ref: 'Team' },
  points: { type: Number, required: true },
  rank: { type: Number, required: true },
  period: { type: String, required: true, enum: ['weekly', 'monthly', 'all-time'], default: 'weekly' },
  updatedAt: { type: Date, default: Date.now },
});

export default model<ILeaderboard>('Leaderboard', leaderboardSchema);

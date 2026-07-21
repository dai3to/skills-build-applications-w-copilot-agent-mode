import { Schema, model, Document, Types } from 'mongoose';

export interface IActivity extends Document {
  user: Types.ObjectId;
  team?: Types.ObjectId;
  type: string;
  durationMinutes: number;
  distanceKm?: number;
  calories: number;
  performedAt: Date;
}

const activitySchema = new Schema<IActivity>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  team: { type: Schema.Types.ObjectId, ref: 'Team' },
  type: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  distanceKm: { type: Number },
  calories: { type: Number, required: true },
  performedAt: { type: Date, required: true },
});

export default model<IActivity>('Activity', activitySchema);

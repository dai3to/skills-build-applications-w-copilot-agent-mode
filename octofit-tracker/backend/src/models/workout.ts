import { Schema, model, Document } from 'mongoose';

export interface IWorkout extends Document {
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  durationMinutes: number;
  focusAreas: string[];
  createdAt: Date;
}

const workoutSchema = new Schema<IWorkout>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  difficulty: { type: String, required: true, enum: ['beginner', 'intermediate', 'advanced'] },
  durationMinutes: { type: Number, required: true },
  focusAreas: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
});

export default model<IWorkout>('Workout', workoutSchema);

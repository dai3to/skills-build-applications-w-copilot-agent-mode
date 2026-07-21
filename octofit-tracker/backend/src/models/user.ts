import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  role: 'member' | 'coach' | 'admin';
  createdAt: Date;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, required: true, enum: ['member', 'coach', 'admin'], default: 'member' },
  createdAt: { type: Date, default: Date.now },
});

export default model<IUser>('User', userSchema);

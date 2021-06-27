import { Schema, model, Document, ObjectId } from 'mongoose';

export interface UserInterface extends Document {
  email: string,
  password: string,
  diskSpace: number,
  usedSpace: number,
  avatar: string,
  files?: ObjectId,
}

const UserSchema = new Schema<UserInterface>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  diskSpace: { type: Number, default: 1024 ** 3 * 10 },
  usedSpace: { type: Number, default: 0 },
  avatar: { type: String, default: '' },
  // files: [{ type: ObjectId, ref: 'File' }],
});

export const UserModel = model('User', UserSchema);

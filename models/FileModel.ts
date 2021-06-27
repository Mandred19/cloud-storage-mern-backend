import { Schema, model, Document, ObjectId } from 'mongoose';

export interface FileInterface extends Document {
  name: string,
  type: string,
  size: number,
  accessLink: string,
  userId?: ObjectId,
  parentId: number | null,
}

const FileSchema = new Schema<FileInterface>({
  name: { type: String, required: true },
  type: { type: String, required: true },
  size: { type: Number, default: 0 },
  accessLink: { type: String, default: '' },
  // userId: { type: ObjectId, ref: 'User' },
  parentId: null,
});

export const FileModel = model('File', FileSchema);

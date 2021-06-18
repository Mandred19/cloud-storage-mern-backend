const { Schema, model, ObjectId } = require('mongoose');

const File = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  size: { type: Number, default: 0 },
  accessLink: { type: String, default: '' },
  userId: { type: ObjectId, ref: 'User' },
  parentId: null,
});

module.exports = model('File', File);

import mongoose from "mongoose";

mongoose.Promise = Promise;

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
}

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/cloud', options);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log.bind(console, 'connection success:')
});

export { db, mongoose };

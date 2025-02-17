import mongoose from 'mongoose';
// import { MONGO_URI } from './config';
// import { MONGO_URI } from './config';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://krunalchavdaofficial13:Krunal1603@rezidencev1.dz2os.mongodb.net/?retryWrites=true&w=majority&appName=rezidenceV1';
//const MONGODB_URI = process.env.MONGO_URI;

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI is not defined');
}
export async function connectToDatabase() {
  try {
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(MONGODB_URI);
      console.log('Connected to MongoDB');
    }
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}
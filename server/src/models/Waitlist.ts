import mongoose from 'mongoose';

export interface IWaitlist extends mongoose.Document {
  email: string;
  userType: 'owner' | 'renter';
  createdAt: Date;
  updatedAt: Date;
}

const waitlistSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  userType: {
    type: String,
    required: true,
    enum: ['owner', 'renter']
  }
}, {
  timestamps: true
});

export const Waitlist = mongoose.model<IWaitlist>('Waitlist', waitlistSchema); 
import Waitlist from '../models/Waitlist';
import { connectToDatabase } from '../utils/db';
import { Request, Response, NextFunction } from 'express';

const waitlistMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  await connectToDatabase();

  // check if the email and userType are provided in the request body
  const { email, userType } = req.body;
  if (!email || !userType) {
    res.status(400).json({ message: 'Email and userType are required' });
    return;
  }

  try {
    // Check if an entry with the same email and userType already exists
    const existingWaitlistEntry = await Waitlist.findOne({ email, userType });
    if (existingWaitlistEntry) {
      res.status(400).json({ message: `Email already exists in the waitlist as ${userType}` });
      return;
    }

    // Create a new waitlist entry
    const newWaitlistEntry = new Waitlist({ email, userType });
    await newWaitlistEntry.save();
    res.status(201).json({ message: 'Waitlist entry created successfully' });
  } catch (error) {
    //if duplicate entry is found, return 1100 status code and tell that the email already exists
    if (error && typeof error === 'object' && 'code' in error && error.code === 11000) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      res.status(500).json({ message: 'Error creating waitlist entry', error: errorMessage });
    }
  }
};

export default waitlistMiddleware;
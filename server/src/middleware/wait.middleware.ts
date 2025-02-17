import Waitlist from '../models/Waitlist';
import { connectToDatabase } from '../utils/db';
import { Request, Response, NextFunction } from 'express';

const waitlistMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  await connectToDatabase();

  // check if the email is provided in the request body
  const {email,userType} = req.body;
  if (!email || !userType) {
    res.status(400).json({ message: 'Email and userType are required' });
    return;
  }

  try{
    const newWaitlistEntry = new Waitlist({ email, userType });
    await newWaitlistEntry.save();
    res.status(201).json({ message: 'Waitlist entry created successfully' });
    }catch(error){
        res.status(500).json({ message: (error as Error).message });
        }
};
export default waitlistMiddleware;
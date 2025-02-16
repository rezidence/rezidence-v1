import { Request, Response } from 'express';
import { Waitlist } from '../models/Waitlist';

export const joinWaitlist = async (req: Request, res: Response) => {
  try {
    const { email, userType } = req.body;

    // Validate input
    if (!email || !userType) {
      return res.status(400).json({
        status: 'error',
        message: 'Email and user type are required'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid email format'
      });
    }

    // Validate user type
    if (!['owner', 'renter'].includes(userType)) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid user type'
      });
    }

    // Check if email already exists
    const existingEntry = await Waitlist.findOne({ email });
    if (existingEntry) {
      return res.status(400).json({
        status: 'error',
        message: 'Email already registered in waitlist'
      });
    }

    // Create new waitlist entry
    const waitlistEntry = new Waitlist({
      email,
      userType
    });

    await waitlistEntry.save();

    res.status(201).json({
      status: 'success',
      message: 'Successfully joined waitlist',
      data: {
        email: waitlistEntry.email,
        userType: waitlistEntry.userType,
        createdAt: waitlistEntry.createdAt
      }
    });
  } catch (error) {
    console.error('Waitlist join error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Error joining waitlist'
    });
  }
}; 
import { Request, Response, NextFunction } from 'express';

export const validateRegister = (req: Request, res: Response, next: NextFunction) => {
  const { email, password, firstName, lastName } = req.body;

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ message: 'Please provide a valid email address' });
  }

  // Validate password
  if (!password || password.length < 6) {
    return res.status(400).json({ message: 'Password must be at least 6 characters long' });
  }

  // Validate names
  if (!firstName || firstName.trim().length === 0) {
    return res.status(400).json({ message: 'First name is required' });
  }

  if (!lastName || lastName.trim().length === 0) {
    return res.status(400).json({ message: 'Last name is required' });
  }

  next();
};

export const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ message: 'Please provide a valid email address' });
  }

  // Validate password
  if (!password || password.length === 0) {
    return res.status(400).json({ message: 'Password is required' });
  }

  next();
}; 
import { Request, Response } from 'express';

export const healthController = async (req: Request, res: Response) => {
  try {
    res.status(200).json({ status: 'OK' });
  } catch (error) {
    res.status(500).json({ status: 'ERROR', message: (error as Error).message });
  }
};
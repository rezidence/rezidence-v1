import { Router } from 'express';
import { register, login, getProfile } from '../controllers/auth.controller';
import { protect } from '../middleware/auth';
import { validateRegister, validateLogin } from '../middleware/validation';

const router = Router();

// Public routes
router.post('/register', validateRegister, register);
router.post('/login', validateLogin, login);

// Protected routes
router.get('/profile', protect, getProfile);

export default router; 
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose';
import { config } from './config/config';
import waitlistMiddleware from './middleware/wait.middleware';
import { healthController } from './controllers/health.controller';
import {authMiddleware} from './controllers/auth.controller';


// Initialize express app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: config.clientUrl,
  credentials: true
}));
app.use(helmet());
app.use(morgan('dev'));

// Connect to MongoDB
mongoose.connect(config.databaseUrl)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Basic route
app.get('/api/health', healthController);

// Use authentication middleware
app.use('/api/auth', authMiddleware);

// Use waitlist middleware
app.use('/api/waitlist', waitlistMiddleware);

// Start the server
const port = config.port || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
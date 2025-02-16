import express, { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import config from './config';
import authRoutes from './routes/auth.routes';

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

// MongoDB connection with retry logic
const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoUri);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    console.log('Retrying connection in 5 seconds...');
    setTimeout(connectDB, 5000);
  }
};

// Connect to MongoDB
connectDB();

// MongoDB connection event handlers
mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected! Attempting to reconnect...');
  connectDB();
});

mongoose.connection.on('error', (error) => {
  console.error('MongoDB error:', error);
});

// Routes
app.get('/api/health', (req: Request, res: Response) => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
  res.json({ 
    status: 'ok', 
    message: 'Server is running',
    database: dbStatus,
    timestamp: new Date().toISOString()
  });
});

app.use('/api/auth', authRoutes);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Error:', err);
  res.status(500).json({ 
    status: 'error',
    message: config.env === 'development' ? err.message : 'Internal server error',
    timestamp: new Date().toISOString()
  });
});

// Start server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${config.env}`);
  console.log(`Client URL: ${config.clientUrl}`);
}); 
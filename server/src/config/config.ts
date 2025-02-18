import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

// console.log(process.env);
console.log(process.env.DATABASE_URL);
console.log(process.env.PORT);
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined in the environment variables');
}

export const config = {
  port: process.env.PORT || 3001,
  clientUrl: process.env.CLIENT_URL || 'http://localhost:3000',
  databaseUrl: process.env.DATABASE_URL,
  env: process.env.NODE_ENV || 'development',
  jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret'
};
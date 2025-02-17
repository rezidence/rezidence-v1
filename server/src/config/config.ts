import dotenv from 'dotenv';

dotenv.config();


export const config = {

  port: process.env.PORT || 3001,

  clientUrl: process.env.CLIENT_URL || 'http://localhost:3000',

  databaseUrl: process.env.DATABASE_URL || 'mongodb+srv://krunalchavda1353:Krunal1603@rezidencev1.efa5s.mongodb.net/?retryWrites=true&w=majority&appName=rezidenceV1',

  env: process.env.NODE_ENV || 'development',

  jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret'

};

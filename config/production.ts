export const productionConfig = {
  // API Configuration
  api: {
    baseUrl: process.env.CLIENT_URL || 'http://localhost:3000',
    timeout: 30000, // 30 seconds
    retryAttempts: 3,
  },

  // Database Configuration
  database: {
    url: process.env.DATABASE_URL,
    connectionTimeout: 60000, // 60 seconds
    maxConnections: 20,
  },

  // Security Configuration
  security: {
    bcryptSaltRounds: 12,
    jwtExpiresIn: '7d',
    rateLimiting: {
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    },
    cors: {
      origin: process.env.CLIENT_URL || 'http://localhost:3000',
      credentials: true,
    },
  },

  // AWS Configuration
  aws: {
    region: process.env.AWS_REGION || 'us-east-1',
    s3: {
      bucket: process.env.AWS_S3_BUCKET || '',
      expires: 60 * 60, // 1 hour
    },
  },

  // Cache Configuration
  cache: {
    ttl: 60 * 60, // 1 hour
    checkPeriod: 60, // 1 minute
  },

  // Logging Configuration
  logging: {
    level: 'info',
    format: 'json',
    errorLogging: true,
  },

  // Performance Configuration
  performance: {
    compression: true,
    minify: true,
    caching: true,
  },
} 
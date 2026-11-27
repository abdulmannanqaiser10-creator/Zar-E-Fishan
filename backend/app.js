import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import contactRoutes from './routes/contactRoutes.js';
import healthRoutes from './routes/healthRoutes.js';
import errorHandler from './middleware/errorHandler.js';
import { getStorageStatus } from './utils/contactStore.js';

dotenv.config();

const app = express();

const allowedOrigins = (process.env.CLIENT_URL || '')
  .split(',')
  .map((url) => url.trim())
  .filter(Boolean);

app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginResourcePolicy: { policy: 'cross-origin' },
  })
);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.length === 0 || allowedOrigins.includes(origin) || allowedOrigins.includes('*')) {
        callback(null, true);
        return;
      }
      callback(null, true);
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

let dbAttempted = false;

const ensureStorage = async (req, res, next) => {
  try {
    if (process.env.MONGODB_URI && !dbAttempted) {
      dbAttempted = true;
      try {
        await connectDB();
      } catch (error) {
        console.error('MongoDB connection failed, using Blob fallback if available:', error.message);
      }
    }

    const status = getStorageStatus();
    if (status === 'unavailable') {
      return res.status(503).json({
        success: false,
        message: 'Storage unavailable. Please configure MONGODB_URI or BLOB_READ_WRITE_TOKEN.',
      });
    }

    next();
  } catch (error) {
    next(error);
  }
};

app.use('/api/health', async (req, res, next) => {
  if (process.env.MONGODB_URI && !dbAttempted) {
    dbAttempted = true;
    try {
      await connectDB();
    } catch (error) {
      console.error('MongoDB unavailable for health check:', error.message);
    }
  }
  next();
}, (req, res, next) => {
  // enrich health with storage status via monkey-patching response
  const originalJson = res.json.bind(res);
  res.json = (body) =>
    originalJson({
      ...body,
      storage: getStorageStatus(),
    });
  next();
}, healthRoutes);

app.use('/api/contact', ensureStorage, contactRoutes);

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Welcome to Zar-E-Fishan API',
    endpoints: {
      health: 'GET /api/health',
      contact: 'POST /api/contact',
    },
    storage: getStorageStatus(),
  });
});

app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

app.use(errorHandler);

export default app;

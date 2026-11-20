import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

router.get('/', (req, res) => {
  const dbState = mongoose.connection.readyState;
  const dbStatus =
    dbState === 1
      ? 'connected'
      : dbState === 2
        ? 'connecting'
        : dbState === 3
          ? 'disconnecting'
          : 'disconnected';

  res.status(200).json({
    success: true,
    message: 'Zar-E-Fishan API is healthy',
    timestamp: new Date().toISOString(),
    database: dbStatus,
  });
});

export default router;

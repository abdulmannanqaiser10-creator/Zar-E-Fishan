import dotenv from 'dotenv';
import app from './app.js';
import connectDB from './config/db.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Zar-E-Fishan API running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error.message);
    console.log('Starting without MongoDB — contact submissions will fail until DB is available.');
    app.listen(PORT, () => {
      console.log(`Zar-E-Fishan API running on port ${PORT} (DB offline)`);
    });
  }
};

startServer();

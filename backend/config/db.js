import mongoose from 'mongoose';

const globalCache = globalThis;

if (!globalCache._mongooseCache) {
  globalCache._mongooseCache = { conn: null, promise: null };
}

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error('MONGODB_URI is not defined in environment variables');
  }

  if (globalCache._mongooseCache.conn) {
    return globalCache._mongooseCache.conn;
  }

  if (!globalCache._mongooseCache.promise) {
    globalCache._mongooseCache.promise = mongoose
      .connect(uri, {
        bufferCommands: false,
      })
      .then((conn) => {
        console.log(`MongoDB connected: ${conn.connection.host}`);
        return conn;
      });
  }

  globalCache._mongooseCache.conn = await globalCache._mongooseCache.promise;
  return globalCache._mongooseCache.conn;
};

export default connectDB;

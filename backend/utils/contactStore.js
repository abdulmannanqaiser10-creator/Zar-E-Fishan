import { put, list } from '@vercel/blob';
import Contact from '../models/Contact.js';
import mongoose from 'mongoose';

const isMongoReady = () => mongoose.connection.readyState === 1;

export const saveContact = async (payload) => {
  if (isMongoReady()) {
    const contact = await Contact.create(payload);
    return {
      storage: 'mongodb',
      id: contact._id.toString(),
      name: contact.name,
      email: contact.email,
      subject: contact.subject,
      createdAt: contact.createdAt,
    };
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    throw new Error('No storage configured. Set MONGODB_URI or BLOB_READ_WRITE_TOKEN.');
  }

  const id = `contact_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
  const createdAt = new Date().toISOString();
  const record = {
    id,
    ...payload,
    status: 'new',
    createdAt,
  };

  await put(`contacts/${id}.json`, JSON.stringify(record, null, 2), {
    access: 'private',
    contentType: 'application/json',
    addRandomSuffix: false,
    token: process.env.BLOB_READ_WRITE_TOKEN,
  });

  return {
    storage: 'blob',
    id,
    name: payload.name,
    email: payload.email,
    subject: payload.subject,
    createdAt,
  };
};

export const listContacts = async (limit = 50) => {
  if (isMongoReady()) {
    const contacts = await Contact.find().sort({ createdAt: -1 }).limit(limit);
    return contacts;
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return [];
  }

  const { blobs } = await list({
    prefix: 'contacts/',
    token: process.env.BLOB_READ_WRITE_TOKEN,
  });

  const sorted = blobs
    .sort((a, b) => new Date(b.uploadedAt) - new Date(a.uploadedAt))
    .slice(0, limit);

  const results = await Promise.all(
    sorted.map(async (blob) => {
      const res = await fetch(blob.url, {
        headers: {
          Authorization: `Bearer ${process.env.BLOB_READ_WRITE_TOKEN}`,
        },
      });
      if (!res.ok) return null;
      return res.json();
    })
  );

  return results.filter(Boolean);
};

export const getStorageStatus = () => {
  if (isMongoReady()) return 'mongodb';
  if (process.env.BLOB_READ_WRITE_TOKEN) return 'blob';
  return 'unavailable';
};

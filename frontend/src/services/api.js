import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000,
});

export const submitContact = async (payload) => {
  const { data } = await api.post('/contact', payload);
  return data;
};

export const checkHealth = async () => {
  const { data } = await api.get('/health');
  return data;
};

export default api;

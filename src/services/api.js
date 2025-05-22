import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const banknotesAPI = {
  getAll: () => api.get('/banknotes'),
  getById: (id) => api.get(`/banknotes/${id}`),
  create: (banknote) => api.post('/banknotes', banknote),
};

export default api;
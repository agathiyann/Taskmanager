import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5001', // Ensure this is your correct backend URL
});

export const createTask = (task) => {
  return api.post('/tasks', task, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export const getTasks = () => api.get('/tasks');
export const getTaskById = (id) => api.get(`/tasks/${id}`);
export const updateTask = (id, updatedTask) => api.put(`/tasks/${id}`, updatedTask);
export const deleteTask = (id) => api.delete(`/tasks/${id}`);

export default api;


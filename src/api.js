import axios from 'axios';

const api = axios.create({
  baseURL: 'https://taskbackend-0dot.onrender.com', 
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


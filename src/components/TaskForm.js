import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const TaskForm = ({ tasks, addTask, updateTask }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = id !== undefined;

  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: ''
  });

  useEffect(() => {
    if (isEditing) {
      const taskToEdit = tasks.find(task => task._id === id);
      if (taskToEdit) {
        setTask(taskToEdit);
      }
    }
  }, [id, tasks, isEditing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("Submitting Task:", task);  // Log the task data
  if (isEditing) {
    await updateTask(task._id, task);
  } else {
    await addTask(task);
  }
  navigate('/tasks');
};

  

  return (
    <div className="task-form">
      <h1>{isEditing ? 'Edit Task' : 'Add New Task'}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={task.title} onChange={handleChange} required />
        </label>
        <label>
          Description:
          <textarea name="description" value={task.description} onChange={handleChange} required></textarea>
        </label>
        <label>
          Due Date:
          <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} required />
        </label>
        <button type="submit">Save Task</button>
      </form>
    </div>
  );
};

export default TaskForm;

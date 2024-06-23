// TaskList.js

import React from 'react';
import { Link } from 'react-router-dom';
import './TaskList.css';

const TaskList = ({ tasks, setTasks, deleteTask }) => {
  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      
      setTasks(tasks.filter(task => task._id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="task-list">
      <h1>Task List</h1>
      <Link to="/add" className="add-task-link">Add New Task</Link>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            <Link to={`/task/${task._id}`}>{task.title}</Link>
            <button onClick={() => handleDelete(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <Link to="/" className="back-to-welcome-link">Back to Welcome</Link>
    </div>
  );
};

export default TaskList;

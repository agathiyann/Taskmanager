import React from 'react';
import { Link, useParams } from 'react-router-dom';

const TaskDetail = ({ tasks }) => {
  const { id } = useParams();
  const task = tasks.find(task => task._id === id);

  if (!task) {
    return <div>Task not found</div>;
  }

  const formattedDueDate = new Date(task.dueDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="task-detail">
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>
        Due:&nbsp;&nbsp;&nbsp;{formattedDueDate}  
      </p>
      <div>
        <Link to={`/edit/${task._id}`} key={task._id}>Edit Task</Link>
      </div>
      <div>
        <Link to="/tasks">Back to Task List</Link>
      </div>
    </div>
  );
};

export default TaskDetail;

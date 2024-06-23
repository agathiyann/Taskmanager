import React from 'react';
import { Link } from 'react-router-dom';
import { RiTaskFill } from "react-icons/ri";
import './Welcome.css';
 
const Welcome = () => {
    return (
      <div className="welcome-container">
        <div className="header-container">
          <h1>Task</h1>
          <h1 className="task-icon"><RiTaskFill /></h1>
        </div>
        <p>Manage your tasks</p>
        <Link to="/tasks">
          <button className="start-button">Get Started</button>
        </Link>
      </div>
    );
  };
  
  export default Welcome;

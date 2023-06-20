// import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';


  // import './style.css';
  
  function App() {
    const [taskInput, setTaskInput] = useState('');
    const [taskList, setTaskList] = useState([]);
  
    const handleInputChange = (event) => {
      setTaskInput(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (taskInput.trim() !== '') {
        setTaskList([...taskList, taskInput.trim()]);
        setTaskInput('');
      }
    };
  
    const handleDeleteTask = (index) => {
      const updatedTaskList = [...taskList];
      updatedTaskList.splice(index, 1);
      setTaskList(updatedTaskList);
    };
    const MAX_TASKS = taskList.length;
    const progress = (taskList.length / MAX_TASKS) * 100;
  
    return (

      
      <div className="show">
        <div className="head">
          <h1>
            <i>Task Manager</i>
          </h1>
        </div>
        <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
      </div>
        <form id="task-form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="task-input"
            placeholder="Enter a task"
            value={taskInput}
            onChange={handleInputChange}
          />
          <button type="submit">Add Task</button>
        </form>
  
        <ul id="task-list">
          {taskList.map((task, index) => (
            <li key={index}>
              <span>{task}</span>
              <button onClick={() => handleDeleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  
export default App;
  

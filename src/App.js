import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const editTask = (index, updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="add" onClick={addTask}>
          Add task
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="text"
              value={task}
              onChange={(e) => editTask(index, e.target.value)}
              className="li-input"
            />
            <button className="remove" onClick={() => removeTask(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

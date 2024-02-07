import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = (event) => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
      event.preventDefault();
    } else {
      alert("Task cannot be empty!");
      event.preventDefault();
    }
  };

  const editTask = (index, updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].text = updatedTask;
    setTasks(updatedTasks);
  };

  const checkTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
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
      <form>
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit" className="add" onClick={addTask}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="text"
              value={task.text}
              onChange={(e) => editTask(index, e.target.value)}
              className={task.completed ? "li-input-completed" : "li-input"}
              disabled={task.completed}
            />
            <button
              className={task.completed ? "checked" : "check"}
              onClick={() => checkTask(index)}
            >
              <FontAwesomeIcon icon={faCheck} />
            </button>
            <button className="remove" onClick={() => removeTask(index)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

import React, { useState } from 'react'

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState(''); // Default priority is an empty string

  function handleInputValue(event) {
    setTask(event.target.value);
  }

  function handlePriorityChange(event) {
    setPriority(event.target.value);
  }

  function handleAddTask(event) {
    event.preventDefault();
    if (task.trim() === '' || priority === '') return;

    addTask(task, parseInt(priority, 10));
    setTask('');
    setPriority(''); // Reset priority to an empty string after adding a task
  }

  return (
    <form className="inputField" onSubmit={handleAddTask}>
      <input
        type="text"
        value={task}
        placeholder="Add Item"
        onChange={handleInputValue}
      />
      <select value={priority} onChange={handlePriorityChange} required>
        <option value="" disabled hidden>
          Set Priority
        </option>
        <option value="1">Low</option>
        <option value="2">Medium</option>
        <option value="3">High</option>
      </select>
      <button type="submit">+</button>
    </form>
  );
};

export default TaskInput
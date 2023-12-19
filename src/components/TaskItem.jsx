import React from 'react'
import {MdDeleteSweep} from 'react-icons/md' 
const TaskItem = ({ task, deleteTask, toggleCheck }) => {
  const priorityColors = {
    1: '#66BB6A', // Low priority
    2: '#FFD54F', // Medium priority
    3: '#EF5350', // High priority
  };

  const priorityStyle = {
    background: priorityColors[task.priority] || '#44446b',
  };

  return (
    <li className="items" style={priorityStyle}>
      <div className="items-text">
        <input
          type="checkbox"
          checked={task.checked}
          onChange={() => toggleCheck(task.taskName)}
        />
        <p className={task.checked ? 'isChecked' : ''}>{task.taskName}</p>
       
      </div>
      <MdDeleteSweep
        className="delete-icon"
        onClick={() => deleteTask(task.taskName)}
      />
    </li>
  );
};

export default TaskItem
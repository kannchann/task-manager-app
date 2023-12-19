import TaskInput from "./components/TaskInput";
import React, { useState } from "react";
import TaskItem from "./components/TaskItem";

function App() {
  const [toDoList, setToDoList] = useState([]);

  const addTask = (taskName) => {
    const newTask = { taskName, checked: false };
    setToDoList([...toDoList, newTask]);
  };

  function deleteTask(deleteTaskName){
    setToDoList(toDoList.filter(task=>task.taskName!==deleteTaskName))
  }

  function toggleCheck(taskName){
    setToDoList((prevtoDoList) => prevtoDoList.map(task => task.taskName === taskName? {...task,checked:!task.checked}:task),
    );
  }
  
  return (
    <>
      <div className="container">
        <h1>Task Manager</h1>
        <TaskInput addTask={addTask} />

        <div className="toDoList">
          <span>To Do </span>
          <ul className="list-items">
            {toDoList.map((task, key) => (
              <TaskItem task={task} key={key} deleteTask={deleteTask} toggleCheck={toggleCheck}/>
            ))}
          </ul>

          {toDoList.length === 0 ? (
            <p className="notify">you are done!</p>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default App;

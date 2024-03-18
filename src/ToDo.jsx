import { useState } from "react";

function ToDo() {
  const [tasks, setTasks] = useState(["Wake up", "Gym", "Work"]);

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  }

  const addNewTask = () => {
    setTasks(t => [...t, inputValue])
  }



  return (
    <div className="container">
      <div className="tasks">
        <h1>To Do</h1>
        <div>
          <ul className="tasks-list">
            {tasks.map((task, i) => (
              <li key={i}>
                {task}
              </li>
            ))}
          </ul>
        </div>
        <div className="add-task-container">
            <h1>Add new task</h1>
            <input className="task-input" type="text" placeholder="Enter task" value={inputValue} onChange={handleInputChange}/>
        </div>
        <button className="add-task-btn" onClick={addNewTask}>Add new task</button>
      </div>
      <div className="tasks">
        <h1>Done</h1>
      </div>
    </div>
  );
}

export default ToDo;

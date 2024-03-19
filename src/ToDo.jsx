import { useState } from "react";

function ToDo() {
  const [tasks, setTasks] = useState(["Wake up", "Gym", "Work"]);
  const [doneTasks, setDoneTasks] = useState(["Sleep"]);

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  const addNewTask = () => {
    setTasks((t) => [...t, inputValue]);
    setInputValue("");
  };

  const doneTask = (e, i) => {
    if(e.target.checked){
      const updatedTask = tasks.filter((_, index)=> index !== i);
      setTasks(updatedTask);
      setDoneTasks(t => [...t, tasks[i]])
      e.target.checked = false;
    }
  }

  const deleteTask = (e, i) => {
    const updatedTask = tasks.filter((_, index)=> index !== i);
    setTasks(updatedTask);
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
                <input type="checkbox" onChange={(e) => {doneTask(e, i)}} />
                <button onClick={(e) => deleteTask(e, i)}>X</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="add-task-container">
          <h1>Add new task</h1>
          <input
            className="task-input"
            type="text"
            placeholder="Enter task"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <button className="add-task-btn" onClick={addNewTask}>
          Add new task
        </button>
      </div>
      <div className="tasks">
        <h1>Done</h1>
        <ul className="tasks-list">
              {doneTasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDo;

import './App.css';
import { useState } from "react";



function App() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleTask = (event) => {
    setNewTask(event.target.value);
  }

  const addTask = () => {
    const value = {
      id: task.length === 0 ? 1 : task[task.length - 1].id + 1,
      name: newTask,
      complete: false
    }
    setTask([...task, value]);
  }

  const completeTask = (id) => {
    setTask(
      task.map((task) => {
        if(task.id === id){
          return {...task, complete: true};
        }
        else {
          return task;
        }
      })
    )
  }

  const deleteTask = (id) => {
    setTask(task.filter((task) => task.id !== id));
  }

  return (
    <div className="App">
      <div className="input">
        <input type="text" onChange={handleTask}/>
        <button onClick={addTask} className="button">Add Task</button>
      </div>
      <div>
        {task.map((task) => {
          return (
            <div style={{backgroundColor: task.complete ? "lightgreen" : "white"}} className="list">
              <div className="task">
                <div className="taskname">
                  {task.name}
                </div>
                <div className="taskedit">
                  <button onClick={() => completeTask(task.id)} className="button">Complete</button>
                  <button onClick={() => deleteTask(task.id)} className="button">delete</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;

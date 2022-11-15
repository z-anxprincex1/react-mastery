import './App.css';
import { useState } from 'react';
import { Task } from './components/todo-task';

function App() {

  const [taskList, setTaskList] = useState([])
  const [newTask, setNewTask] = useState("")

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  }

  const addTask = () => {
    const task = {
      id: taskList.length === 0 ? 1 : taskList[taskList.length - 1].id + 1,
      taskName: newTask,
      complete: false
    }

    if(newTask !== "") {
      setTaskList([...taskList, task])
    }
  }

  return (
    <div className='App'>
      <div className="AddTask">
        <input placeholder="Add a task" onChange={handleInputChange}/>
        <button onClick={addTask}>Add To-Do</button>
        <div className="TaskList">
          {taskList.map((task) => {
            return (<Task taskID={task.id}
            task={task}
            taskName={task.taskName}
            taskList={taskList}
            setTaskList={setTaskList}
            />)
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
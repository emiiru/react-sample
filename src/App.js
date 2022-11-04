
import './App.css';
import { useState } from 'react';

function App() {
const [todoList, setTodoList] = useState([]);
const [newTask, setNewTask] = useState("");

const handelChange = (event) => {
    setNewTask(event.target.value);
};

const addTask = () => {
    const task = {
        id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
        taskName: newTask,
    }
    setTodoList([...todoList, newTask]);
};

const deleteTask = (taskName) => {
    setTodoList(todoList.filter((task) => task !== taskName));
};

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handelChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((todo) => {
            return <div>
                <h1>{todo}</h1>
                <button onClick={() => deleteTask(todo)}>x</button>
            </div>
        })}
      </div>
    </div>
  );

}




export default App;

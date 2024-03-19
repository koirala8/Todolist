import TaskInput from "./components/TaskInput";
import {useState} from "react"
import TaskItem from "./components/TaskItem";
import Stats from "./components/Stats";

function App() {
  const [toDOList, setToDoList] = useState([]);

  const addTask = (taskName) => {
    const newTask = {taskName, checked:false};
    setToDoList([...toDOList, newTask])
  }

  function deleteTask(deleteTaskName){
    setToDoList(toDOList.filter(task => task.taskName !== deleteTaskName))
  }

  function toggleCheck(taskName){
    setToDoList((prevToDoList) => prevToDoList.map(task => task.taskName === taskName ? {...task, checked: !task.checked}: task))
  }
  return (
    <>
      <div className="container">
        <h1>Task Master</h1>
        <TaskInput addTask={addTask}/>
        <div className="toDoList">
          <span>To do</span>
          <ul className="list-items">
            {toDOList.map((task, key) => (
              <TaskItem task={task} key={key} deleteTask={deleteTask} toggleCheck={toggleCheck}/>
            ))}
          </ul>
          {toDOList.length === 0?  (<p
          className = "notify">You are done!</p>) : null}
        </div>
        <Stats toDOList={toDOList}/>
      </div>
    </>
  );
}

export default App;

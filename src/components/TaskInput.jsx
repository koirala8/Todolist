import React, { useState } from 'react'

export default function TaskInput({addTask}) {
    const [task, setTask] = useState('');
    function handleInputValue(event){
        setTask(event.target.value);
    }
    function handleAddTask(event){
        event.preventDefault();
        if(task.trim()==='') return;
        addTask(task);
        setTask('');
    }
  return (
    <form className='inputField' onSubmit={handleAddTask}>
        <input type="text" placeholder='Add Item' value={task} onChange={handleInputValue}/>
        <button>+</button>
    </form>
  )
}

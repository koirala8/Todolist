import React from 'react'
import {MdDeleteSweep} from 'react-icons/md'

export default function TaskItem({task, deleteTask, toggleCheck}) {
  return (
    <li className='items'>
      <div className='items-text'>
        <input type="checkbox" checked={task.checked} onchange = {()=>toggleCheck(task.taskName)}/>
        <p>{task.taskName}</p>
      </div>
      <MdDeleteSweep className='delete-icon' onClick={() => deleteTask(task.taskName)}/>
    </li>
  )
}

import React from 'react'
import ToDoItem from './ToDoItem'

function ToDoList({tasks,deleteTask,toggleComplete,editTask}) {
  return (
    <div className='space-y-2 mt-5'>

      {tasks.map((task) => (
        <ToDoItem key={task.id} task={task} deleteTask={deleteTask} toggleComplete={toggleComplete} editTask={editTask}/>
      ))}
    </div>
  )
}

export default ToDoList
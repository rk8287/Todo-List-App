import React from 'react'

function ToDoItem({task,deleteTask,toggleComplete,editTask}) {
  return (
    <div className="flex justify-between items-center p-3 bg-gray-100 rounded shadow-md space-x-5">
      <span className={task.completed ? "line-through text-gray-500" : ""}>{task.text}</span>
      <div className="space-x-3">
        <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
        onClick={() => toggleComplete(task.id)}
        >
          ✅ Complete
        </button>
        <button className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        onClick={() => editTask(task.id)}
        >
          ✏️ Edit
        </button>
        <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600" 
         onClick={() => deleteTask(task.id)}
         >
          ❌ Delete
        </button>
      </div>
    </div>
  )
}

export default ToDoItem

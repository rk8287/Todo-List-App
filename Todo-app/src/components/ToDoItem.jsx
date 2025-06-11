function ToDoItem({ task, deleteTask, toggleComplete, editTask }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-gray-100 rounded shadow-md space-y-2 sm:space-y-0 sm:space-x-4">
      <span className={`flex-1 ${task.completed ? "line-through text-gray-500" : ""}`}>
        {task.text}
      </span>
      <div className="flex flex-wrap gap-2 sm:gap-3">
        <button
          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => toggleComplete(task.id)}
        >
          ✅ Complete
        </button>
        <button
          className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          onClick={() => editTask(task.id)}
        >
          ✏️ Edit
        </button>
        <button
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => deleteTask(task.id)}
        >
          ❌ Delete
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
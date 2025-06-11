import { useState } from 'react';
import './App.css'
import ToDoList from './components/ToDoList';
import Header from './components/Header';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (taskId) => {
    const updateTask = prompt("Edit Task:");
    if (updateTask) {
      setTasks(
        tasks.map((task) =>
          task.id === taskId ? { ...task, text: updateTask } : task
        )
      );
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-[linear-gradient(180.4deg,_rgba(0,6,10,1)_1%,_rgba(1,190,237,1)_91.4%)]">
        <div className="w-full max-w-2xl bg-white shadow-lg rounded-3xl p-6 sm:p-10 md:p-16">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-6">
            REACT TODO LIST ✅
          </h1>

          {/* Input and Button */}
          <div className="mb-4 flex flex-col sm:flex-row">
            <input
              className="w-full sm:flex-grow px-3 py-2 border rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Add a new todo"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button
              onClick={addTask}
              className="mt-2 sm:mt-0 sm:ml-2 bg-blue-950 px-5 py-2 text-white rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none hover:bg-blue-500"
            >
              Add
            </button>
          </div>

          <ToDoList
            tasks={tasks}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
            editTask={editTask}
          />
        </div>
      </div>
    </>
  );
}

export default App;

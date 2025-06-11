import { useState } from 'react';
import './App.css'
import ToDoList from './components/ToDoList';


function App() {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");


 const addTask = () =>{

  if(newTask.trim()){
    setTasks([...tasks, {id: Date.now(), text: newTask, completed: false}])
    setNewTask("");
  }
 }

 const deleteTask = (taskId) =>{

  setTasks(tasks.filter((task) => task.id !== taskId));

 };

 const toggleComplete = (taskId) => {

  setTasks(tasks.map((task) => task.id === taskId ?  {...task, completed: !task.completed} : task));

 };
  
 const editTask = (taskId) =>{
  const updateTask = prompt("Edit Task:");

  if(updateTask){

    setTasks(tasks.map((task) => task.id === taskId ? {...task, text: updateTask}: task));
  }
 }
  return (
   
    <div className='min-h-screen flex items-center justify-center bg-[linear-gradient(180.4deg,_rgba(0,6,10,1)_1%,_rgba(1,190,237,1)_91.4%)]'>
      <div className='bg-white shadow-lg rounded-3xl p-16'>

        <h1 className='text-3xl font-bold text-center text-gray-900 mb-6'>REACT TODO LIST ✅</h1>

        <div className='mb-4 flex'>
          <input className='flex-grow px-3 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500' 
          type="text" placeholder='Add a new todo'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={addTask} className='bg-blue-950 px-5 py-2 text-white cursor-pointer rounded-r-lg hover:bg-blue-500'>Add</button>
        </div>
  
        <ToDoList tasks={tasks} deleteTask={deleteTask} toggleComplete={toggleComplete} editTask={editTask}/>
      </div>
      
    </div>
  )
}


export default App

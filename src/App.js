import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from "./components/AddTask";
import { useState } from 'react'


function App() {
    const [showAddTask, setShowAddTask] = useState(false)

    const [tasks, setTasks] = useState([])

    const addTask = (task) => {
        const id = Math.floor((Math.random() * 10000) + 1)
        const newTask = { id, ...task }
        setTasks([...tasks, newTask])
    }

    const toggleReminder = (id) => {
        setTasks(tasks.map((task) => {
            return task.id === id ? {...task, reminder: !task.reminder} : task
        }))
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

  return (
    <div className='App container'>
      <Header onShowAddTask={() => setShowAddTask(!showAddTask)} />
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No tasks to show'}

    </div>
  );
}

export default App;

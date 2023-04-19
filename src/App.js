import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'August 10th @ 2:45pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting',
      day: 'August 15th @ 6:00pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Gym Training',
      day: 'August 12th @ 1:30pm',
      reminder: true,
    },
    ])

    // Add Task
    const addTask = (task) => {
      const newTask = { ...task }
      setTasks([...tasks, newTask])
    } 

    // Deleting a Task
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }

    // Toggle Reminder
    const toggleReminder = (id) => {
      setTasks(tasks.map((task) => task.id === id ? 
      { ...task, reminder: !task.reminder } : task)
      )
    }



  return (
    <div className="App" id="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? 
      <Tasks tasks={tasks} 
      onDelete={deleteTask} 
      onToggle={toggleReminder} /> 
      : <div className='notasks'>No Tasks</div>}
    </div>
  );
}

export default App;

import {useState} from 'react'
import Header from './Components/Header';
import './App.css';
import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';

const App = () => {

  const [showAddTask, setShowAddTask] = useState(false)

 const [tasks, setTasks] = useState([
   {
      id :1,
      text: "Doctors appointment",
      day:"Jan 23rd at 2:30pm",
      reminder:true
   },
   {
    id :2,
    text: "Grocery Shopping",
    day:"Feb 24th at 2:30pm",
    reminder:true
 },
 {
  id :3,
  text: "Dentist appointment",
  day:"Mar 12th at 10:30am",
  reminder:false
}
 ])

//To add a task 
const addTask = (task) =>
{
   const id = Math.floor(Math.random() * 1000) +1
   const newTask = {id, ...task}
   setTasks([...tasks,newTask])
}

 //To delete a task by removing from the list of tasks
 const deleteTask = (id) =>
 {
    setTasks(tasks.filter((task) => task.id !== id))
 }

 //Toggle the reminders - true or false
 const toggleReminder = (id) =>
 {
  setTasks(tasks.map(task => task.id === id
  ? {...task,reminder : !task.reminder}: task
  ))
 }

  return (
    <div className="container">
   <Header Title='Task Tracker' onAdd={() => setShowAddTask(!showAddTask)}  showAdd={showAddTask} />
   {showAddTask && <AddTask onAdd={addTask}/>}
   {tasks.length >0 ? <Tasks tasks={tasks} onDelete={deleteTask}
   onToggle={toggleReminder}/> : 'No Task to show'}
    </div>
  )
}

export default App


// // if we are planning to use class instead of function
//import React from 'react'
// class App extends React.Component{
//   render()
//   {
//     return <h1>Hello from class</h1>
//   }
// }



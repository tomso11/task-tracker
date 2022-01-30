import React from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import './App.css';
import { useState } from 'react';
import { FaToiletPaperSlash } from 'react-icons/fa';

function App() {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text : 'Doctor',
        day : 'Feb 5th at 2.30pm',
        reminder: true,
    },
    {
        id: 2,
        text : 'Meeting',
        day : 'Feb 6th at 1.30pm',
        reminder: true,
    },
    {
        id: 3,
        text : 'Food',
        day : 'Feb 5th at 2.30pm',
        reminder: false,
    },
])

//Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !==id))
}

//Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder} : task))
}

  return (
    <div className="container">
      <Header title = {"I'm a title"}/>
      {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : ('No tasks to show')}
    </div>
  );
}

export default App;

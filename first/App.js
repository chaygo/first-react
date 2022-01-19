import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header.js';
import Tasks from './components/tasks.js'
import AddTask from './components/addtask.js'
import { useState } from 'react'


function App() {
  var salam="Chaygo";
  const [showAddTask,setShowAddTask]=useState(false)
  const [tasks,setTasks]=useState([
    {
        id:1,
        text:'Salam',
        day:'04.04.1999',
        reminder:true,
    },
    {
        id:2,
        text:'Salam mekdep',
        day:'01.09.2006',
        reminder:true,
    },
    {
        id:3,
        text:'Sagbol uni',
        day:'25.05.2022',
        reminder:false,
    }
])

//showAddTask
const showaddtask = ()=>{
  setShowAddTask(!showAddTask)
}



//Add Task
const addTask = (task) => {
   const id=tasks.length+1;
   const newTask ={id,...task}
   setTasks([...tasks,newTask])
   console.log(id)

}


//Delete Task
const deleteTask = (id) =>{
  setTasks(
    tasks.filter(
    (task) => task.id !== id 
    )
    ) 
    console.log(id)
}

// Toggle Reminder
const toggleReminder = (id) =>{
  console.log(id)
  setTasks(
    tasks.map(
      (task) => 
        task.id === id ? 
        {...task,reminder:!task.reminder
        } : task 
      
    )
  )
}
  return (
    <div className="container">
     
      <Header title={salam} onShow={showaddtask} showAdd={showAddTask}/>
      {
        showAddTask &&
      < AddTask onAdd={addTask}/>
      }
      {tasks.length>0 ?
      (<Tasks 
        tasks={tasks} 
        onDelete={deleteTask} 
        onToggle={toggleReminder} />) :
      ("No task to show ")
      }
   
    </div>
  );
}
 
//class App extends React.Component{
//  render(){
//    return <h1 >Hello Chaygo!</h1>
//  } 
//}



//CSS in JS
//const headingStyle={
//  color:'white',
  //backgroundColor:'black'
//}
export default App;

import React from 'react'
import Task from './task.js'



const Tasks = ({tasks , onDelete , onToggle}) =>{
    

    return (
        
        <div>
            {tasks.map((task) => (
            
            <Task 
            key={task.id} 
            task={task} 
            onDelete={onDelete}
            onToggle={onToggle}
              />
            ))}
        </div>
    )
}

export default Tasks  
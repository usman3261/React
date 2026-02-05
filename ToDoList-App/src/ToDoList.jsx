import { useState } from "react";

export default function ToDoList(){
    let [task,changeTask]=useState([])
    let [newtask,changenewTask]=useState('')

    let setnewTask=(e)=>{
        changenewTask(e.target.value)
    }
    let addTask=()=>{
        if(newtask.trim()!==''){
        changeTask([...task,newtask])
        changenewTask('')
        }
    }
     let delTask=(index)=>{
        changeTask(t=>t.filter((t,i)=> i!==index))
    }
     let upTask=(index)=>{
        if(index>0){
            let updatedTask=[...task];
            [updatedTask[index],updatedTask[index-1]]=[updatedTask[index-1],updatedTask[index]];
            changeTask(updatedTask)
        }
    }
     let downTask=(index)=>{
         if(index<task.length-1){
            let updatedTask=[...task];
            [updatedTask[index],updatedTask[index+1]]=[updatedTask[index+1],updatedTask[index]];
            changeTask(updatedTask)
        }
        
    }
    return(
        <div className="container">
            <h1>To-Do-List App</h1>
            <input type="text" onChange={setnewTask}value={newtask} placeholder="Enter new Task" />
            <button className='add'onClick={addTask}>Add Task</button>
            <ol>{
                task.map((t,index)=>( 
                    <li key={index}>
                    <span className="text">{t}</span>
                    <button className="del" onClick={()=>delTask(index)}>Delete Task</button>
                     <button className="up" onClick={()=>upTask(index)}>Move Up</button>
                      <button className="down" onClick={()=>downTask(index)}>Move Down</button>
                    </li>
                ))
            }
            </ol>
        </div>
    )
}
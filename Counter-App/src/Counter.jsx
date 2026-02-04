import { useState } from "react"
export default function Counter(){

    let [count,setCount]=useState(0)
    let incCount=()=>{
        setCount(count++)
    }

     let decCount=()=>{
        setCount(count--)
    }
     let resCount=()=>{
        setCount(0)
    }
    return (
        <div className="container">
        <p className="display">{count}</p>
        <button onClick={incCount}>Increment</button>
        <button onClick={decCount}>Decrement</button>
        <button onClick={resCount}>Reset</button>
        </div>
    )
}
import { useState } from "react"
export default function Color(){

    let [color,setColor]=useState('')
    let changeColor=(e)=>{
        setColor(e.target.value)
    }
    return(
        <div className="container">
            <h1>ColorPicker</h1>
            <textarea style={{color:'black',backgroundColor:color,textAlign:'center'}}className='display' value={`You choosed ${color}`} /> <br />
            <label >Select a Color</label><br />
            <input style={{backgroundColor:color}} type="color" value={color} onChange={changeColor}/>
        </div>
    )
}
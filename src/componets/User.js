import { useState } from "react"
const User = (props)=>{
    const [count,setCount] = useState(0)
    
 return (
    <div className="user-card">
    <h1>{count}</h1>
    <button  onClick={()=>{
      setCount(count+ 1)
    }}>plus</button>
    <h2>Name: {props.name} </h2>
    <h3>Location:  </h3>
    <h4>Contact: @abijith</h4>
    </div>
 )
}

export default User
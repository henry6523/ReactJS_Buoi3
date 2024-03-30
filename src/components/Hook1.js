import React, {useState} from 'react'

const Hook1 = () => {
    const [count, setCount] = useState(1)
    const handle_countUp = () =>{
        setCount(count +1)
    }
    console.log("render hook1")
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={handle_countUp}>Count up</button>
    </div>
  )
}

export default Hook1
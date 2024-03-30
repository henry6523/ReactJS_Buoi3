import React, {useState} from 'react'

const Hook4 = () => {
    const [city, setCity] = useState("Ho Chi Minh")
  return (
    <div>
        <br></br>
        <h1>City name: {city}</h1>
        <input placeholder='Enter your city' value={city} onChange={(e) => setCity(e.target.value)}></input>
    </div>
  )
}

export default Hook4
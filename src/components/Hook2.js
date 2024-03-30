import React, {useState} from 'react'

const Hook2 = () => {
    const [price, setPrice] = useState(20)
    const handle_sale = () =>{
        setPrice(price -2)
    }
    console.log("render hook2")
  return (
    <div>
        <h1>Price: {price}</h1>
        <button onClick={handle_sale}>Sale on</button>
    </div>
  )
}

export default Hook2
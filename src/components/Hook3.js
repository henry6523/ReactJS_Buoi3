import React, { useState } from 'react'

const Hook3 = () => {
    const [student, setStudent] = useState({ name: "Le Van A", age: 17 })
    const handle_changeName = () => {
        setStudent({ ...student, name: "Tran Van B" })
    }
    const handle_changeAge = () => {
        setStudent({ ...student, age: 71 })
    }
    return (
        <div>
            <br></br>
            <h1>Name: {student.name}</h1>
            <h1>Age: {student.age}</h1>
            <button onClick={handle_changeName}>Change Name</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={handle_changeAge}>Change Age</button>
        </div>
    )
}

export default Hook3
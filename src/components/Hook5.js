import React, { useState } from 'react'

const Hook5 = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);
    const [error, setError] = useState('');

    const handle_num1Change = (e) => {
        setNum1(parseFloat(e.target.value))
    }

    const handle_num2Change = (e) => {
        setNum2(parseFloat(e.target.value))
    }

    const handle_plus = () => {
        setResult(num1 + num2);
        setError('');
    }
    const handle_minus = () => {
        setResult(num1 - num2);
        setError('');
    }
    const handle_mult = () => {
        setResult(num1 * num2);
        setError('');
    }
    const handle_divide = () => {
        if (num1 === 0 || num2 === 0) {
            setError('Cannot divide by zero');
        }
        else {
            setResult(num1 / num2);
            setError('');
        }
    }

    return (
        <div>
            <div>
                <br></br>
                <p>Num1:&nbsp;&nbsp;<input type="number" value={num1} onChange={handle_num1Change}></input></p>
                <p>Num2:&nbsp;&nbsp;<input type="number" value={num2} onChange={handle_num2Change}></input></p>
            </div>
            <div>
                &nbsp;&nbsp;<button onClick={handle_plus}>+</button>&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;<button onClick={handle_minus}>-</button>&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;<button onClick={handle_mult}>x</button>&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;<button onClick={handle_divide}>/</button>&nbsp;&nbsp;&nbsp;
            </div>
            <div>
                <br></br>
                {error && <div>Error: {error}<br></br></div>}
                <p>Result:&nbsp;&nbsp;<input type="number" value={result}></input></p>
            </div>
        </div>

    )
}

export default Hook5
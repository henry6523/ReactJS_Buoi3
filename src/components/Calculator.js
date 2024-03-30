import React, { useState } from 'react';
import './Calculator.css';
const Calculator = () => {
    const [input, setInput] = useState('');
    
    const calculate = (expression) => {
        try {
            const result = eval(expression);
            return parseFloat(result.toFixed(2))
        } catch (error) {
            return 'Malformed Operation';
        }
    }

    const operation = (buttonValue) => {
        if (buttonValue === 'C') {
            setInput('');
        } else if (buttonValue === 'DEL') {
            setInput(input.slice(0, -1));
        } else if (buttonValue === '=') {
            setInput(calculate(input));
        } else {
            setInput(input + buttonValue);
        }
    }

    return (
        <div className="grid-container">
            <div className="calculator-grid ">
                <textarea type="text" value={input} readOnly></textarea>
                <button onClick={() => operation('C')}>C</button>
                <button onClick={() => operation('DEL')}>DEL</button>
                <button></button>
                <button onClick={() => operation('/')}>/</button>
                <button onClick={() => operation('7')}>7</button>
                <button onClick={() => operation('8')}>8</button>
                <button onClick={() => operation('9')}>9</button>
                <button onClick={() => operation('*')}>*</button>
                <button onClick={() => operation('4')}>4</button>
                <button onClick={() => operation('5')}>5</button>
                <button onClick={() => operation('6')}>6</button>
                <button onClick={() => operation('-')}>-</button>
                <button onClick={() => operation('1')}>1</button>
                <button onClick={() => operation('2')}>2</button>
                <button onClick={() => operation('3')}>3</button>
                <button onClick={() => operation('+')}>+</button>
                <button onClick={() => operation('0')}>0</button>
                <button onClick={() => operation('00')}>00</button>
                <button onClick={() => operation('.')}>.</button>
                <button onClick={() => operation('=')}>=</button>
            </div>
        </div>
    );
}

export default Calculator;

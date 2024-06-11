import React, { useState } from 'react'
import './style.css'
import * as math from 'mathjs'

export const Calculator: React.FC = () => {
    const [inputText, setInputText] = useState('0');

    const deleteButton = (value: string) => {
        if (value === 'X') {
            if (inputText.length === 1) {
                setInputText('0');
            } else {
                setInputText(inputText.slice(0, -1));
            }
            return;
        }
    }

    const allClearButton = (value: string) => {
        if (value === 'AC') {
            setInputText('0');
            return;
        }
    }


    const calculate = (value: string) => {
        if (value === '/' || value === '-' || value === '+' || value === '*') {
            const newValue = math.evaluate(inputText);
            setInputText(newValue + value);
            return;
        }
        if ((value === '*' || value === '+' || value === '-' || value === '/') && (inputText.endsWith('*') || inputText.endsWith('+') || inputText.endsWith('-') || inputText.endsWith('/'))) {
            setInputText(inputText.slice(0, -1) + value);
            return;
        }
        if (value === '=') {
            setInputText(math.evaluate(inputText));
            return;
        }
        if (inputText === '0' && value == '00') {
            setInputText('0');
        }
        else if (inputText === '0') {
            setInputText(value);
        }
        else {
            setInputText(inputText + value)
        }
    }

    return (
        <div className='calculator'>
            <input type="text" value={inputText} className='calculator-screen' disabled />
            <div className="calculator-keys">
                <button className="delete" onClick={() => deleteButton('X')}>X</button>

                <button value="%">%</button>

                <button className="all-clear" onClick={() => allClearButton('AC')}>AC</button>

                <button className="operator" onClick={() => calculate('/')}>÷</button>

                <button onClick={() => calculate('7')}>7</button>
                <button onClick={() => calculate('8')}>8</button>
                <button onClick={() => calculate('9')}>9</button>
                <button className="operator" onClick={() => calculate('-')}>-</button>


                <button onClick={() => calculate('4')}>4</button>
                <button onClick={() => calculate('5')}>5</button>
                <button onClick={() => calculate('6')}>6</button>
                <button className="operator" onClick={() => calculate('+')}>+</button>

                <button onClick={() => calculate('1')}>1</button>
                <button onClick={() => calculate('2')}>2</button>
                <button onClick={() => calculate('3')}>3</button>
                <button className="operator" onClick={() => calculate('*')}>x</button>

                <button onClick={() => calculate('0')}>0</button>
                <button onClick={() => calculate('00')}>00</button>

                <button className="decimal" value=".">.</button>
                <button className="equal-sign" onClick={() => calculate('=')}>=</button>
            </div>
        </div>
    )
}

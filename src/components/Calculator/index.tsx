import React, { useState } from 'react';
import * as math from 'mathjs';
import './style.css';
import { buttonList } from '../../constants/ButtonList';

export const Calculator: React.FC = () => {
    const [inputText, setInputText] = useState('0');

    const calculate = (value: string) => {
        if (value == 'AC') {
            setInputText('0');
            return;
        }
        if (value === '=') {
            setInputText(math.evaluate(inputText));
            return;
        }
        if (value === 'X') {
            if (inputText.length === 1) {
                setInputText('0');
            } else {
                setInputText(inputText.slice(0, -1));
            }
            return;
        }
        if ((value === '*' || value === '+' || value === '-' || value === '/') && (inputText.endsWith('*') || inputText.endsWith('+') || inputText.endsWith('-') || inputText.endsWith('/'))) {
            setInputText(inputText.slice(0, -1) + value);
            return;
        }
        if ((value == '*' || value == '+' || value == '-' || value == '/' || value == '%' || value == '.') && (inputText.includes('*') || inputText.includes('+') || inputText.includes('-') || inputText.includes('/') || inputText.includes('%') || inputText.includes('.'))) {
            let newValue = math.evaluate(inputText);
            setInputText(newValue + value);
            return;
        }
        if (inputText === '0') {
            setInputText(value);
        } else {
            setInputText(inputText + value);
        }
    }

    return (
        <div className='calculator'>
            <input type="text" className="calculator-screen" disabled value={inputText} />
            <div className="calculator-keys">
                {
                    buttonList.map(item => (
                        <button
                            key={item.value}
                            type='button'
                            onClick={() => calculate(item.value)}
                            className={item.className ? item.className : ''}
                            value={item.value}
                        >
                            {item.value === '*' ? 'x' : item.value === '/' ? '÷' : item.value}
                        </button>
                    ))
                }
            </div>
        </div>
    );
};

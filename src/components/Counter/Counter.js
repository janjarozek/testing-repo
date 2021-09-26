import React, { useState, useRef, useEffect } from 'react';

export default function Counter({start}) {
    const [inputData, setInputData] = useState(0);
    const [startNumber, setStartNumber] = useState(start);
    const [counter, setCounter] = useState(start);

    const counterInput = useRef(null);

    const increment = () => {
        setCounter(+counter +1);
    }
    const decrement = () => {
        setCounter(+counter -1);
    }
    const changeCounter = () => {
        setStartNumber(inputData);
        setCounter(inputData);
    }
    const handleReset = () => {
        setCounter(startNumber);
    }
    const handleInput = (e) => {
        setInputData(e.target.value);
    }

    useEffect(() => {
        counterInput.current.focus();
        counterInput.current.value = start;
    }, []);

    return (
        <div>
            <label>Write number:</label>
            <input ref={counterInput} type="number" onChange={handleInput}/>
            <button onClick={changeCounter}>Change</button>
            <button onClick={handleReset}>Reset</button>
            <p>Start number: {startNumber}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <p>Counter: {counter}</p>
        </div>
    )
}

Counter.defaultProps = {
    start: 0
}
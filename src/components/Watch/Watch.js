import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Display from '../Display/Display';
import './Watch.css';

const Watch = () => {
    const [steps, setSteps] = useState(0)
    // useState akta asincronas 
    const increaseCount = () => {
        const newStepsCount = steps + 1;
        setSteps(newStepsCount);
    }
    useEffect(() => {
        console.log(steps)
    }, [steps])
    return (
        <div className='watch'>
            <h2>Parents</h2>
            <h3>My current steps: {steps}</h3>
            <button onClick={increaseCount}>Increase</button>
            <Display name="Sabbir" steps={steps}></Display>
        </div>
    );
};

export default Watch;
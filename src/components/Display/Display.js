import React from 'react';
import Dail from '../Dail/Dail';
import './Display.css'

const Display = (props) => {
    return (
        <div className='display'>
            <h3>Child: {props.name}</h3>
            <h4>so far steps today: {props.steps}</h4>
            <Dail name={props.name} steps={props.steps}></Dail>
        </div>
    );
};

export default Display;
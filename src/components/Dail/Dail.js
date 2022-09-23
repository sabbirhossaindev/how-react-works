import React from 'react';
import './Dail.css';
const Dail = (props) => {
    return (
        <div className='dail'>
            <h3>Grand child : {props.name}</h3>
            <h4>so far steps today: {props.steps}</h4>
        </div>
    );
};

export default Dail;
import React from 'react';
import DeviceDetail from '../DeviceDetail/DeviceDetail';
import './Device.css';

const Device = (props) => {
    return (
        <div className='device'>
            <h2>I have: {props.name}</h2>
            <DeviceDetail price={props.price}></DeviceDetail>
        </div>
    );
};

export default Device;
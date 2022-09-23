import React from 'react';
import './DeviceDetail.css';

const DeviceDetail = (props) => {
    return (
        <div>
            <p>price: { props.price}</p>
        </div>
    );
};

export default DeviceDetail;
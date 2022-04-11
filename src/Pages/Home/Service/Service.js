import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name, img, price, description} = service;
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <h5 className='text-primary'>Price: {price}</h5>
            <p><small>{description}</small></p>
            <button className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;
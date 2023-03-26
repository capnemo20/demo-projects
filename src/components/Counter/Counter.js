import React, { useState } from 'react';
import "./Counter.css";

const Counter = ({count, handleAdd, handleMinus}) => {
   
   
   
    return (
        <div className = "name">
            <h2>Count: {count}</h2>
            <button onClick= {handleAdd} >Add</button>
            <button onClick = {handleMinus}>Minus</button>
        </div>
    );
};

export default Counter;
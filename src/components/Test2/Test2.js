import React from 'react';
import "./Test2.css";

const Test2 = (props) => {
    return (
        <div className="test2">
            <h1>Hello From Test 2</h1>
            <h2>This is from test {props.name}</h2>
        </div>
    );
};

export default Test2;
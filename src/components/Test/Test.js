import React from 'react';
import Test2 from '../Test2/Test2';
import "./Test.css";

const Test = (props) => {
    const {name} = props;
    return (
        <div className = "test">
            <h2>Hello h2 from test.js</h2>
            <Test2 name = {name}></Test2>
        </div>
    );
};

export default Test;
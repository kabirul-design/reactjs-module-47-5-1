import React from 'react';
import { add, multiply } from '../Utilitis/Calculate';

const Shoes = () => {
    const first = 55;
    const second = 10;
    const sum = multiply(first, second);
    const result = add(first, second);
    return (
        <div>
            <h2>My second website </h2>
            <p>my add : {result} my multiply {sum}</p>
        </div>
    );
};

export default Shoes;
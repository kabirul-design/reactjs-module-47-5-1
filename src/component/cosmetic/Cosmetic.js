import React from 'react';
import { addToDb, removeCartDb } from '../Utilitis/fakedb';
import './Cosmetic.css'
const Cosmetic = (props) => {
    const {name, price, id, brand} = props.cosmetic;
    const addToCart = (id)=>{
        addToDb(id);
    }

    const removeCart = (id) =>{
        removeCartDb(id);
    }

    return (
        <div className='product'>
           <h3>Cosmetic Name :{name}</h3> 
           <p>Cosmetic Price: {price}</p>
           <p>cosmetic Id : {id}</p>
           <p>cosmetic Brand : {brand}</p>
           <button onClick={()=>addToCart(id)}>Purchase</button>
           <button onClick={()=>removeCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;
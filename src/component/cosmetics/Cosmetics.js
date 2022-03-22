getTotalPriceimport React, { useEffect, useState } from 'react';
import Cosmetic from '../cosmetic/Cosmetic';
import { add, getTotal } from '../Utilitis/Calculate';

// import add from '../Utilitis/Calculate';

const Cosmetics = () => {
   const [cosmetics, setCosmetics] = useState([]);

   useEffect( () =>{
       fetch('data.json')
       .then(res=>res.json())
       .then(data => setCosmetics(data))
   },[])
    
   const total = getTotal(cosmetics);

    return (
        <div>
            <h1>Welcome To Cosmetics</h1>
            <p>Money Needed : {total}</p>
            
            {
                cosmetics.map(cosmetic => <Cosmetic 
                     key={cosmetic.id}
                     cosmetic={cosmetic}
                     ></Cosmetic>)
            }
        </div>
    );
};
export default Cosmetics;
const add = (first, second)=>{
    return first + second;
}
const multiply = (first, second) =>{
    return first * second;
}


// const numbers = [21, 11, 33, 23, 44]

// const numbersReduce = (previous, current) => previous + current;
// const numbersTotal = numbers.reduce(numbersReduce, 0);

// const items = [
//     {id: 1, name: 'soup', price: 45},
//     {id: 2, name: 'lemon', price: 40},
//     {id: 3, name: 'hard', price: 46},
//     {id: 4, name: 'soft', price: 12},
//     {id: 5, name: 'sampoo', price: 50}
// ]

// const getItem = (previous, current) => previous + current;

//     const itemReduce = items.reduce(getItem ,0)

const getTotalPrice = products =>{
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0);
    return total;
}


export {add,
     multiply,
      getTotalPrice as getTotal
    };
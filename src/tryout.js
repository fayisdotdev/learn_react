const numbers = [1,2,3,4,5];

const  squareFunction = (val) => val * val * val;

// creating another array using teh exisnti9ing array and the defined function 
const squares = numbers.map(squareFunction)


console.log(squareFunction(6))
console.log(squares)
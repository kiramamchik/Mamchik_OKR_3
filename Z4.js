
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


const result = {};

numbers.forEach(number => {    const remainder = number % 3;
    
   
    if (!result[remainder]) {
        result[remainder] = [];
    }
    
    result[remainder].push(number);
});


console.log(result);
const numbers = [1, 12, 4, 18, 9, 7, 11, 2, 101, 5, 6];

const mayorNumber = Math.max(...numbers);
console.log(`1: \n${mayorNumber}`);

const paresNumber = numbers.filter(number => number % 2 === 0);
console.log(paresNumber);

const imparesNumber = numbers.filter(number => number % 2 >= 1);
console.log(imparesNumber);

const divisiblePorTres = numbers.every(number => number % 3 === 0);
console.log(divisiblePorTres);

const unitedArray = [...paresNumber, ...imparesNumber];
console.log(unitedArray);

const orderedArray = unitedArray.sort((a, b) => b - a);
console.log(orderedArray);
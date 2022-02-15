// 1: cutting aportion from an array :
const numbers = [1,2,3,5,6,7,8,9,23,43,4,54 ,56,67];
const numberSliced2 = numbers.slice(3,5);
const numberSliced = numbers.slice(4,9);
const numberSliced1 = numbers.slice(4,11);
console.log(numbers);
console.log(numberSliced);
console.log(numberSliced1);
console.log(numberSliced2);
// 2: learning lplice :
const numberSpliced = numbers.splice(2, 5);
console.log('array deleted',numberSpliced);
console.log('new array after splice', numbers);
// 3: learning splice and add:
const numberSplicedAdd = numbers.splice(2, 2, 4444, 5556);
console.log('new array after splice and add', numberSplicedAdd);
console.log(numbers);


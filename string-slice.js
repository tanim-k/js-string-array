const anthem = 'Amar Sonar Bangla Ami Tomai Valobashi';
// to find all letters
const allLetters = anthem.split('');
// to find words
const words = anthem.split(' ');
// to split with specific letter
const withoutA = anthem.split('a');
// how to find a apecific slice :
const smallSlice = anthem.slice(5,10);
// to find a part as ur wish
const wishPart = anthem.substr(5, 8);
// another property
const itsLikeSlice = anthem.substring(5, 8);
// concat to add two strings
const first = 'marry';
const second = ' me';
const fullString = first + second;
const fullByConcat = first.concat(second).concat(' pera');
console.log(allLetters);
console.log(words);
console.log(withoutA);
console.log(smallSlice);
console.log('wishpart:', wishPart);
console.log('sub-string:', itsLikeSlice);
console.log('add>string:', fullString);
console.log('add>string:', fullByConcat);
// all join property
const letters = ['a','b','c','d','e'];
const joinAllletters = letters.join('');
console.log(joinAllletters)
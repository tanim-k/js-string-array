//1: numbers sorted 0 to 9:
const numbers = [9, 8, 7, 6, 5, 0, 4, 3, 2, 1,];
const numberSorted = numbers.sort();
console.log(numberSorted);
// 2: my friends sorted:
const friends = ['zabul','kabul','habul','abul','upol','jamai'];
console.log(' my friends raw array', friends);
const friendsSorted = friends.sort();
console.log('sorted array of raw one',friendsSorted);
// 3: reversing the main array / reverse index
const friendsReversed = friends.reverse();
console.log('reversed array', friendsReversed);
// 4: learning sort and reverse together
const friendsSortedReversed = friends.sort().reverse();
console.log('reversed or sorted-reversed:',friendsSortedReversed);
// 5: learning big numbers sorting using function:
const bignumbers = [54,65,23,5,21,7,6,34,22,67,89,100];
const bignumbersSorted = bignumbers.sort(function(a,b){
    return a-b;
})
console.log('big numbers sorted:', bignumbersSorted);
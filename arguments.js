// 1: learn to add two numbers by a function:
function addNumbers(num1, num2) {
    console.log(arguments);
    console.log('index 1 element', arguments[1]);
    console.log('index 3 element', arguments[3]);
    const result = num1 + num2;
    return result;
}
// calling function
const sum = addNumbers(10, 10, 30, 30);
console.log('add of two given parameters',sum)

// 2: learn to add multiple numbers by a function:
function addMultipleNumbers() {
    console.log(arguments);
    let result = 0;
    for(const num of arguments) {
        result = result + num;
    }
    return result;
}
// fn calling:
const summation = addMultipleNumbers(10,10,10,10,10,20);
console.log(summation);

// 3: learn to add two strings by fn:
function getFullName(firstName, lastName) {
    const fullName = firstName+' '+lastName;
    return fullName;
}
const name = getFullName('Hanif', 'khan');
const name1 = getFullName('tanim', 'khan');
console.log(name1);
console.log(name);
// 4: learn to add many strings by for loop and arguments:
function addMultipleNames() {
    console.log(arguments);
    let result = ' ';
    for(const part of arguments) {
        result = result + part + ' ';
    }
    return result;
}
// fn calling:
const jotilName = addMultipleNames('rafik','salam','barkat','jabbar','salam','modon','vari','abdul','alin');
console.log('add all strings given as parameters:',jotilName);
// type error:1
/* const name = 'ami';
name = 'tumi';
console.log(name); */

// syntax error:2
/* for(let i = 0; i < 10 i++) {

} */

// missing initializer in const declaration:3
/* const student;
console.log(student.name); */

// cannot read property name undefined:4
/* const student = undefined;
console.log(student.name); */
// learning try catch to find error
const name = "moru"
try{
    name='goru';
}
catch(error) {
// let or const jai deo kono error dibe na 
    console.log('gettin erroe', error);
}
// let dile goru dekhabe 
// const dile moru dekhabe
console.log(name);
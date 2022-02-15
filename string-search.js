const products = [
    'Dell hardcore i29 200GB laptop',
    'ophone 1TB camera flashlight Phone',
    'Dell yellow laptop with blace camera',
    'Dell 1X59 Lenovo commercial yoga laptop',
    'Dell LG supernova laptop',
    'HTC low price phone',
    'purple color phone with Laptop'
]
const searching = 'laptop';
const searchingDell = 'Dell';

// indexOf

const output = [];
const outputDell = [];
for(const product of products) {
    if(product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        // output.push(product);
    }
}
console.log(output);

// use includes to search a string 
for(const product of products) {
    if(product.toLowerCase().includes(searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);
// USE STARTSWITH TO FIND A STRING 
for(const product of products) {
    if(product.toLowerCase().startsWith(searchingDell.toLowerCase())) {
        outputDell.push(product);
    }
}
console.log(outputDell);
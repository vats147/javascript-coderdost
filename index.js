console.log("Hello World");
console.log("Gello");

let firstName="Hello";
let lastName="World";

// String concatination
let result=firstName+lastName;
console.log("result:",result);

let word="hii my name is hello";
let data=word.split(' ');
console.log(data);

//join the split words 
console.log(data.join(' '));

//access specific elements of array
console.log(data[2]);

// Reverse String
console.log(data[1].reverse());


for(let i=0;i<data.length;i++)
{

    console.log(data[i]);
}

//const variable can not change after assgin it 
const a=10;

// cannnot change const value 
// a=15 invalid

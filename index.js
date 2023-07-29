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
    if(i===5)
        break;
}

//const variable can not change after assgin it 
const a=10;

// cannnot change const value 
// a=15 invalid
let c=10


let sentence="hello world"

while(c<=11)
    {
        console.log("Hello");
    }
let obj={
    name:"Hello",
    age:10
}

//pass by Refrence
let objRef=obj;

obRef={age:15} //It will override current object value 

// pass by value
let objValue={...obj}

// DOM access
let anchorAttribute=document.querySelectorAll('#nav');
let anchorText=document.querySelectorAll('<h1>');


console.log(anchorAttribute.innerHTML);

// Change innerHTML
anchorAttribute.innerHTML="<h1>Hello World</h1>";
    

// Change innetText
anchorAttribute.innerText="Hii I changed word";

//comment 1




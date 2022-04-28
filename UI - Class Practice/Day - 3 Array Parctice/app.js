// Array -  To store multiple value in single variable
// eg :- let array =[`one`, `two`, `three`];
// it store number, decimalnumber, boolean, all mixed of this array takes as variable value
// Array is Non-Primitive Type

// Array method
const array = [1,2,3,4];
console.log(array)
console.log(typeof array);

// Push - Adding one or more element into an array at the last position
let countries = [`INDIA`, `USA`, `UK`, `LONDON`, `ITALY`];
countries.push("RUSSIA");
countries.push(`lANKA`, `PARIS`);

console.log(countries);

// POP - Remove/Delete an element form an array at the last position
countries = [`INDIA`, `USA`, `UK`, `LONDON`, `ITALY`]; 
countries.pop();
console.log(countries);

// Shift - It delete an element from an array at first position
countries = [`INDIA`, `USA`, `UK`, `LONDON`, `ITALY`]; 
countries.shift();
console.log(countries);

// UnShift - Adding one or more elemnet into an array at the first position
countries = [`USA`, `UK`, `LONDON`, `ITALY`]; 
countries.unshift("INDIA");
console.log(countries);

// Indexof() - To get the index of an elemnet
countries = [`INDIA`, `USA`, `UK`, `LONDON`, `ITALY`]; 
console.log(countries.indexOf(`LONDON`));

// Includes() - Evaluate the given element exisist in the array
console.log(countries.includes(`UK`)); // if it exisist - given boolen value - true
console.log(countries.includes(`French`)); // if doesn't exisist - gives false

// concat() - Method to create a new array by merging  to exisitng array

const a =[`Hi Good Morning!`];
const b = ["Today is Sunday"];
const c =['Enjoy the Weekend'];
const results = a.concat(b + c);
console.log(results);


let x = ["Today is Sunday"];
let y =['Enjoy the Weekend'];
let res = x.concat(y);
console.log(res);

// Slice() - Extracts Part of array (it`s importent method for both string and array)

countries = [`INDIA`, `USA`, `UK`, `LONDON`, `ITALY`]; 
console.log(countries.slice(2, 4)); // 1 is satrt index & 4 is end length

// Splice()- Adds an Element by removing the existing elements from the array   (it`s importent method for both string and array)

countries = [`INDIA`, `USA`, `UK`, `LONDON`, `ITALY`]; 
console.log(countries.splice(1, 3, `France`));  // 1 is start index, 3 is removing the element & `France` is replace of the word ` London`



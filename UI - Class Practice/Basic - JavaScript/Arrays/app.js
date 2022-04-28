// Arrays can store - Number, String, Objects has a elements of array
 
// let numArray = [1, 2, 3, 4, 5];
// let strArray = [`one`,`two`, `three`];
// let booleanArray = [true, false];
// let decimalArray = [1.1, 1.2, 1.3];

// Array Method 
const array = [1,2,3,4];
console.log(array);
console.log(typeof array);
console.log(`Value : ${array}, Type : ${typeof array}`);

// Push() - Adding one or more element at last position
let countries = [`India`, `Uk`, `Usa`,];
countries.push(`Italy`);
console.log(countries);

// Pop() - Removing an element at last position
countries.pop();   // it removes only one last element at a time
console.log(countries);

// Shift() - removing an only one first element at a time
countries.shift();
console.log(countries);

// Unshift() - Adding one or more First position element
countries.unshift(`India`,`Germany`);
console.log(countries);

// Includes() - it Evaluate the given element that is exist in the given array
console.log(countries.includes(`Uk`));  // if the element is exist it gives - true
console.log(countries.includes(`France`));  // if the element is not exist it gives - false


//  Indexof() - it gives the index of an element
console.log(countries.indexOf(`Uk`)); // it give - 2 , bcs index start with 0

// concat() - it is method to creat a new array by merging existing arrays
const a = [1,2,3];
const b = [4,5,6];
let resArray = a.concat(b);
console.log(resArray); // so it merge the a & b array and give in one new array

let countries1 = [`Japan`, `France`, `London`];
let results =  countries.concat(countries1);
console.log(results);

// slice() - it extracts part of array
console.log(countries.slice(1,4)); // it takes the element start from index-1(starting index) to index-4(endingindex)

// splice() - it adds an element by removing the exist element from an array
countries = ['India', 'Germany', 'Uk', 'Usa'];
console.log(countries.splice( 1, 2, "france"));

countries = [`INDIA`, `USA`, `UK`, `LONDON`, `ITALY`]; 
console.log(countries.splice(1, 3, [`France`]));  // 1 is start index, 3 is removing the element & `France` is replace of the word ` London`


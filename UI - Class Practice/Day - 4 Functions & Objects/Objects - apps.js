// Object - It is Non-Primitive data type

// How to declare a object
const ricky = ("ricky", "don", 28,"Engineer", ["Ted","Mary","Tony"]);
const firstName =  ricky[0];
const lastName = ricky[1];
console.log(firstName, lastName);
console.log(ricky[0][1]);


// How to create object (key : value)

// 2 way to create an object
// 1. Literal Method
let aobj = {
    property : `value`,
    name : "Koushik",
    age : 26,
    designation : "software",
    experience : "3 years"
} 
console.log(aobj);

// 2. Object or Constructor Method

const koushik_obj = new Object // adding an element to an object
koushik_obj.firstName = "koushik";
koushik_obj.lastName = "unknown";
koushik_obj.age = 26;
console.log(koushik_obj);

// how to fetch data from object 

// 1. Dot Nontation :- it is also an operter 
console.log(aobj.name);
console.log(aobj.designation);
console.log(aobj.age);


// 2. Bracket Notation :- Inside bracket that key should be define as string
console.log(koushik_obj["firstName"]);
//or
// you can add dynamic keys or add statement to bracket notation
const aname = `Name`;
console.log(koushik_obj['first' + aname]);


// a. set a property to an object
aobj.father = "Robert"  // adding a new property 
koushik_obj.salary = 35000;

// b. Delete an Property from an object

// delete koushik_obj.

delete koushik_obj.salary
// or
delete koushik_obj["salary"];

// c. To check weither the property is exisist or  not

console.log(koushik_obj.hasOwnProperty("firstName"));
// or
console.log (koushik_obj.hasOwnProperty("salary"));

// Math Object - Roundup of value to nearest value
 // PI = 22/7
const price = 504.26;
console.log(Math.PI);

// ceil of - It will goto next value
//console.log(`ceil of ${price} is ${Math.ceil(price)}');
console.log(Math.ceil(201.24)); // next nearest value 202

// floor - previous interger
console.log(Math.floor(201.24));  // previous value 201

// absoluet of - converting from negative value to positive value 
console.log(Math.abs(-201.24)); // 201.24

// power of - 
console.log(Math.pow(5,2));

// square root - 
console.log(Math.sqrt(16));

// maximum - to find the maximum number
console.log(Math.max(8,10,12,50,88));

// minimum - to find the minimum number
console.log(Math.min(8,10,12,50,88));
// or
console.log()

// truncate 
console.log(Math.trunc(12.48)); 

// Random number
console.log(Math.random()*1000000); // 929545.1254681399

// to remove the . value
console.log(Math.trunc(Math.random()*1000000)); //923424 gives only six digit otp

// Date object - get a date using system date
const today =  new Date();
console.log(today); // Tue Apr 12 2022 19:00:50 GMT+0530 (India Standard Time)

// Get only date
console.log(`Today number is ${today.getDay()}`); // 2 - tuesday

// Get only month
console.log(`This month is ${today.getMonth()}`); //
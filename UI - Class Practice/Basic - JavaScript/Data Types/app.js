// 1) Number
//eg
const a = 555;
console.log(a);
console.log (typeof a);
console.log(`value : ${a}` , `Type : ${typeof a}` );

// 2) String
//eg
let employeeName = `Koushik`
console.log(employeeName);
console.log(typeof employeeName);
console.log(`Employee Name is ${employeeName}`, `Type : ${typeof employeeName}`);

// 3) Boolean
var x  = 10;
var y =  10;
var res = ``;
if (x == y){
    res = true;
}
console.log(res);
console.log(typeof res);
console.log(`Value : ${res} , Type : ${typeof res}`);

//or

let employeeId = true;
console.log(`value : ${employeeId}, Type : ${typeof employeeId}`);

// 4) Symbol

// 5) Objects
let obj = [`peter`];
console.log(`value : ${obj} , Type : ${typeof obj}`);

//or
const jhon =[`jhon`, `bell`]
 const jhonobj ={
     // key : value (The pair of key & Value is know as Property)
     firstName : jhon,
    //  lastName : bell

    }
 console.log(jhonobj);


// 6) Undefined
let z;
console.log(z);

let name; // Variable Declaration is done - but value not declared - so it is undefined
console.log(`value : ${name}, type : ${typeof name}`)

// 7) Null
 let z1 = null;
 console.log(z1); // null means later we can add any value to it - so we declared it as null

 //or
 let test = null;
console.log(`value : ${test} , type : ${typeof test}`)

// Re-Assignment is allowed

let abc;
abc = 10;
abc = `text`;
abc = null;
abc = true;
console.log(`value : ${abc}, type : ${typeof abc}`); // were it takes the latest one has data value & type

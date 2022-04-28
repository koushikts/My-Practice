//  Destructring arrays -  declaring the variable in the left postion of an value array using array [] by providing the name as per the values in the array

const countries = [`India`, `Italy`,`USA`, `Uk`, `Australia`];

// old method

const a =countries[0]; // based on index
const b = countries[1];
console.log(a, b);

// new method  - assigning value name to the left side of the =  operator
const [x, y, z]=countries; // or insted of countries -[`India`, `Italy`,`USA`, `Uk`, `Australia`];
console.log(x,y,z);


// to skip italy we need to give space b/w k, ,l
const[j,  ,l ] = [`India`, `Italy`,`USA`, `Uk`, `Australia`];
console.log (j,l) 
//  if need to print space give variable name [j,k,l]


//  Nested Array
const country = [`India`, `Italy`,[`USA`, `Uk`],`Australia`];
console.log(country);

// restructuring of nested array

const [m,n,[o,p]] = country;
console.log(m,n,o,p);

// using defalut value - if its not present in an array

let[e,f,g] = [1,2];
console.log(e,f,g); // it shows that g is undefined

[e,f,g=3] =[1,2]; // if value is given while in declaring variable is defalut value
console.log(e,f,g);

// later declaring in array it change the value as per the array value
[e,f,g=3] =[1,2, 5]; // now it`s taking the value which is given in array 
console.log(e,f,g);
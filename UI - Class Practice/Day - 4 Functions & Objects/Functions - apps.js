
// Function Declartion : The below eg  are syntax of function

function name (){
  console.log(`MY NAME IS KOUSHIK`)
}
name();

function age (a){
  console.log(a);
}
age (26);

// or

function age1 (b){ // b is parameter 
  console.log(b);
}
let x = `My age is 26`;
age1(x);

function num (a){
  console.log(a)

}
let num1 = `1 to 6`;
let num2 = [1,2,3,4,5,6]; // [ ] it is array - type of object

num(num1)
num(num2)
let agr = `vinay is so angry - cool bro cool`
num(agr);
console.log(typeof num2);



function message (name, age , company, designation){
  console.log(`My name is ${name}, age is ${age}, company is ${company}, designation - ${designation}`)
}
message(`Koushik`,"26",'IBM',`Front End Developer`);

function message1 (name, age , company, designation){
  console.log(`My name is ${name}, age is ${age}, company is ${company}, designation - ${designation}`)
}

let a = 'Jhon';

message1(`Koushik`,"26",'IBM',`Front End Developer`);

// Destructring Objects

let person = {
    name : `jhon`,
    father : `xavier`,
    Hobbies : [`Singing`,`Cycling`,`Cooking`,`Reading`],
    Friends : [`Vinay`,`hari`,`Satish`],
};

// // old method
// const name = person.name; // to access a name of person in object // its dot notation
// console.log(name);

// new method  //  destructring with key variables
let {name, father} = person; // normal assigning

console.log(name);
console.log(father);

// renaming the variables
let  {name: firstName, father : Parent} = person; 

 console.log(firstName);
 console.log(Parent);

 // adding mother - setting default method
// Deafult valuses for non existence property
 const{mother = `mary`, father : jhonsonfather} =person;

 console.log(mother, jhonsonfather);




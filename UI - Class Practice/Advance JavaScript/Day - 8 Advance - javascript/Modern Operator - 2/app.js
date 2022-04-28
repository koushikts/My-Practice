
//  short Circuiting
let x = 10;
let y = 20;
let z = 30;

console.log(10 > 20 && 20 > 50 || 50 > 10); // true

console.log (`----------------- OR ---------------`);
// || - The operator will return first truthy value of all the operands,

console.log(3 || `Peter`); // 3
console.log("" || `Peter`); // peter
console.log(true || 0); // true
console.log(undefined || null);  // null // it is know as short Circuting

console.log(undefined || 0 || "" || `hello` || 23 || null); // `hello`
// after true executed then it won`t check next one


//  real time senario

car = {
    make : "honda",
    kms : 0,  // according to short circute false but in nullish coalesing its true bcs 0 is a value
};

const millage = car.kms ? car.kms : 10; // terrnary operator

console.log(millage)  // its a falsy condition

//////////////////////////////
// && operator will return false as soon as it gets any falsy value and  return the last true value if all values are truthy.

console.log(`----------------AND---------------`);

console.log (0 && `Peter`); // 0 // if first conditon false - it gives falsa only so it is 0

console.log(7 && `Peter`); // peter

console.log(`hello` && 23 && null && `peter`); // null


console.log(`-------------- Nullish Coalesing --------------`);
// only null & undefined consider as a falsy value
// truthy value (NOT 0 and "" )


// insted of 10 how to make it as 0 using nullish coalesing for (above car eg) 

const errorCorrect = car.kms ?? 10;
console.log(errorCorrect);  // 0


console.log(`-------------- Sets --------------`);

///////////////////////////////////////////////////
      //sets
      /*
      A set is a collection items which are unique that is no element can be repeated.
      */
 

      // How to creat a set

      const newSet = new Set([15, 78, 92, 78, 15, 87, 43, 92]);

      console.log(newSet); // it won`t take repeted values - it gives unique array [15,78,92,87,43]

      // how to check size of a set

      console.log(newSet.size) // 5 - it gives count of values [15,78,92,87,43]

      // how to check the element is avalable in the array

      console.log(newSet.has(78)) // true - it is avalable
      
      
      // to add an extra or new element to an array

      console.log(newSet.add(100)); // it add 100 in array at last [15,78,92,87,43,100]

      // to delete an element from an array

      console.log(newSet.delete(100));  // we can give any value to delete(92) inside the bracket we need to give an element which need to be delete.

      console.log(newSet.size);

      // to clear all the elements in the array - it becomes 0 set

      newSet.clear();
      console.log(newSet);


      // how to use `sets` in real time 

       const nums =  [2, 4, 5, 7, 8, 4, 5, 7]; // [2,4,5,7,8]
    // const nums = new Set ([2, 4, 5, 7, 8, 4, 5, 7]);
   //  console.log(nums)

      // to find unique array and also coverting an array to set
     
      let uniqueNums = new Set(nums);
      console.log(uniqueNums);

      // now conver an set to an array - using spread operators
      
      uniqueNums = [...new Set(nums)] ; // now it converts to unique array // so it becomes array of unique array // we can also do this using includes methods in array
      console.log(uniqueNums);



      console.log(`-------------- Maps --------------`);


       //////////////////////////////////////////////////////////
      // Maps

      /* 
      Map is a collection elements where each element is stored as a key, value pair. Map object can hold both objects and primitive values as  either key or value.


      key never takes number, boolen, undefind & null
      it only take string
      eg :-
car = {
        1: "Honda", // it should be like    make :"Honda"
        kms: 0,
      };
      consloe.log(car.1)
      
      */

      // to craete a new Map

      const person = new Map ()
      console.log(person); // the Map as created to person

      // to add properties to the person using set
       
      person.set(`name`, `peter`); // setting a property to the map
      person.set(`age`, 26); 
      person.set(1, `num`);    // we can set number as key (were 1 belongs to num)   

      console.log(person);

      // to see the size of the map
      console.log(person.size);

      // to delete 
      console.log(person.delete(1)); // to delete pass key like delete(1)
      console.log(person); // now the set 1 is deleted both key and value (1, num) its removed

      // to clear
      person.clear(); // it will clear entire map of person
      console.log(person);

      


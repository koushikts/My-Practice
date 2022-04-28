// Advanced functions


// Default Parameters
// here (num1, num2, num2) are parameters to call we write arguments
function artOpn (num1, num2 = 7, num3 = 4){   // this function is doing airthematic opertions


return  num1 + num2 + num3   // return keyword helps to add all this and store answer in result


}
const result = artOpn(2,3); // after writting a finction we need to call a function by passing arguments
console.log(result); //  to print in console window // it prints NaN bec num3 is not defined
// so in on this situation we can pass defult parameter to num3 like (num3 = 4) we can pass argumnet inside the paramenter
// Now it result 9 = (2+3+4)
// if i declare an argument for num inside the paramenter like (num2 = 7) it won`t overwrite the value because the agrument is passed (2.3)
// so if i remove the argument that is (2,3) remove 3 then it will take the element 7



console.log(`------- Break ------`)

// in javaScript we have firstClass Function - function which we treat as value is konow as first Class function
// it hepls to send an value to the fucction which will be an argument
const num = 7 ; // here num is variable & 7  is value


// we will see eg for a function returns an other funstion

// normal function
function  count (){
    let counter = 0;
return 2; 
}
const final = count(); // what ever we got in return keyword that value will pass here
console.log(final); 



function  count (){
    let counter = 0;
return function () {  // i have write funtion so it returns functions
    counter + 1;
    console.log(counter);
};
}
const final1 = count(); 
console.log(final1)


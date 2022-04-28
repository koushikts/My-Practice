// if condition statement - if you want to execute something based on some condition
// syntax -
/*
 if(condition){
    statement
    console.log
}

*/

// eg :- 1)

let mySalary = 1000;
let yourSalary = 500;

if (mySalary > yourSalary){
    console.log(`My salary is greater than your's salary`);
};

// if else
// syntax :-
/* 
if(condition){
    // statement
}
else {
    // statement need to be executed when if condition fails
};
*/

//eg :- 1)
// Admission for high school minimum age 15
let age = 15;
if (age > 14){
    console.log (`Student admited to high school`);
}
else{
console.log (`Student not admited to high school`);
};


// if else if else
// syntax :- 
/*
if(condtion){
    //statemnet
}
else if (Next Condition){
    // statemnt
}
else{
   // statement need to be executed when if condition fails 
};
*/

// eg:- 1)

// Admission for high school minimum age 14
const age1 = 13;
if(age1 >= 14){
    console.log(`Student admited to high school`);
}
else if (age1 >= 11 && age1 <= 13){
    console.log(`Student admited to middle school`);

}
else{
    console.log(`Student admited to elementary school`);
};

// ------------------- break ----------------------

// 2) Switch Statement - (For Multipal Code blocks) - It is a type of conditional statement that eveluates 
// an expression agains multiple possible cases

const day = `Thrusday
`;
switch (day){
    case "Sunday":
        console.log(`Time to relax!`);
        break;
    case "Monday":
    console.log(`Happy Monday!`);
    break;
    case "Tuesday":
    console.log(`It's Tuesday` );
    break;
    case "Wednesday":
    console.log(`Hump day Already`);
    break;
    case "Thrusday":
        console.log(`Just one more day till weakend!`);
        break;
     case "Friday":
         console.log(`Happy Friday!`);
         break;
      case "Saturday":
          confirm.log(`Have a wonderful day`);
          break;
       default:
           console.log(`Something went wrong`);
};






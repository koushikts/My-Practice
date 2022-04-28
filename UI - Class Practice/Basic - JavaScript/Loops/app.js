// for loop
// syntax :-
/*
for ( initialization; conditions; increcment/decrement){
    // statements
}
*/

// eg:- to print only  even number 
for (let i = 0; i <= 10; i++){
    if(i %2 == 0){
        console.log(i);
    }
};

for (let i =0; i <= 5; i++){
    if (i == 3) break;
    console.log(i);

}

// Nested For loop - for loop inside the for loop

// eg:-
for (let exersise =1; exersise < 4; exersise++){
    console.log(`starting exersise ${exersise} from gym`)
    
    for(let rep =1; rep <= 6; rep++){
    console.log(`lifting weight repetation${rep}`)
    }
};

// while loop -  it keeps on iteration until it reach the conditions
// syntax :- 
/*
while(condition){
    // statement

    ++;

};
*/

// // eg:-
let j = 0;
while(j<=5){
    console.log(j);
    j++;
} 


// do while -  it execute atleast once
// syntax
/*
do{
    // statements
}
while(condition)

*/

// eg:- 
let k = 6;
do{
    console.log(k);
    k++;
}
while(k<5);

// Nested do while loop
// eg :-
 let k = 7;
 let m = 1;
 do{
     console.log(k);
     do{
         console.log(m);
         m++;
     }
     while(m<5);
     k++
 }
 while(k<5);

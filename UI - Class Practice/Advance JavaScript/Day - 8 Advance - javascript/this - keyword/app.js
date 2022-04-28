// keyword - this 
// this - its  a special variable that is created for every execution context takes the value of the owner of the function in which this keyword is used
// this is NoT static
// 

// how to declare object // in object we keep function is know as method

const koushik = {
    year : 1995,
    calcAge : function(year){
        console.log(2022 - year)
    },
};
koushik.calcAge(1995); // call a normal function


// using this keyword

const peter  = {
    year1 : 1995,
    calcAge : function(){
        console.log(this);
        console.log(2022- this.year1);
    },
};
peter.calcAge(1995);

// using this key word in normal function

const calcAge = function(){
    console.log(this); // in strict mode it is undefined - `use strick`
};
calcAge(); // so it will display in sloop mode ( that is window)



// using arrow function

const calcAgeArrow =() => {
    console.log(this);
};
calcAgeArrow(); // this keyword in - arrow functin always shows in window (globle scope)

// arrow function suites to function in which function we call the arrow function 

jhon  = {
    year1 : 1995,
    calcAge : function(){
        const calcAgeArrow =() => {
            console.log(this); // it doesn`t have its own this keyword
        };
        calcAgeArrow();
        console.log(this);
        console.log(2022- this.year1);
    },
};
jhon.calcAge(1995);

// to see in window

var x = 10;

// 
function add(){
    const y = 90;
    console.log(y);

}
add();

// it is went inside the add function

// if(true){
// var block = 20;
// const r = 67;
// let  w = 25;
// };


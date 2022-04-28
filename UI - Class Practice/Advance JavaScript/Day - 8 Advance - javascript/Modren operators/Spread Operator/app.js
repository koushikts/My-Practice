 // spread Operator - v. imp

 const country = [`India`,`italy`,`Usa`,`Uk`,`Australia`];

 const newCountries = [`New Zealand`, `China`, ...country]; // it has spreaded the all country array 

 console.log(newCountries);

 console.log(...country); // spreading all the elements


 // Rest Pattern and parameters (... others)

 const country2 = [`India`,`italy`,`Usa`,`Uk`,`Australia`];
 const [c1, c2, ...others] = country2

 console.log(c1);
 console.log(c2);
 console.log (others);


 //

 const number = [2,3,4,5];

 function printNum (...nums){  //rest pattern ([2,3,4,5])


    for (let i =0; i<nums.length; i++){
        console.log(nums[i]);
        // console.log(nums)
    }
 }

 printNum(...number);  // spreading (2,3,4,5)

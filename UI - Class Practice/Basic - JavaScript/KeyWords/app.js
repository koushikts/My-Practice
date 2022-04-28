// 3 types of Key words - var (ES5), let & const (ES6)
//  1) var - it can be re-declarable & Accessable oust side the block  (block means - {} curly brackets)
//eg -
var a = 10;
    a = 20;
var b = 15;
    {
        var b = 15; // declared inside - it can accessable outside the block
        console.log(a) // inside the block
    }
    console.log(b) // outside the block
//  2) let -  it can be redeclarable & it can`t be Accessable outside the block (But it can accessable inside the block)
// eg -
let x = `hi`;
    x = `Hello`;
    {
    
         let y = "Good morning"; // declared inside
         console.log(y); 
    }
    // console.log(y); - it can`t accessable outside the block (it threw error - like  y is not defined)
        console.log(x); // inside the block

//  3) const - it can not be redeclarable & it can`t be Accessable outside the block (But it can accessable inside the block)
const z = "Happy Morning";
    //   z = `Have a Great Day` // Redeclaration is not possible 
      {
          console.log(z);
          let z1 = 'Great Day'; // inside declared
          console.log.apply(z1) // inside declared - it can be accessable - but it can`t be accesable outside the block quote 

      }

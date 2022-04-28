// String Method
let str = `Today is Good Friday`;
console.log(str[0]); //  it give particular index
console.log(str); // give fiull string

// 1. indexof() - It returns the Index of first accurance of the given Character
str = `I am koushik working in dtree`;
console.log(str.indexOf(`koushik`));

// 2. lastIndexof() - It returns the  Last accurance of the given Character
str = `I am koushik employee koushik in dtree`;
console.log(str.lastIndexOf(`koushik`));

// 3. charAt() - It returns Character at Specified index
str = `I am koushik working in dtree`;
console.log(str.charAt(15));

// 4. charCodeAt() - ASCII code of the Character at Specified index (ASCII table)
str = `I am koushik working in dtree`;
console.log(str.charCodeAt(`working`));

// 5. substr(fromindex, length) - Extracting aportion of a string
str = `I am koushik working in dtree`;
console.log(str.substr(7, 5));

// 6. Substring(fromindex, toindex ) -Extracting aportion of a string -1 to index
str = `I am koushik working in dtree`;
console.log(str.substring(5, 14)); //string -1 to index, so it ended with 13 letter

// 7. split() - converts strings to an array
str = `I am koushik working in dtree`;
console.log(str.split("")); // gives space for every letter with ' '
console.log(str.split(" ")); // gives space for every word with ' '

// 8. replace() - replace old word into new word
str = `I am koushik working in dtree for six days in a week`;
console.log(str.replace(`am`,`was`)); // it repalce the am to was
console.log(str.replace(`six`,`6`)); // it replace the character to number also


// 9. toLowerCase() - Coverts Entire String into lowercase
str = `I AM KOUSHIK`
console.log(str.toLocaleLowerCase());

// 10. toUpperCase() - Coverts Entire String into uppercase
str = `i am koushik working`
console.log(str.toUpperCase());

// 11. search() - It returns index of the given character
str = `I am koushik working in dtree for six days in a week`;
console.log(str.search(`koushik`)); //
console.log(str.search(`vinay`)); // vinay word is not in string so it results (-1)

// 12. concat() - merge two string
str = `I am koushik`;
 let str1 = ` Working in dtree from 1 month`;
console.log(str.concat (str1));  // str & str1 merged


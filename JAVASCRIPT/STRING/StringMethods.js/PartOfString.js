let str="Aayush singh";

//str.slice(start, end)  method extracts a part of a string and returns the extracted part in a new string.

console.log(str.slice(-5)); 
console.log(str.slice(10, 17)); 
console.log(str.slice(-2,-7));
//str.substring(start, end) method extracts the characters from a string, 
// between two specified indices and returns the new sub string.
//if we give only one indice then it returns the string after that index,(that index is included)
console.log(str.substring(7)); 
//In substring function 0 treated as a 0 that's why
console.log(str.substring(-4));

 // "protest"

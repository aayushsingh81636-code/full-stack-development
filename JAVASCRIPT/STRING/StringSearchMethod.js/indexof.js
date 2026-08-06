// indexOf() method returns the index of the first occurrence of a specified text in a string.
//  It returns -1 if the text is not found.
let a="I just want to learn javascript and I want to Learn it well";
console.log(a.indexOf("want"));
//The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
console.log(a.lastIndexOf("want"));
//Both indexOf(), and lastIndexOf() return -1 if the text is not found:
console.log(a.indexOf("xyz"));
console.log(a.lastIndexOf("xyz"));
//Both methods accept a second parameter as the starting position for the search:
console.log(a.indexOf("want", 10));
console.log(a.lastIndexOf("want", 10));
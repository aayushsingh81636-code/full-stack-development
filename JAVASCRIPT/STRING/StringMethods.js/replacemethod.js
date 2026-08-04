//replace() method replaces a specified value with another value in a string.
let str = "Hello World ";
let newstr = str.replace("World", "Universe");
console.log(newstr);
// The replace() method does not change the string it is called on.It returns a new string.
//The replace() method replaces only the first match of a string.
let str1 = "Please visit Microsoft and Microsoft!";
let newstr1 = str1.replace("Microsoft", "W3Schools");
console.log(newstr1);
//By default, the replace() method is case sensitive. 
//replaceall() method replaces a specified value with another value in a string.
let str2 = "Please visit Microsoft and Microsoft!";
let newstr2 = str2.replaceAll("Microsoft", "W3Schools");
console.log(newstr2);

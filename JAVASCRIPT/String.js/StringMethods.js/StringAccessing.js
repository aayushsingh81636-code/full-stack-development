let str="";
//charAt() method returns the character at a specified index (position) in a string:
console.log(str.charAt(0));
//charCodeAt() method returns the Unicode of the character at a specified index in a string:
console.log(str.charCodeAt(0));
/*at() method returns the character at a specified index (position) in a string:
it supports negative indices too and it is new to ES2022*/
console.log(str.at(0));
console.log(str.at(-4));
/**property access might be unpredictable */
console.log(str[0]);
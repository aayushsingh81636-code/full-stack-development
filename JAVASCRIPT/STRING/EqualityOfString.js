let string1 = "Hello, World!";
let string2 = new String("Hello, World!");
let areEqual = string1 === string2;
console.log(areEqual);
/** This will log false because string1 is a primitive string and string2 is a String object */
let string3 = new String("Hello, World!");
let string4 = new String("Hello, World!");
let areEqualObjects = string3 === string4;
console.log(areEqualObjects);
/** This will log false because string3 and string4 are two different String objects, even though they contain the same value */
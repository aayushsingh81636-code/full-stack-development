let a="100";
console.log("This is a numeric string -",a);
let b="Aayush singh";
console.log("This is a non numeric string -",b);
//Javascript will try to convert the string into number in all numeric operation except +
//Otherwise it give NaN (not a number)
let c="34";
console.log("substraction",a-c);//66
console.log("division",a/c);//2.9411
console.log("multiplication",a*c);//3400
console.log("addition or concatenation",a+c);//10034
  
 
console.log("substraction",a-b);//NaN
console.log("division",a/b);//NaN
console.log("multiplication",a*b);//NaN
console.log("addition or concatenation",a+b);//100Aayush singh

//isNaN() function to find whether a value is number or not
let k=a-b;
if(isNaN(k)){
    console.log("true");
}
// If you use NaN in a mathematical operation, the result will also be NaN:
let i=NaN;
let j=3;
console.log(i+j);
typeof NaN
console.log(typeof NaN);
console.log(typeof Infinity);
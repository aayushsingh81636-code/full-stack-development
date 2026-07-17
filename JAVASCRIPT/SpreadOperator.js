let s="hello";
console.log(...s);/*Spread operator is used to expand the iterables(array,string etc) into individual characters. 
In this case, it will log each character of the string "hello" separately: h e l l o*/
let arr=[1,2,3];
console.log(...arr);
let s1="world";
let s2="!";
console.log(...s1,...s2);/*Spread operator is also used to combine multiple iterables into a single
iterable.*/ 
let arr1=[4,5,6];
let arr2=[7,8,9];
let combinedArr=[...arr1,...arr2];
console.log(combinedArr);

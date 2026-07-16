//Logical AND Assignment Operator

/*
 * false
0
-0
0n       // BigInt zero
""       // Empty string
null
undefined
NaN */ //these values are considered falsy values in JavaScript. All other values are truthy values.
let a=true;
let b=false;
console.log(a&&=b);

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
/**if both operands are truthy, the result of the logical AND operation is the value of the second operand.
 *  If either operand is falsy, the result is the value of the first falsy operand.*/
let a=true;
let b=false;
console.log(a&&=b);
//Logical OR Assignment Operator
/** If the first operand is truthy, the result is the value of the first operand.
 *  If the first operand is falsy, the result is the value of the second operand.*/
let c=false;
let d=true;
console.log(c||=d);
//Logical Nullish Assignment Operator
/** If the first operand is not null or undefined, the result is the value of the first operand.
 *  If the first operand is null or undefined, the result is the value of the second operand.*/ 
let e=null;
let f=10;
console.log(e??=f);

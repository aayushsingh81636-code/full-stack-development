//The Number.isInteger() method returns true if the argument is an integer.
let a=12;
let b=34.5;
console.log(Number.isInteger(b));
// The Number.isFinite() method returns true if the argument is not Infinity, -iInfinity, nor Nan.
console.log(Number.isFinite(a))
c=Infinity;
console.log(Number.isFinite(c))
//The Number.isNaN() method returns true if the argument is NaN (Not a Number).
//Number.isNaN() is the preferred way to check for equality with NaN. 
// You cannot test for equality with NaN using == or ===.
d=Infinity;
console.log(Number.isNaN(NaN));

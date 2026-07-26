let a="Aayush singh";
let b=a.isWellFormed();
console.log(b);
//if a string is contains lone surrogates then that string is not well performed
let c="Aayush singh \uD800";
let d=c.isWellFormed();
console.log(d);
// toWELLPERFORMED() FUNCTION replace the lone surrogates with the unicode replacement character
let e=c.toWellFormed();
console.log(e);

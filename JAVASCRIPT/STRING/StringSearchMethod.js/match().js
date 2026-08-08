//The match() method returns an array containing the results of matching a string against a string (or a regular expression).
let a="I just want to learn javascript and I want to Learn it well";
let b=a.match("want");
console.log(b);

//perform a global search for the word "want" in the string and return all occurrences
let a="I just want to learn javascript and I want to Learn it well";
let b=a.match(/want/g);
console.log(b);
//perform a case-insensitive search for the word "want" in the string and return all occurrences
let a="I just want to learn javascript and I WANT to Learn it well";
let b=a.match(/want/gi);
console.log(b);
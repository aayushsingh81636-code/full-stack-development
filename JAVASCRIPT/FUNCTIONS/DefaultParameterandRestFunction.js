//Default value parameter 
function add(a,b=8){
    return a+b;
}
add(5); // returns 13 because b defaults to 8
//Rest parameter
function sum(...numbers){
    let sum=0;
   for(let number of numbers) sum+=number;
   return sum;
}
sum(1, 2, 3, 4, 5); // returns 15
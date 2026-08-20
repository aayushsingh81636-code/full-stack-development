function sum(){
    let total=0;
    for(let i=0;i<arguments.length;i++){
        total+=arguments[i];
    }
    return total;
}
//arguments object is an array like object that contains all the arguments passed to a function
let a=sum(10,20,30,40,50);
console.log(a);

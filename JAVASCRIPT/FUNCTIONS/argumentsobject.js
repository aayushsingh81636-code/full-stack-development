function sum(){
    let total=0;
    for(let i=0;i<arguments.length;i++){
        total+=arguments[i];
    }
    return total;
}
let a=sum(10,20,30,40,50);
console.log(a);

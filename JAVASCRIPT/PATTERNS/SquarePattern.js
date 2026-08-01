for(let i=1;i<=5;i++){
   for(let j=1;j<=5;j++){
        process.stdout.write(j + " "); //  process.stdout.write("* "); is a Node.js API/method used to write output to the terminal.
   }
   process.stdout.write("\n"); // Move to the next line after each row
}
//console.log("\n"); // Add an extra newline for better readability that's why we are using " process.stdout.write("\n") " instead of 
// console.log("\n")
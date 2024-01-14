let k = 50, l = 100;
let operation = (k > 20) && (l < 150);
console.log("let k = 50, l = 100")
console.log(); //br
console.log("And Operator && : ") //both condition need to true othewise it show FALSE
console.log("(k > 20) && (l < 150) == " + operation);
console.log(); //br
console.log("Or Operator || "); //any single or both condition need to true othewise it show FALSE
operation = (k < 20) || (l > 150);
console.log("(k < 20) && (l > 150) == " + operation)
console.log(); //br
console.log("Not Operator ! ")
console.log("Operation = " + operation ); //if condition is true it show false & if condition false it will show true.
console.log(); //br
console.log("Operation = " + !operation );

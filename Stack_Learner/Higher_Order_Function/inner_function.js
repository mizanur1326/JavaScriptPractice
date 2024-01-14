//NOT WORKING FOR ME VIDEO TIME- 6H:21M
function displayTable(n) {
    const isOdd = (n) => n % 2 !== 0; //innerFunction
    const isEven = (n) => n % 2 == 0; //innerFunction

 for(let i=0; i<n; i++){
    if(isOdd(i)){
        console.log("Table Row [#000] -", i + 1);
    } else if(isEven(i)){
        console.log("Table Row [#fff] -", i + 1);
    }
 }
}
// displayTable(10);

isOdd(10);
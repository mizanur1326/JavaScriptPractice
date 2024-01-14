// for (let a = 1; a<= 100; a++) { //(i = 1; CALLED INITIALIZER) {i<=100; called Condition}
//     console.log(a);    
// }

let sum = 0 //for loop used if start & end value declared. That means we know start value & end value.
for (let b = 1; b<=5; b++){
    console.log("SUM = ", sum, "b = " + b + " Sum + b=", sum + b )
    sum = sum + b
}
console.log("Sum =", sum )
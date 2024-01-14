const arr = [800, 200, 30, 40, 500];
const n = arr[3];
const m = arr[2];
const x = 1;
const y = 0;
//console.log(m, n, arr[x], arr[y],arr[x] + arr[y], arr[x + y + 1]);
//console.log(arr[x])
// console.log(arr[y])
// console.log(arr[1])
//Calling array
for (let i=0; i<arr.length; i++){
    //console.log(arr[i]) //test array output
}

//array sum
let sum =0;
for (let i = 0; i<arr.length; i++){
    sum = sum + arr[i]
}
//console.log(sum) //sum calculate

//Finding Avg of Numbers
//console.log(sum/ arr.length)

//Finding Largest Number
let largeNum = arr[0];
for(let i = 0; i<arr.length; i++){
    if (arr[i]>largeNum){
        largeNum = arr[i]
    }
}
//console.log(largeNum)
//Finding Smallest Number
let SmallNum = arr[0];
for (let i = 0; i<arr.length; i++){
    if(arr[i]<SmallNum){
        SmallNum = arr[i]
    }
}
//console.log(SmallNum)
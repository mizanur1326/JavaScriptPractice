const arr1 = [4, 6, 10, 29, 3, 25, 8, 50];
const arr2 = [45, 31, 12, 1, 5, 47, 6, 9];
const arr3 = [1, 5, 49, 75, 105, 0, 9];
//arr1 max loop
// let max = arr1[0];
// for (let v of arr1){
//     if (v > max){
//         max = v;
//     }
// }
//arr2 max loop
// console.log(max);
// let max2 = arr2[0];
// for (let v of arr2){
//     if (v > max2){
//         max = v;
//     }
// }
// console.log(max2);

//FIND ANY ARRY MAX BY USING FUNCTION
function findMax(arr){
    let max = arr[0];
    for (let v of arr){
        if (v > max){
            max = v;
        }
    }
    return max;
}

console.log(findMax(arr1));
console.log(findMax(arr2));
console.log(findMax(arr3));
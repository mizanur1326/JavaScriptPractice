//Update Array Elements and Fill Array
//Array fill manual way
const arr1 = new Array(10);
for (let i = 0; i < arr1.length; i++){
    arr1[i] = false;
}
//console.log(arr1);


//Array Fill
const arr2 = new Array(10);
arr2.fill(0);
//console.log(arr2)

const names = ["Mizanur", "Rahman", "Ahad"];
names[0] = "Mizanur Rahman";
names[1] = "Ahad Rahman"
// console.log(names);

//Fill Array and update
const response = new Array(9);
response.fill(false);
for (let i=0; i<response.length; i++){
    const rand = Math.floor(Math.random() * 10 +1);
    response[i] = rand > 5? "X" : "O";
}
//console.log(response)

//Array is mutable   //ITS NOT WORKING video time 5:01H
function update(arr){
    for (let i = 0; i < arr.length; i++){
        arr[i] = `${i+1}. ${arr[i]}`;
    }
    return arr;
}
const upadatedNames = update(names);
console.log(names);
console.log(upadatedNames);
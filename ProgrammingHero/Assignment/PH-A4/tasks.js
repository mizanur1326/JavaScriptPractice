// Task 1
function calculateMoney(ticketSell){
    let ticketPrice = 120;
    let guardExp = 500;
    let lunchExp = (8 * 50);

    let calculate = (ticketSell * ticketPrice) - (guardExp + lunchExp);

    if(ticketSell<0){
        return "Error!"
    }

    return "Baker vai has tk after Guard & Lunch Exp : " + calculate;
}

// console.log(calculateMoney(-10));

// Task 2
function checkName(name){
    let vowels = ['a', 'y', 'i' , 'e' , 'o' , 'u', 'w'];
    let lt = name.toLowerCase();
    let lastName = lt.slice(-1);

    if(vowels.includes(lastName)){
        return "Good Name"
    }else{
        return "Bad Name"
    }
        
    return lastName;
}
// console.log(checkName("MizanurA"))

// Task 3
function deleteInvalids() {
    const nums = [NaN, 'a', '5', 5,  1, 12, 0, -1, undefined]
    if (!Array.isArray(nums)) {
        return "Invalid Array!";
    }

    return nums.filter(function(validation) {
        return typeof validation === 'number' && !isNaN(validation);
    });
    return deleteInvalids();
}

// console.log(deleteInvalids());

//Task 4
function password(info) {
    if (!info.name || !info.siteName || !info.birthYear || info.birthYear.toString().length !== 4) {
        return "Invalid!";
    }

    // Capitalize the first letter of siteName
    const upperCase = info.siteName.charAt(0).toUpperCase() + info.siteName.slice(1);

    const password = `${upperCase}#${info.name}@${info.birthYear}`;
    return password;
}

// console.log(password({ siteName: 'google', name: "Rahim", birthYear: 2000 }));

// Task 5

function monthlySavings(allPayments, livingCost){
    for (let i = 0; i < allPayments.length; i++){
        if(allPayments[i]> 3000){
            allPayments[i] -= allPayments[i] * 2;
        }
    }
    let total = 0;
    for(let i in allPayments){
        total += allPayments[i];
    }
    if(total > livingCost){
        return "Savings is " + (total - livingCost);
    }else{
        return "Earn More"
    }
}
console.log(monthlySavings([1000, 2000, 2500], 5000))





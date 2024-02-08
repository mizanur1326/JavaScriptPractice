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
console.log(checkName(""))

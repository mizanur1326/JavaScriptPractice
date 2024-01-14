const day = 5;
switch (day){
    case 0:
        console.log("Saturday");
        break
    case 1:
        console.log("Sunday");
        break
    case 2:
        console.log("Monday");
        break
    case 3:
        console.log("Tuesday");
        break
    case 4:
        console.log("Wednesday");
        break
    case 5:
        console.log("Thrusday");
        break
    case 6:
        console.log("Friday");    
    default:
        throw new Error("Invalid Day Input")
}
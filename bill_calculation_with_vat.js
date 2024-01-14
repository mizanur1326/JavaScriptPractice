let no = 250;
if(no>=500){
    console.log("Your bill is " + no + "." + " And total bill with vat " + (no + no * .20));
} else if(no>=400){
    console.log("Your bill is " + no + "." + " And total bill with vat " + (no + no * .10));
} else if(no>=200){
    console.log("Your bill is " + no + "." + " And total bill with vat " + (no + no * .5));
} else {
    console.log("Your bill is " + no + "." + " And total bill without vat " + (no + no * 0));
}
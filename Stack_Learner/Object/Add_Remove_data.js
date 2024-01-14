const x = {}; //this is object. Object stores in Karlibrace but not in function.
console.log(typeof x);

const person1 = {};
person1.fName = "Mizanur";
person1.lName = "Rahman";
person1.email = "mizanur1326@gmail.com";
console.log(person1);
console.log(person1.email);

const person2 = {
    fName: "Ahad",
    lName: "Rahman",
    email: "mizanur1326@gmail.com",
    age: "26",
}
//add on object
person2.id = "1277622";
person2.phone = "01768139923"
console.log(person2);
//delete/remove from object
delete person2.age;
console.log(person2); //age delete
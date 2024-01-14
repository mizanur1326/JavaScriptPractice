// const p1 = {
//     name : "Mizanur Rahman",
//     id : "1177622",
// }
// const p2 = {
//     name : "Ikbal Hossain",
//     id : "1277622",
// }
// const p3 = {
//     name : "Shuvo",
//     id : "137622",
// }
// const people = [p1, p2, p3];
// console.log(people);
// console.log(people[0].name);

const peoples = [
    {
        name : "Mizanur Rahman",
        id : "1177622",
    },
    {
        name : "Ikbal Hossain",
        id : "1277622",
    },
    {
        name : "Shuvo",
        id : "137622",
    },
]
// console.log(peoples);
for (let p of peoples){
    console.log(`${p.name} ID:- (${p.id})`);
}

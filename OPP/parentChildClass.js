class Person {
    constructor(name, age, district){
        this.name = name
        this.age = age
        this.district = district
    }
    showPerson(){
        return `Hi! I'm ${this.name}. Age- ${this.age}. I'm from ${this.district}.`
    }
}
class PersonSkill extends Person{
    constructor(name, age, district, skill){
        super(name, age, district,age)
        this.skill = skill
    }
    showSkill(){
        return this.showPerson() + `I'm expert on ${this.skill}`
    }
}

const person = new PersonSkill("Mizanur Rahman", 25, "Narayanganj", "Web Development")
console.log(person.showSkill())
//console.log(person)
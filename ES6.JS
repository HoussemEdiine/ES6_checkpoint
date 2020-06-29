let pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
];
let getAge = pet => { return new Date().getFullYear() - pet.bornOn }
let petsWithAge = [];
petsWithAge = pets.map(pet => {
    pet.age = getAge(pet)
    return pet
})
console.log(petsWithAge)
let dogs = []
dogs = pets.filter(element => element.type == 'dog')
console.log(dogs)
let jasper
jasper = pets.find(element => element.name == 'Jasper')
console.log(`Jasper is ${jasper.age} years old `)


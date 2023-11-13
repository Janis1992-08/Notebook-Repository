/* -------------------- Destructuring Assignment - Objects ------------------------- */

const tree = {
    name: "oak",
    age: 1200,
    scientificName: "quercus"
};

const name = tree.name;
const age = tree.age;
const scientificName = tree.scientificName;

//const { name, age, scientificName: otherName } = tree;
___________________________________________________________________________________

const  {
    name,
    age,
    scientificName: otherName,
    keepsLeavesInWinter = false,
} = tree;

console.log(name);
console.log(age);
//console.log(scientificName);
console.log(otherName)

___________________________________________________________________________________

const {name: treeName ...information} = tree;

console.log(treeName);
console.log(information); 

___________________________________________________________________________________

const {name, age, scientificName, keepsLeavesInWinter} = tree;

console.log(name);
console.log(age);
console.log(scientificName);
console.log(keepsLeavesInWinter);



/* ---------------------- Destructuring Assignment - Arrays ---------------------------- */

const animals = ["Lion", "Tiger", "Penguin", "Bear", "Whale", "Raccoon"];

const [
firstAnimal,
secondAnimal,
thirdAnimal,
fourthAnimal,
fifthAnimal
] = animals;

console.log(firstAnimal);
console.log(secondAnimal);
console.log(thirdAnimal);
console.log(fourthAnimal);
console.log(fifthAnimal);

___________________________________________________________________________________

const [lion, , penguin, , ,  raccoon] = animals;

console.log(lion);
console.log(penguin);
// console.log(bear);
console.log(raccoon);

___________________________________________________________________________________

const [lion, , penguin, , ,  raccoon] = animals;

const raccoonTheOldWay = animals[5]
___________________________________________________________________________________
const animals = ["Lion", "Tiger", "Penguin", "Bear", "Whale", "Raccoon"];

const [lion, ...rest ] = animals

console.log(lion);
console.log(rest);



/* -------------------------------- Rest Syntax ------------------------------------- */

const anotherAnimalList = ["Cat", "Dog", "Duck", "Pig", "Dragon", "Raccoon"]

function showZooAnimals(...allAnimals) {
    console.log(allAnimals);
    return `My zoo consists of the following animals: ${allAnimals.join(", ")}.`; 
}

console.log(showZooAnimals("Monkey", "Crocodile", "Whale"));




/* ------------------------------- Spread Syntax ------------------------------------- */

console.log(showZooAnimals(...anotherAnimalList));



// Add another value

const animalFood = ["Meat", "Apple", "Banana", "Carrot"];

const newAnimalFood = "Fish";

const allAnimalFood = [...animalFood, newAnimalFood];

console.log(allAnimalFood);

___________________________________________________________________________________

// Spread for concatenating two arrays

const firstAnimalList = ["Lion", "Tiger", "Penguin", "Bear", "Whale", "Raccoon"];


const secondAnimalList = ["Cat", "Dog", "Duck", "Pig", "Dragon", "Raccoon"]

const allAnimalList = [...firstAnimalList, ...secondAnimalList];

console.log(allAnimalList);



// working with concat method
const AnotherExample = animalFood.concat(firstAnimalList);
console.log(anotherExample);

console.log(animalFood);
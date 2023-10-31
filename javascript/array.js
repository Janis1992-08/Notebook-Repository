const shoppingList = ["apple", "banana", "cherry"]

shoppingList[1] = "tomato" //Zeigt das ausgewählte Element  

shoppingList.push("orange") //fügt hinzu

shoppingList.pop(); //Entfernt das letzte Element

console.log(shoppingList);

/* console.log(shoppingList[0]);
console.log(shoppingList.length); */





/* 
const diverse = [1, 2, "hello", true] //not best practice

const complex [1, 2, ["hello", false], true];
console.log(complex[2][1]); */



/* Objects */
//gekennzeichten duch geschweifte klammern

const person = {
    //key / value pairs
    name: "Bibi Blocksberg",
    age: 21,
    isStudent: false; // Boolean
    address: {
        street: "Berlin Str.",
        houseNumber: 42,
        city: "leibzig",
        zipCode: "1234"
    }
} // Option 8/9


// dot notation
// object properties always with Key or Value 
console.log(person.address.street);
/* console.log(person["address"]["houseNumber"]) */
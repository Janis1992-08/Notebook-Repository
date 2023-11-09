Gamepad.forEach((game) => {
    const card = document.createElement("article");

    const headline = document.createElement("h2");
    headline.textContent = game.name;
    card.append(headline);

    document.body.append(card);
})


const uppercaseName = games.map((game) => {
    // Eine Anweisung => können wir kürzer schreiben!
    return game.name.toUpperCase();
})



// verkürzte schreibweise ohne geschweifte klammern
const uppercaseNamesWithShortHands = game.map((game) => 
game.name.toUpperCase();
);




const name = ["alex", "julian", "janis"];

const namesUpperCase = name.map( (studentName) => {
    return studentName.toUpperCase();
})




// Filter Methode
const gamebesfore200 = games.filter( (game) => {
    if (game.publishingYear < 2000) {
        return true;
    } else {
        return false;
    }
})


// Method chaining
const uppercaseNamesBefore200 = games
.filter((game) => game.publishingYear < 2000)// true or false
.map((game) => game.name.toUpperCase());

console.log(uppercaseNamesBefore200)




const numbers = [1, 3, 5, 7, 8]
numbers.filter(nummerodernameegal => nummerodernameegal >= 5)
.map(number => "" + number);





const personOverThirty = students.find((student) => student.age > 30)


const indexOfStudent = students.findIndex((student) => student.points === 39); 




// sort() durch slice() //wird eine kopie erstellt und array mutiert nicht
const sortedbyAge = students.slice()sort((studentA, studentB) => {
    if (studentA.age > StudentB.age) {
        return 1 // verschiebe studentA hinter studentB
    } else if (studentA.age < studentB.age) {
        return -1 // verschiebe studentB vor StudentA
    } 
    return 0; //keine änderung in der Sortierung 
}); 


// kurzschreibweise von sort
const sortedbyAge = students.sort((studentA, studentB) => {
    return studentA.age - StudentB.age // > 0 || < 0 || ===0
}); // original Array wurde neu sortiert (es wird mutiert)



const names = ['Alex', 'Julian', 'Janis', 'Rusmir', 'Franzi']
name.sort((studentA, studentB) => {
    console.log({studentA, studentB})
})


const sortedbyName = student.slice().sort((studentA, studentB) => {
    const nameA = studentA.name.toLowerCase();
    const nameB = studentB.name.toLowerCase();

    if (nameA > nameB) {
        return 1;
    }

    if (nameA < nameB) {
        return -1;
    }

    return 0;
})



const anystudenthaszero = students.some((student) => students.points === 0; );


const everystudentover = students.every((student) => student.age >= 30); //gibt True or False zurück



const numbers = [2, 3, 4, 5,]
numbers.reduce((acc, num) => acc + num, 0)
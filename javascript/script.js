


// function declaration
function printInvitation() {
    console.log(`Dear ${name}`)
    console.log('Iwould love to see you at my wedding.')
    console.log('Hope you can make it')
}

// function execution / function call
printInvitation('Rusmir'); 
printInvitation('Amgad'); 


/* //  NICHT SO MACHEN 
let number1 = 3;
let number2 = 4;

function addTwoNumbers() {
    console.log(number1 + number2)
}

addTwoNumbers(); */




function addTwoNumbers(number1, number2) {
    console.log(number1 + number2)
}

addTwoNumbers(3,4);




function addThreeNumbers(number1, number2, number3) {
    const sum = number1 + number2 + number3;

    console.log(sum);
}

addThreeNumbers(3,4,5);


function greet(name) {
    console.log("Welcome " + name + ", good to see you again!");
  }
  
  greet("Alice");
  greet("Bob");
  greet("Mary");




  function printCircumference(radius) {
    const Pi = Math.PI;
    const circumference = 2 * Pi * radius;
    console.log(circumference);
  }
  
  printCircumference(4);
  printCircumference(6);



  function printRectangleArea(width, length) {
    const area = width * length;
    console.log("The area of the rectangle is " + area);
  }
  printRectangleArea(5, 7);
  printRectangleArea(3, 4);
  


const display = document.querySelector('[data-js='])
  function addThreeNumbers(first, second, third) {
    const sum = first + second + third;
    return sum;
    console.log(sum);
}

const sum6Numbers = add3Numbers(1,2,3) + add3Numbers(4,5,6)
console.log(`The sum ist ${sum6Numbers}`)

/* console.log(`The sum is ${add3Numbers(1, 2, 3)}`) */




function removeWhiteSpace(string) {
    const newString = string.trim();
    return newString;
}

function removeUpperCase(string) {
    const newString = string.toLowerCase();
    return newString;
}

const sanitizedString = removeWhiteSpace('      ABCDEFG       ')
const finalString = removeUpperCase(sanitizedString);

console.log(finalString);






function isOldEnough(age) {
    if(age > 18) {
        return true;
    } else {
        return false;
    }
}


function isStringCorrect(string) {
if(string.length <= 10) {
    return false;
}
if(!string.startWith('n')) {
    return false;
}
if(!string.include('#')) {
    return false;
}
return true;
}


// arrow Function 
display.addEventListener('click', () => {

})




// string concatenation 
function sayHello(name) {
    console.log("Hallo" + name + "!")
}

sayHello("Janis");
sayHello("Franzi")




//string interpolation / template literal
function sayHello(name) {
    name = name.toUpperCase(); //string methods 
   console.log(`Hallo ${name}!`) 
  }
  sayHello("Jan");
sayHello("Julian")








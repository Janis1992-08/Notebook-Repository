console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  
  event.preventDefault();// verhindert das abschicken.

  const formElements = event.target.elements;



  const person = {
    firstName: formElements.firstName.value,
    lastName: formElements.lastName.value,
    age: Number(formElements.age.value)
  };

  console.log(person);
});



const button = document.querySelector('[data-js="button]')

button.addEventListener("click", (event) => {
  console.log(event);
});


const formData = new FormData(event.target);
const data = Object.fromEntries(formData);


console.log(data);




// Daten sind validiert
// Daten werden verschickt



// Formular wird zurückgesetzt 
event.target.reset();


// Feld wird fokusiert 
formElements.age.focus();





const messageInput = document.querySelector('[data-js="personal-message]');
const remainingCharacters = document.querySelector('[data-js="remaining-characters]');

messageInput.addEventListener("input", (event) => {
const charactersLeft = 150 - event.target.value.length;
remainingCharacters.textContent = charactersLeft;

console.log(charactersLeft)
});




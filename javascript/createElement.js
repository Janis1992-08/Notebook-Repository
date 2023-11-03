
//createElement
const newCard = document.createElement("li");
newCard.textContent = "Hello World";
newCard.classList.add("card");

cardContainer.append(newCard);



//createElement on form submit
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const newCard = document.createElement("li");
    newCard.classList.add("card");

    const title = document.createElement("h2");
    title.textContent = "card";
    title.classList.add("card__title");

    const text = document.createElement("p");

    text.textContent = textInput.value;

    newCard.append(title, text);
    cardContainer.append(newCard);
});



// soll vor dem Body eingefügt werden
const heading = document.createElement("h1");
heading.textContent = "create card";

document.body.insertBefore(heading, form);


//innerHTML
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const newCard = document.createElement("li");
    newCard.classList.add("card");

    newCard.innerHTML = `
        <h2 class="card__title">Card</h2>
        <p>${textInput.value}</p>
        `;
        cardContainer.append(newCard);
})


// remove content with innerHTML
document.body.innerHTML = "";
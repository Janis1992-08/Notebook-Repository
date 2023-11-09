// Fetch API

fetch();

export function joke(text) {
    const jokeElement = document.createElement("p");
    joke.Element
}



// Assemble DOM for joke section
const jokeSection = JokeSection();
root.append(jokeSection);




function renderJoke(joke) {
    // Clear the joke section
    jokeSection.innerHTML = "";

    // create a new joke DOM element and append it to 
    const newJoke = Joke(joke);

    jokeSection.append(newJoke);
}

// async macht es zu einer asyncronen funktion
async function getJoke() {
    const response = await fetch(Put-Link-here);
    const data = await response.json(); // adaptiert das format für JS.
    renderJoke(data.joke);
}



console.log(fretch(Put-Link-here));

